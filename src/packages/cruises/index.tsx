import type { RouteConfig } from 'common/types';

import { CruisesPage } from './cruises-page';

export const cruisesRoute: RouteConfig = {
  label: 'Cruises',
  path: 'cruises',
  element: <CruisesPage />,
};
