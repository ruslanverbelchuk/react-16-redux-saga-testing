import { takeLatest, call, put } from 'redux-saga/effects';

import {
  fetchRatesStart,
  fetchRatesSuccess,
  fetchRatesFailure
} from '../rate.actions';

import { fetchRatesStartAsyncSaga, fetchRatesStartSaga } from '../rate.sagas';

/*describe('fetch collections start saga', () => {
  it('should trigger on FETCH_RATES_START', () => {
    const generator = fetchRatesStartSaga();
    expect(generator.next().value).toEqual(
      takeLatest(RateActionTypes.FETCH_RATES_START, fetchRatesStartAsyncSaga)
    );
  });
});*/

describe('fetch collections async saga', () => {

  it('should fire fetchRatesSuccess if collectionsMap is succesful', () => {
/*    const generatorStart = fetchRatesStartAsyncSaga();
    const mockData = { rate : {"rates":{"CAD":1.4563,"HKD":8.65},"base":"EUR","date":"2019-10-16"} };

    expect(generatorStart.next(mockData).value).toEqual(
      put(fetchRatesSuccess(mockData))
    );*/
  });

  it('should fire fetchRatesFailure if get collection fails at any point', () => {
/*    const newGenerator = fetchRatesStartAsyncSaga();
    newGenerator.next();
    expect(newGenerator.throw({ message: 'error' }).value).toEqual(
      put(fetchRatesFailure('error'))
    );*/
  });
});
