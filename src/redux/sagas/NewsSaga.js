import { call, put, takeEvery } from "redux-saga/effects";
import { SEARCH_NEWS_DATA } from '../reduxConstant'
import { fetchNews } from '../../api/api';
import { setNewsData } from '../actions/NewsAction';

function* searchNews({query, filter}) {
    try {
        const data = yield call(fetchNews, query, filter)
        yield put(setNewsData(data.articles))
    } catch (error) {
        console.log("error===>", error)
    }
}


function* NewsSaga() {
    yield takeEvery(SEARCH_NEWS_DATA, searchNews)
}

export default NewsSaga;