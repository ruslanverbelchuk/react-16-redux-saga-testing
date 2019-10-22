import RateActionTypes from '../rate.types';
import reducers from '../rate.reducer';

describe('reducer', () => {
  it('FETCH_RATES_START test', () => {
    expect(reducers({},
      { type: RateActionTypes.FETCH_RATES_START,
        isFetching: true
      }
      )).toEqual({isFetching: true})
  });

  it('FETCH_RATES_SUCCESS test', () => {
    expect(reducers({},
      { type: RateActionTypes.FETCH_RATES_SUCCESS,
        rateItems: { rate : {"rates":{"CAD":1.4563,"HKD":8.65},"base":"EUR","date":"2019-10-16"} },
        isFetching: false
      }
    )).toEqual({isFetching: false})
  });
});
