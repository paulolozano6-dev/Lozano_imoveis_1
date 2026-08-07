/**
 * @startingPoint section="Print" subtitle="Business card — front + back" viewport="360x210"
 */
export interface BusinessCardProps {
  /** "front" (logo on green) or "back" (contact details) */
  side?: 'front' | 'back';
  /** Agent full name */
  name?: string;
  /** Role/title line */
  role?: string;
  /** Phone / WhatsApp */
  phone?: string;
  /** Instagram handle without @ */
  instagram?: string;
}
