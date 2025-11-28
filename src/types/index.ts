export interface BeButtonProps {
  children?: React.ReactNode;
  ref?: HTMLButtonElement;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  selected?: boolean;
  contentText?: string;
  brand?: string;
  state?: string;
  color?: string;
  text?: boolean;
  border?: boolean;
  disabled?: boolean;
  fluid?: boolean;
  circle?: boolean;
  compact?: boolean;
  outline?: boolean;
  icon?: string;
  withIcon?: string;
  iconPos?: 'left' | 'right' | 'both';
  badge?: string | number;
  badgeOption?: string;
  link?: string;
  linkTarget?: '_self' | '_blank';
}

