import { ImageResponse } from 'next/og'

export const alt = 'ISTech — B2B Data Engineering Consultancy'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0b1220',
          color: '#f5f5f5',
        }}
      >
        <div style={{ fontSize: 104, fontWeight: 800, display: 'flex' }}>ISTech</div>
        <div style={{ fontSize: 46, color: '#60a5fa', marginTop: 20 }}>B2B Data Engineering Consultancy</div>
        <div style={{ fontSize: 30, color: '#a3a3a3', marginTop: 48 }}>istechdata.com</div>
      </div>
    ),
    size,
  )
}
