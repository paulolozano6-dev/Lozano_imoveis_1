import React from 'react';

const W = 700, H = 400; // 3.5 x 2 in @ 200dpi

export function BusinessCard({ side = 'front', name = 'Paulo Lozano', role = 'Corretor de Imóveis', phone = '(11) 99999-0000', instagram = 'lozanoimoveis' }) {
  if (side === 'front') {
    return (
      <div style={{ width: W, height: H, background: 'var(--green-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)' }}>
        <img src="../../assets/logo-lozano-transparent.png" style={{ height: 180 }} />
      </div>
    );
  }
  return (
    <div style={{ width: W, height: H, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 40, fontFamily: 'var(--font-body)', border: '1px solid var(--border-subtle)' }}>
      <div>
        <div style={{ font: '600 30px/1.2 var(--font-display)', color: 'var(--green-900)' }}>{name}</div>
        <div style={{ font: 'var(--text-small)', color: 'var(--text-muted)', marginTop: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{role}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ font: 'var(--text-body)', color: 'var(--neutral-900)' }}>{phone}</span>
        <span style={{ font: 'var(--text-body)', color: 'var(--neutral-900)' }}>@{instagram}</span>
      </div>
    </div>
  );
}
