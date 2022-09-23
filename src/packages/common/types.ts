import { type ReactNode } from 'react';

export interface RouteConfig {
  label: string;
  path: string;
  element: ReactNode;
  isDefault?: boolean;
}
