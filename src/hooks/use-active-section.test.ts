import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useActiveSection } from './use-active-section';

vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

const mockObserve = vi.fn();
const mockDisconnect = vi.fn();
let intersectionCallback: IntersectionObserverCallback | null = null;

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        intersectionCallback = callback;
      }
      observe = mockObserve;
      disconnect = mockDisconnect;
      unobserve = vi.fn();
    },
  );

  document.body.innerHTML = `
    <section id="hero"></section>
    <section id="skills"></section>
    <section id="experience"></section>
  `;
});

afterEach(() => {
  vi.unstubAllGlobals();
  document.body.innerHTML = '';
  intersectionCallback = null;
  mockObserve.mockReset();
  mockDisconnect.mockReset();
});

describe('useActiveSection', () => {
  it('returns null initially', () => {
    const { result } = renderHook(() => useActiveSection());
    expect(result.current).toBeNull();
  });

  it('returns the id of the intersecting section', () => {
    const { result } = renderHook(() => useActiveSection());

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: true,
            target: document.getElementById('skills')!,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(result.current).toBe('skills');
  });

  it('updates when a different section becomes active', () => {
    const { result } = renderHook(() => useActiveSection());

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: true,
            target: document.getElementById('hero')!,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });
    expect(result.current).toBe('hero');

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: true,
            target: document.getElementById('experience')!,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });
    expect(result.current).toBe('experience');
  });

  it('ignores entries that are not intersecting', () => {
    const { result } = renderHook(() => useActiveSection());

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: false,
            target: document.getElementById('skills')!,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(result.current).toBeNull();
  });

  it('disconnects the observer on unmount', () => {
    const { unmount } = renderHook(() => useActiveSection());
    unmount();
    // React 19 StrictMode runs effects twice, so disconnect may be called more than once
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
