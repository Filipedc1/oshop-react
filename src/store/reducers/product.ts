import initialProductState from '../state/product';

const productReducer = (state = initialProductState, action: any) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                loading: true
            }
        case 'GET_PRODUCTS_SUCCESS':
            return {
                products: action.payload,
                loading: false,
                loaded: true,
                error: false,
                errorMsg: null
            }
        case 'GET_PRODUCTS_FAILURE':
            return {
                products: [],
                loading: false,
                loaded: false,
                error: true,
                errorMsg: action.payload
            }
        default:
            return state;

    }
}

export default productReducer;