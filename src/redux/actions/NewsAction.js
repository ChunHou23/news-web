import { SEARCH_NEWS_DATA, SET_NEWS_DATA } from '../reduxConstant'

export const findNewsData = (query, filter) => {
    return {
        type: SEARCH_NEWS_DATA,
        query: query,
        filter: filter,
    }
}

export const setNewsData = (data) => {
    return {
        type: SET_NEWS_DATA,
        data: data,
    }
}
