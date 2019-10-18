import { GET_RATES, RATES_RECEIVED } from '../../actions/types';
import reducers from '../index';

describe('reducer', () => {
  it('GET_RATES test', () => {
    expect(reducers({},
      { type: GET_RATES,
        loading: true
      }
      )).toEqual({loading: true})
  });

  it('RATES_RECEIVED test', () => {
    expect(reducers({},
      { type: RATES_RECEIVED,
        rates: { rate : {"rates":{"CAD":1.4563,"HKD":8.65},"base":"EUR","date":"2019-10-16"} },
        loading: false
      }
    )).toEqual({loading: false})
  });
});
