import { isFunction } from 'lodash';
import { createHook, createStore, type StoreActionApi } from 'react-sweet-state';

import { VALID_QUERY_PARAMS } from '../app/query-params';
import { getSanitizedString } from './utils';

interface SearchContext {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

type State = SearchContext;

type StoreApi = StoreActionApi<State>;

type Actions = typeof actions;

export const initialState: State = {};

export const actions = {
  setSearchContext:
    (params: SearchContext) =>
    ({ getState, setState }: StoreApi): void => {
      setState({
        ...getState(),
        ...params,
      });
    },

  hydrateContextFromQueryParams:
    (queryParams: URLSearchParams) =>
    ({ setState }: StoreApi): void => {
      const context = Array.from(queryParams.keys())
        .filter((key) => VALID_QUERY_PARAMS.some((param) => param.key === key))
        .reduce((accumulator, key) => {
          const value = getSanitizedString(queryParams.get(key) || undefined);
          const getTransformedQueryParam = VALID_QUERY_PARAMS.find((param) => param.key === key)?.decodeCallback;

          return {
            ...accumulator,
            [key]: isFunction(getTransformedQueryParam) ? getTransformedQueryParam(value) : value,
          };
        }, {});

      setState(context);
    },

  getStringifiedQueryParamsFromContext:
    () =>
    ({ getState }: StoreApi): string => {
      const queryParams = new URLSearchParams();
      const searchContext = getState();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      VALID_QUERY_PARAMS.forEach(({ key, encodeCallback = (x: any) => x }) => {
        const value = searchContext[key] && encodeCallback(searchContext[key]);

        if (value) {
          queryParams.set(key, value);
        } else {
          queryParams.delete(key);
        }
      });

      return queryParams.toString();
    },

  reset:
    () =>
    ({ setState }: StoreApi): void => {
      setState(initialState);
    },
};

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

export const useSearchContext = createHook(Store);
