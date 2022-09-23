import type { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './layout';
import { QueryParams } from './query-params';
import { ROUTES } from './routes';

export const App: FC = () => {
  const defaultRoute = ROUTES.find((route) => route.isDefault)?.path;

  return (
    <BrowserRouter>
      <QueryParams />
      <Layout>
        <Routes>
          {ROUTES.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
          {defaultRoute ? <Route path="/" element={<Navigate to={defaultRoute} />} /> : null}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
