/* eslint-disable @next/next/no-img-element -- Satori renders plain <img>;
   next/image is not available inside an OG ImageResponse. */
import { ImageResponse } from '@vercel/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eigirdas.dev';

/**
 * Brand mark, inlined as a data URI so the OG renderer never depends on a
 * network fetch to draw it. Keep in sync with src/app/icon.svg.
 */
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 34" fill="none">
  <defs>
    <linearGradient id="a" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#0d9488"/>
    </linearGradient>
    <linearGradient id="b" x1="32" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6ee7b7"/><stop offset="100%" stop-color="#2dd4bf"/>
    </linearGradient>
    <linearGradient id="c" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#065f46"/><stop offset="100%" stop-color="#0f766e"/>
    </linearGradient>
  </defs>
  <polygon points="4,10 16,4 16,22 4,28" fill="url(#c)"/>
  <polygon points="4,10 16,4 28,10 16,16" fill="url(#b)"/>
  <polygon points="16,16 28,10 28,28 16,22" fill="url(#a)"/>
  <polygon points="4,28 16,22 28,28 16,34" fill="#064e3b"/>
</svg>`;

const LOGO_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(LOGO_SVG)}`;

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title') ?? 'Eigirdas Skruolis';
  const subtitle =
    searchParams.get('subtitle') ?? 'Senior Software Engineer · Full-Stack';

  // Resolve the photo against the deployment actually serving this request, so
  // preview deployments and custom domains both work. A failed fetch here would
  // throw and make the whole OG image 500, so it is guarded below.
  const origin = req.nextUrl.origin || SITE_URL;

  let photo: string | null = `${origin}/profile.png`;
  try {
    const res = await fetch(photo, { method: 'HEAD' });
    if (!res.ok) photo = null;
  } catch {
    photo = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '1200px',
          height: '630px',
          backgroundColor: '#0e0f13',
          backgroundImage:
            'radial-gradient(ellipse at top left, rgba(52,211,153,0.14) 0%, transparent 55%)',
          padding: '56px 64px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src={LOGO_DATA_URI} width={52} height={55} alt="" />
          <div
            style={{
              fontSize: '26px',
              fontWeight: 700,
              color: '#eceef2',
              letterSpacing: '-0.5px',
            }}
          >
            eigirdas.dev
          </div>
        </div>

        {/* Main row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '56px' }}>
          {photo ? (
            <img
              src={photo}
              width={200}
              height={200}
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0,
                border: '2px solid rgba(52,211,153,0.4)',
              }}
              alt=""
            />
          ) : null}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '18px',
                color: '#34d399',
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#34d399',
                }}
              />
              Open to freelance &amp; full-time
            </div>
            <div
              style={{
                fontSize: '56px',
                fontWeight: 700,
                color: '#eceef2',
                lineHeight: 1.1,
              }}
            >
              {title}
            </div>
            <div style={{ fontSize: '26px', color: '#9aa1ad', fontWeight: 500 }}>
              {subtitle}
            </div>
          </div>
        </div>

        {/* Accent underline */}
        <div
          style={{
            display: 'flex',
            width: '160px',
            height: '5px',
            borderRadius: '3px',
            backgroundColor: '#34d399',
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
