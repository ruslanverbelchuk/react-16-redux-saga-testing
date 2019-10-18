import {put, takeLatest, all} from 'redux-saga/effects';
const BASED_URL = 'https://api.exchangeratesapi.io/latest'; // 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'
function* fetchRates() {
  const json = yield fetch(BASED_URL).then(response => response.json());

  yield put({type: 'RATES_RECEIVED', json: json || [{error: json.message}]});
}

function* actionWatcher() {
  yield takeLatest('GET_RATES', fetchRates);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
