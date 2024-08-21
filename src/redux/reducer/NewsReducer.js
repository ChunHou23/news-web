import { SET_NEWS_DATA } from '../reduxConstant'

const initialState = {
    loading: false,
    error: null,
    data: [],
    articles: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_DATA:
            return {
                ...state,
                articles: action.data,
                loading: false,
            }
        default:
            return state
    }

}

export default reducer;