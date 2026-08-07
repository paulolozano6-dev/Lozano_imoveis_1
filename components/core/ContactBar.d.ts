export interface ContactBarProps {
  /** Agent/brand name shown next to the mark */
  name?: string;
  /** Phone / WhatsApp number, e.g. "(11) 99999-0000" */
  phone?: string;
  /** Instagram handle without the @ */
  instagram?: string;
  /** Use light text for placement over dark/photo backgrounds */
  dark?: boolean;
  /** Path to the logo image, relative to the consuming HTML file */
  logoSrc?: string;
}
