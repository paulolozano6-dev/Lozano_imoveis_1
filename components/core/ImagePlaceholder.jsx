import React from 'react';

export function ImagePlaceholder({ label = 'FOTO DO IMÓVEL', height = '100%' }) {
  return (
    <div style={{
      width: '100%',
      height,
      background: `repeating-linear-gradient(135deg, var(--neutral-200) 0 12px, var(--neutral-100) 12px 24px)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{ fontFamily: 'monospace', fontSize: 13, color: 'var(--neutral-600)', letterSpacing: '0.03em' }}>
        [{label}]
      </span>
    </div>
  );
}
