import { useEffect, useState, type FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useSearchContext } from '../common/search-context';

interface QueryParam {
  key: string;
  encodeCallback?: (arg?: any) => string; // eslint-disable-line @typescript-eslint/no-explicit-any
  decodeCallback?: (arg?: string) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const VALID_QUERY_PARAMS: QueryParam[] = [];

export const QueryParams: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchContextInitializedFromQueryParams, setIsSearchContextInitializedFromQueryParams] = useState(false);
  const [searchContext, { getStringifiedQueryParamsFromContext, hydrateContextFromQueryParams }] = useSearchContext();

  // Update the search context from the URL query params.
  // This is done only once on page load.
  useEffect(() => {
    if (isSearchContextInitializedFromQueryParams) {
      return;
    }

    const queryParams = new URLSearchParams(location.search);

    hydrateContextFromQueryParams(queryParams);
    setIsSearchContextInitializedFromQueryParams(true);
  }, [
    location.search,
    isSearchContextInitializedFromQueryParams,
    hydrateContextFromQueryParams,
    setIsSearchContextInitializedFromQueryParams,
  ]);

  // Keep the query params up to date to make sure the URL is always shareable.
  // This is done every time the search context changes (it's important to keep `searchContext` in the dependency array).
  useEffect(() => {
    navigate({
      pathname: location.pathname,
      search: getStringifiedQueryParamsFromContext(),
    });
  }, [navigate, location.pathname, getStringifiedQueryParamsFromContext, searchContext]);

  return null;
};
