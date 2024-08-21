import { all, fork } from 'redux-saga/effects';
import NewsSaga from './sagas/NewsSaga'; // Import your saga

export default function* rootSaga() {
    yield all([
        fork(NewsSaga) // Run your testSaga
    ]);
}
