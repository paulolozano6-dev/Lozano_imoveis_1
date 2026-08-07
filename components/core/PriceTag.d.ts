export interface PriceTagProps {
  /** Formatted price string, e.g. "R$ 850.000" */
  price: string;
  /** If set, shows as a rental price per this period, e.g. "mês" */
  period?: string;
}
