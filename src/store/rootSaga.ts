import { all } from 'redux-saga/effects';
import { watchUserSagas } from './auth/saga';

export default function* rootSaga() {
    yield all([
        watchUserSagas(),
    ]);
}