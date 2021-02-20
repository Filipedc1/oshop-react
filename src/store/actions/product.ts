
import { ProductService } from "../../services/product";

export const getProducts = () => {
    return {
        type: 'GET_PRODUCTS',
    }
}

export const getProductsAsync = () => {
    return async (dispatch: any) => {
        try {
            dispatch(getProducts());

            const response = await new ProductService().getAllAsync();

            dispatch(getProductsSuccess(response));
        } catch (error) {
            dispatch(getProductsFailure(error.message));          
        }
    }
}

export const getProductsSuccess = (user: any) => {
    return {
        type: 'GET_PRODUCTS_SUCCESS',
        payload: user
    }
}

export const getProductsFailure = (error: any) => {
    return {
        type: 'GET_PRODUCTS_FAILURE',
        payload: error
    }
}



