import { MouseEvent } from 'react';

export interface TopbarProps {
  title: string;
  navAnchor: HTMLElement | null;
  navItems: TopbarNavItem[];
  handleNavAnchor: (event: MouseEvent<HTMLButtonElement>) => void;
  onDismiss: () => void;
  currentTheme: string;
  themeSwich: () => void;
}

export interface TopbarNavItem {
  label: string;
  path: string;
}
