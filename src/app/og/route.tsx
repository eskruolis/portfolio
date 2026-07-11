import { ImageResponse } from '@vercel/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://portfolio-liart-three-r17ce5t2q7.vercel.app';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title') ?? 'Eigirdas Skruolis';
  const subtitle =
    searchParams.get('subtitle') ?? 'Senior Software Engineer · Full-Stack';

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '1200px',
        height: '630px',
        backgroundColor: '#0e0f13',
        backgroundImage:
          'radial-gradient(ellipse at top left, rgba(52,211,153,0.12) 0%, transparent 55%)',
        padding: '64px',
        alignItems: 'center',
        gap: '56px',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Profile photo */}
      <img
        src={`${SITE_URL}/profile.png`}
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

      {/* Text */}
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
          Open to freelance & full-time
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
        <div
          style={{
            fontSize: '26px',
            color: '#9aa1ad',
            fontWeight: 500,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            fontSize: '20px',
            color: '#5d6470',
            marginTop: '8px',
          }}
        >
          {SITE_URL.replace(/^https?:\/\//, '')}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
