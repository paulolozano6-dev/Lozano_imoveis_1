import React from 'react';

export function PriceTag({ price, period }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ font: 'var(--text-label)', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {period ? 'Aluguel' : 'Venda'}
      </span>
      <span style={{ font: 'var(--text-display-2)', color: 'var(--green-700)' }}>
        {price}{period ? <span style={{ font: 'var(--text-title)', color: 'var(--text-muted)' }}> /{period}</span> : null}
      </span>
    </div>
  );
}
