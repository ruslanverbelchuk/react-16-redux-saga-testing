import RateActionTypes from './rate.types';

const INITIAL_STATE = {
  rateItems: null,
  isFetching: false,
  errorMessage: undefined
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RateActionTypes.FETCH_RATES_START:
      return {...state, isFetching: true};
    case RateActionTypes.FETCH_RATES_SUCCESS:
      return {...state, rateItems: action.payload, isFetching: false};
    case RateActionTypes.FETCH_RATES_FAILURE:
      return {...state, errorMessage: action.payload, isFetching: false};
    default:
      return state;
  }
};

export default reducer;
