import { takeLatest, call, put } from 'redux-saga/effects';

import {
  fetchRatesSuccess,
  fetchRatesFailure
} from '../rate.actions';
import RateActionTypes from '../rate.types';
import { fetchRatesStartAsyncSaga, fetchRatesStartSaga } from '../rate.sagas';

describe('fetch collections start saga', () => {
  it('should trigger on FETCH_RATES_START', () => {
    const generatorFETCH = fetchRatesStartSaga();
    expect(generatorFETCH.next().value).toEqual(
      takeLatest(RateActionTypes.FETCH_RATES_START, fetchRatesStartAsyncSaga)
    );
  });
});

describe('fetch collections async saga', () => {
  const generator = fetchRatesStartAsyncSaga();

  it('should fire fetchRatesSuccess if collectionsMap is succesful', () => {
    const mockData = { "rate" : {"rates":{"CAD":1.4563,"HKD":8.65},"base":"EUR","date":"2019-10-16"} };
    generator.next();
    expect(generator.next(mockData).value).toEqual(
      put(fetchRatesSuccess(mockData))
    );
  });

  it('should fire fetchRatesFailure if get collection fails at any point', () => {
    expect(generator.throw({ message: 'error' }).value).toEqual(
      put(fetchRatesFailure('error'))
    );
  });
});
