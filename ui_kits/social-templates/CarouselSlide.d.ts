/**
 * @startingPoint section="Social Templates" subtitle="Carousel slide — feed post" viewport="360x450"
 */
export interface CarouselSlideProps {
  /** "cover" (first slide, price + badge) or "detail" (interior slides) */
  variant?: 'cover' | 'detail';
  /** 1-based slide position, used for the dot indicator and default title */
  index?: number;
  /** Total slides, for the dot indicator */
  total?: number;
  /** Slide title override */
  title?: string;
  /** Detail slide body copy */
  body?: string;
  /** Cover slide price */
  price?: string;
}
