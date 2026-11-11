import { ImageResponse } from 'next/og';

// Required with `output: 'export'`: the OG image is generated at build time.
export const dynamic = 'force-static';

export const alt = 'Ulkhad Pharaon — Films, Products, Systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 64, background: '#0b0a09', color: '#f0ece1', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#d2a95c', letterSpacing: 4 }}>
          ULKHAD PHARAON <span style={{ color: '#a9c6b4' }}>OUAGADOUGOU / BF</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ fontSize: 116, lineHeight: 0.92, letterSpacing: -4, display: 'flex', fontFamily: 'Georgia, serif' }}>
            Films. Products.<br />Systems.
          </div>
          <div style={{ marginTop: 28, fontSize: 24, color: '#b9b3a7', letterSpacing: 1 }}>
            CINEMA · VFX · REAL-TIME 3D · AI SYSTEMS
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, letterSpacing: 3, color: '#d2a95c' }}>
          <span>ULRICH TAPSOBA</span>
          <span>PORTFOLIO / 2026</span>
        </div>
        <div style={{ position: 'absolute', right: -70, top: -70, width: 360, height: 360, borderRadius: 360, border: '1px solid rgba(210,169,92,.35)', display: 'flex' }} />
        <div style={{ position: 'absolute', right: 60, bottom: 96, width: 210, height: 210, borderRadius: 210, border: '1px dashed rgba(169,198,180,.35)', display: 'flex' }} />
      </div>
    ),
    { ...size },
  );
}
