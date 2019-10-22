import RateActionTypes from './rate.types';

export const fetchRatesStart = () => ({
  type: RateActionTypes.FETCH_RATES_START,
});

export const fetchRatesSuccess = data => ({
  type: RateActionTypes.FETCH_RATES_SUCCESS,
  payload: data
});

export const fetchRatesFailure = errorMessage => ({
  type: RateActionTypes.FETCH_RATES_FAILURE,
  payload: errorMessage
});
