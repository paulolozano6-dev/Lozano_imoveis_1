import React from 'react';
import { ImagePlaceholder } from '../../components/core/ImagePlaceholder.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { ContactBar } from '../../components/core/ContactBar.jsx';

export function ReelCover({ title = 'Tour completo', subtitle = 'Cobertura duplex · Vila Mariana' }) {
  return (
    <div style={{ width: 1080, height: 1920, position: 'relative', fontFamily: 'var(--font-body)', background: 'var(--green-900)', overflow: 'hidden' }}>
      <ImagePlaceholder label="FOTO/FRAME DO VÍDEO — RETRATO" height="1920px" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,26,24,0.1) 0%, rgba(20,26,24,0.75) 78%)' }} />
      <div style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%,-50%)', width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 0, height: 0, borderTop: '28px solid transparent', borderBottom: '28px solid transparent', borderLeft: '44px solid var(--green-700)', marginLeft: 8 }} />
      </div>
      <div style={{ position: 'absolute', top: 64, left: 64 }}>
        <Badge variant="destaque">Reels</Badge>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 64px 72px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ font: '700 64px/1.1 var(--font-display)', color: '#fff' }}>{title}</div>
          <div style={{ font: 'var(--text-title)', color: 'rgba(255,255,255,0.8)', marginTop: 8 }}>{subtitle}</div>
        </div>
        <ContactBar phone="(11) 99999-0000" instagram="lozanoimoveis" dark logoSrc="../../assets/logo-lozano-transparent.png" />
      </div>
    </div>
  );
}
