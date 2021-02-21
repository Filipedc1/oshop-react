
import { ProductService } from "../../services/product";

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
    }
}

export const getCategoriesAsync = () => {
    return async (dispatch: any) => {
        try {
            dispatch(getCategories());

            const response = await new ProductService().getAllCategoriesAsync();

            dispatch(getCategoriesSuccess(response));
        } catch (error) {
            dispatch(getCategoriesFailure(error.message));          
        }
    }
}

export const getCategoriesSuccess = (user: any) => {
    return {
        type: 'GET_CATEGORIES_SUCCESS',
        payload: user
    }
}

export const getCategoriesFailure = (error: any) => {
    return {
        type: 'GET_CATEGORIES_FAILURE',
        payload: error
    }
}



