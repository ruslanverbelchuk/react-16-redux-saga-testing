import { GET_RATES, RATES_RECEIVED } from '../actions/types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RATES:
      return {...state, loading: true};
    case RATES_RECEIVED:
      return {...state, rates: action.json, loading: false};
    default:
      return state;
  }
};

export default reducer;
