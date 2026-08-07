export interface BadgeProps {
  /** Text shown inside the badge, e.g. "NOVO", "VENDIDO" */
  children: React.ReactNode;
  /** Color treatment */
  variant?: 'novo' | 'vendido' | 'destaque';
}
