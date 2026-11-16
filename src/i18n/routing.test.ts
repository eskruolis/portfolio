import { describe, expect, it } from 'vitest';
import {
  cvDownloadName,
  cvPdfPath,
  localePath,
  localeFromPathname,
  switchLocalePath,
} from './routing';

describe('localePath', () => {
  it('maps the home path to the bare locale root', () => {
    expect(localePath('en', '/')).toBe('/en');
    expect(localePath('lt', '/')).toBe('/lt');
  });

  it('keeps in-page anchors attached to the locale root', () => {
    expect(localePath('en', '/#projects')).toBe('/en#projects');
    expect(localePath('lt', '/#contact')).toBe('/lt#contact');
  });

  it('prefixes nested routes with the locale', () => {
    expect(localePath('en', '/work/chatbot-builder')).toBe(
      '/en/work/chatbot-builder',
    );
    expect(localePath('lt', '/blog/a-post')).toBe('/lt/blog/a-post');
  });
});

describe('localeFromPathname', () => {
  it('reads a known locale from the first segment', () => {
    expect(localeFromPathname('/lt/work/x')).toBe('lt');
    expect(localeFromPathname('/en')).toBe('en');
  });

  it('falls back to the default locale for unknown or missing segments', () => {
    expect(localeFromPathname('/')).toBe('en');
    expect(localeFromPathname('/work/x')).toBe('en');
  });
});

describe('switchLocalePath', () => {
  it('swaps an existing locale segment, preserving the rest', () => {
    expect(switchLocalePath('/en/work/x', 'lt')).toBe('/lt/work/x');
    expect(switchLocalePath('/lt', 'en')).toBe('/en');
  });

  it('prepends a locale when the path has none', () => {
    expect(switchLocalePath('/', 'lt')).toBe('/lt');
  });
});

describe('cvPdfPath', () => {
  it('serves the default locale from /cv.pdf and others from a suffixed file', () => {
    expect(cvPdfPath('en')).toBe('/cv.pdf');
    expect(cvPdfPath('lt')).toBe('/cv-lt.pdf');
  });

  it('names the download after the locale', () => {
    expect(cvDownloadName('en')).toBe('Eigirdas_Skruolis_CV.pdf');
    expect(cvDownloadName('lt')).toBe('Eigirdas_Skruolis_CV_LT.pdf');
  });
});
