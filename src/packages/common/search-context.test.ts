import { actions, initialState } from './search-context';

describe('SearchContext', () => {
  const setState = jest.fn();
  const getState = jest.fn().mockImplementation(() => initialState);
  const dispatch = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('setSearchContext', () => {
    it('should call setState just once and with the right arguments', () => {
      const thunk = actions.setSearchContext({ from: 'AKL', to: 'ZRH' });

      thunk({ setState, getState, dispatch });

      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenLastCalledWith({ from: 'AKL', to: 'ZRH' });
    });
  });

  describe('reset', () => {
    it('should call setState just once and with the right arguments', () => {
      const thunk = actions.reset();

      thunk({ setState, getState, dispatch });

      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenLastCalledWith(initialState);
    });
  });
});
