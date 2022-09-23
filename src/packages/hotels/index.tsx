import type { RouteConfig } from 'common/types';

import { HotelsPage } from './hotels-page';

export const hotelsRoute: RouteConfig = {
  label: 'Hotels',
  path: 'hotels',
  element: <HotelsPage />,
};
