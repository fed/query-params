import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from './routes';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <nav>
        {ROUTES.map((route) => (
          <Link to={route.path} key={route.path}>
            {route.label}
          </Link>
        ))}
      </nav>

      <main>{children}</main>
    </>
  );
};
