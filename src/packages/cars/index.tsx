import type { RouteConfig } from 'common/types';

import { CarsPage } from './cars-page';

export const carsRoute: RouteConfig = {
  label: 'Cars',
  path: 'cars',
  element: <CarsPage />,
};
