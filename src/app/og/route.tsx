import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

const SITE_URL = 'https://portfolio-liart-three-r17ce5t2q7.vercel.app'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') ?? 'Eigirdas Skruolis'
  const subtitle = searchParams.get('subtitle') ?? 'Senior Frontend Engineer'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '1200px',
          height: '630px',
          backgroundColor: '#1e1712',
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
          style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
          alt=""
        />

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#f2ede3',
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#c97b4b',
              fontWeight: 500,
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#9c8f84',
              marginTop: '8px',
            }}
          >
            portfolio-liart-three-r17ce5t2q7.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
