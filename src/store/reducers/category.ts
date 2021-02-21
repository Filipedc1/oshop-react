import initialCategoryState from '../state/category';

const categoryReducer = (state = initialCategoryState, action: any) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                loading: true
            }
        case 'GET_CATEGORIES_SUCCESS':
            return {
                categories: action.payload,
                loading: false,
                loaded: true,
                error: false,
                errorMsg: null
            }
        case 'GET_CATEGORIES_FAILURE':
            return {
                categories: [],
                loading: false,
                loaded: false,
                error: true,
                errorMsg: action.payload
            }
        default:
            return state;

    }
}

export default categoryReducer;