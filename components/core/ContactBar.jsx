import React from 'react';

export function ContactBar({ name = 'Lozano Imóveis', phone, instagram, dark = false, logoSrc = '../../assets/logo-lozano-transparent.png' }) {
  const fg = dark ? '#fff' : 'var(--neutral-900)';
  const sub = dark ? 'rgba(255,255,255,0.75)' : 'var(--text-muted)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img src={logoSrc} style={{ height: 32 }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ font: 'var(--text-small)', color: fg, fontWeight: 700 }}>{name}</span>
        <span style={{ font: 'var(--text-small)', color: sub }}>
          {[phone, instagram && `@${instagram}`].filter(Boolean).join(' · ')}
        </span>
      </div>
    </div>
  );
}
