import React from 'react';

const VARIANTS = {
  novo: { bg: 'var(--green-700)', fg: '#fff' },
  vendido: { bg: 'var(--neutral-900)', fg: '#fff' },
  destaque: { bg: 'var(--gold-500)', fg: 'var(--neutral-900)' },
};

export function Badge({ children, variant = 'novo' }) {
  const v = VARIANTS[variant] || VARIANTS.novo;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      background: v.bg,
      color: v.fg,
      font: 'var(--text-label)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    }}>
      {children}
    </span>
  );
}
