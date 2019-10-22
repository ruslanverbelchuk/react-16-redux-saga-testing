import RateActionTypes from '../rate.types';
import reducers from '../rate.reducer';

const initialState = {
  rateItems: null,
  isFetching: false,
  errorMessage: undefined
};

describe('Rate reducer', () => {

  it('should return initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true if fetchingRatesStart action', () => {
    expect(
      reducers(initialState, {
        type: RateActionTypes.FETCH_RATES_START
      }).isFetching
    ).toBe(true);
  });

  it('should set isFetching to false and collections to payload if fetchingRatesSuccess', () => {
    const mockItems = { rate : {"rates":{"CAD":1.4563,"HKD":8.65},"base":"EUR","date":"2019-10-16"} };
    expect(
      reducers(initialState, {
        type: RateActionTypes.FETCH_RATES_SUCCESS,
        payload: mockItems
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      rateItems: mockItems
    });
  });

 it('should set isFetching to false and errorMessage to payload if fetchingRatesFailure', () => {
    expect(
      reducers(initialState, {
        type: RateActionTypes.FETCH_RATES_FAILURE,
        payload: 'error'
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error'
    });
  });

});
