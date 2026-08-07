import React from 'react';
import { ImagePlaceholder } from '../../components/core/ImagePlaceholder.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { PriceTag } from '../../components/core/PriceTag.jsx';
import { ContactBar } from '../../components/core/ContactBar.jsx';

export function Story({ title = 'Apto 3 quartos', location = 'Jardins, São Paulo', price = 'R$ 850.000', badge = 'Novo lançamento' }) {
  return (
    <div style={{ width: 1080, height: 1920, position: 'relative', fontFamily: 'var(--font-body)', background: 'var(--green-900)', overflow: 'hidden' }}>
      <ImagePlaceholder label="FOTO DO IMÓVEL — RETRATO" height="1200px" />
      <div style={{ position: 'absolute', top: 64, left: 64 }}>
        <Badge variant="novo">{badge}</Badge>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'var(--green-900)', padding: '56px 64px 72px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ font: '700 72px/1.1 var(--font-display)', color: '#fff' }}>{title}</div>
          <div style={{ font: 'var(--text-title)', color: 'rgba(255,255,255,0.75)', marginTop: 8 }}>{location}</div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.2)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ font: 'var(--text-label)', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Venda</span>
            <span style={{ font: '600 56px/1.1 var(--font-display)', color: 'var(--gold-500)' }}>{price}</span>
          </div>
          <ContactBar phone="(11) 99999-0000" instagram="lozanoimoveis" dark logoSrc="../../assets/logo-lozano-transparent.png" />
        </div>
      </div>
    </div>
  );
}
