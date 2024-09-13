import { all } from 'redux-saga/effects';
import { watchUserSagas } from './auth/saga';
import { watchItemSagas } from './item/saga';

export default function* rootSaga() {
    yield all([
        watchUserSagas(),
        watchItemSagas(),
    ]);
}