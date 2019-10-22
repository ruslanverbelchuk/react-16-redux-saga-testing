import RateActionTypes from '../rate.types';
import {
  fetchRatesStart,
  fetchRatesSuccess,
  fetchRatesFailure
} from '../rate.actions';

describe('fetchRatesStart action', () => {
  it('should create the fetchRatesStart action', () => {
    expect(fetchRatesStart().type).toEqual(
      RateActionTypes.FETCH_RATES_START
    );
  });
});

describe('fetchRatesSuccess action', () => {
  it('should create the fetchRatesSuccess action', () => {
    const mockData = { rate : {"rates":{"CAD":1.4563,"HKD":8.65},"base":"EUR","date":"2019-10-16"} };

    const action = fetchRatesSuccess(mockData);

    expect(action.type).toEqual(RateActionTypes.FETCH_RATES_SUCCESS);
    expect(action.payload).toEqual(mockData);
  });
});

describe('fetchRatesFailure action', () => {
  it('should create the fetchRatesFailure action', () => {
    const action = fetchRatesFailure('errored');

    expect(action.type).toEqual(RateActionTypes.FETCH_RATES_FAILURE);
    expect(action.payload).toEqual('errored');
  });
});

