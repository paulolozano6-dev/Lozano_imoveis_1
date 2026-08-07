import React from 'react';
import { ImagePlaceholder } from '../../components/core/ImagePlaceholder.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { PriceTag } from '../../components/core/PriceTag.jsx';
import { ContactBar } from '../../components/core/ContactBar.jsx';

export function CarouselSlide({ variant = 'cover', index = 1, total = 5, title, body, price }) {
  const isCover = variant === 'cover';
  return (
    <div style={{ width: 1080, height: 1350, position: 'relative', fontFamily: 'var(--font-body)', background: '#fff', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
      <ImagePlaceholder label={isCover ? 'FOTO PRINCIPAL DO IMÓVEL' : `FOTO ${index}`} height={isCover ? '820px' : '650px'} />
      <div style={{ position: 'absolute', top: 40, right: 40, display: 'flex', gap: 6 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i === index - 1 ? 'var(--gold-500)' : 'rgba(255,255,255,0.6)' }} />
        ))}
      </div>
      <div style={{ padding: '40px 56px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {isCover ? (
          <>
            <Badge variant="novo">Novo lançamento</Badge>
            <div style={{ font: '700 56px/1.15 var(--font-display)', color: 'var(--green-900)' }}>{title || 'Cobertura com vista para o parque'}</div>
            <PriceTag price={price || 'R$ 1.250.000'} />
          </>
        ) : (
          <>
            <div style={{ font: 'var(--text-headline)', color: 'var(--green-900)' }}>{title || `Ambiente ${index - 1}`}</div>
            <div style={{ font: '400 22px/1.5 var(--font-body)', color: 'var(--text-muted)' }}>{body || 'Descrição do ambiente, acabamentos e diferenciais deste espaço.'}</div>
          </>
        )}
      </div>
      <div style={{ position: 'absolute', bottom: 32, left: 56, right: 56 }}>
        <ContactBar phone="(11) 99999-0000" instagram="lozanoimoveis" logoSrc="../../assets/logo-lozano-transparent.png" />
      </div>
    </div>
  );
}
