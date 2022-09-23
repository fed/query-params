import type { RouteConfig } from 'common/types';

import { FlightsPage } from './flights-page';

export const flightsRoute: RouteConfig = {
  label: 'Flights',
  path: 'flights',
  element: <FlightsPage />,
  isDefault: true,
};
