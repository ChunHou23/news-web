import { SET_NEWS_DATA, SET_LOADING } from '../reduxConstant'

const initialState = {
    loading: false,
    error: null,
    data: [],
    articles: [],
};

const reducer = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case SET_NEWS_DATA:
            return {
                ...state,
                articles: action.data,
                loading: false,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.data,
            }
        default:
            return state
    }

}

export default reducer;