# Lozano Imóveis — Design System

Marca pessoal de Paulo Lozano, corretor de imóveis autônomo (parceiro de imobiliárias e incorporadoras). Presença hoje em Instagram, Facebook e WhatsApp Business. Sem website ainda — landing page é uma necessidade futura.

**Fontes usadas:**
- Logo enviado pelo usuário (`uploads/assets-1786121064952-1e35.jpg`) — única referência visual existente.
- Repositório GitHub `paulolozano6-dev/Lozano_imoveis_1` (branch `main`) associado ao projeto — **está vazio** (sem commits), nada foi importado. Ver `github.md`.

Todo o resto (paleta estendida, tipografia, componentes, templates) foi criado a partir do logo e das respostas do usuário — não há um design system ou código anteriores a seguir.

## Índice
- `styles.css` — entrada global (importa `tokens/`)
- `tokens/` — colors.css, typography.css, spacing.css
- `assets/` — logo original + versões tratadas (transparente, verde-sólido)
- `guidelines/` — cards de fundação (cores, tipografia, espaçamento, marca)
- `components/core/` — Badge, PriceTag, ContactBar, ImagePlaceholder
- `ui_kits/social-templates/` — Story, Reel cover, Carousel (Instagram)
- `ui_kits/business-card/` — Cartão de visita frente/verso

## Conteúdo — como a marca fala
- **Tom:** sério e corporativo, com um toque bold. Não é descontraído nem engraçado.
- **Pessoa:** primeira pessoa quando pessoal ("meu portfólio"), mas as peças de divulgação falam do imóvel, não do corretor — foco no produto (endereço, metragem, diferenciais).
- **Formato de preço:** sempre em Real com pontuação de milhar (`R$ 850.000`), nunca abreviado.
- **Emoji:** não usar. O tom sério/corporativo não pede reforço visual de emoji.
- **Rótulos:** curtos, em caixa alta, com leve espaçamento entre letras (ex: "NOVO LANÇAMENTO", "OPORTUNIDADE") — funcionam como selos, não frases.
- **CTA:** direto e funcional (telefone/WhatsApp e @ do Instagram), sem frases de venda agressivas.

## Fundamentos visuais
- **Cor:** verde escuro da marca (`--green-700`, extraído do logo) como cor dominante em fundos e destaques de identidade. Dourado (`--gold-500`) como único acento — preço, badges de destaque, indicador ativo. Neutros quentes para fundo/texto. Nunca mais de duas cores de destaque.
- **Tipografia:** Playfair Display (serifada) para títulos, preços e nome do imóvel — transmite o lado "sério e corporativo" com peso editorial. Public Sans (sem serifa) para corpo, rótulos e dados de contato — legibilidade em telas pequenas de Stories/Reels.
- **Fotografia:** os templates usam placeholders tracejados com legenda em monoespaçado (`[FOTO DO IMÓVEL]`) — nunca ilustração desenhada. Substituir por fotos reais do imóvel antes de publicar.
- **Fundos:** blocos de cor sólida (verde ou branco) — sem gradientes decorativos, sem texturas. O único gradiente usado é uma sobreposição escura sutil sobre foto/vídeo no Reel cover, para garantir legibilidade do texto.
- **Bordas e cantos:** cantos retos nos templates de mídia social (retratam anúncios impressos/fotográficos); `radius-md`/`radius-lg` reservados para cards de UI e miniaturas na própria vitrine do design system.
- **Sombra:** uma única sombra suave (`--shadow-card`) para elevar cards de preview; os templates finais (Story, Carousel) não usam sombra — são telas cheias.
- **Selo/Badge:** pílula sólida, texto em caixa alta, sem contorno — verde para "novo", dourado para "destaque", preto para "vendido".
- **Hover/press:** não aplicável aos templates estáticos de mídia social; para uma futura landing page, usar escurecer 10% no hover de botões e reduzir levemente a opacidade no press.

## Iconografia
- **Não há sistema de ícones definido ainda.** O único elemento gráfico do logo é a chave dentro do prédio.
- Os templates usam apenas formas geométricas simples (círculo do botão de play do Reel, pontos indicadores do carrossel) — nenhum ícone desenhado à mão.
- Se a marca precisar de ícones (redes sociais, características do imóvel — quartos, vagas, m²), recomenda-se um set outline simples (ex. Lucide) via CDN, mantendo o peso de traço consistente com a leveza do Public Sans.

## Logo
- Único ativo de marca existente. Versões geradas neste sistema:
  - `assets/logo-lozano-on-green.jpg` — original, fundo verde
  - `assets/logo-lozano-transparent.png` — fundo removido (chroma key), para uso sobre qualquer cor
  - `assets/logo-lozano-green.png` — traço recolorido para verde-marca sólido, uso sobre fundo branco/claro

## Intentional additions
Como não há um app ou biblioteca de UI anterior, os componentes "core" foram criados do zero, focados nas necessidades reais pedidas (peças de mídia social + cartão de visita), não em um kit de UI genérico:
- `Badge`, `PriceTag`, `ContactBar`, `ImagePlaceholder` — primitivos reutilizados entre Story, Reel cover, Carousel e cartão de visita.

## Próximos passos sugeridos
- Landing page (mencionada como necessidade futura) — ainda não construída.
- Fotos reais dos imóveis para substituir os placeholders.
- Confirmar telefone/Instagram exatos (usei `(11) 99999-0000` e `@lozanoimoveis` como exemplo).
