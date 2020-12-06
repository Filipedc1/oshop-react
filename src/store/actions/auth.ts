
import { AuthService } from "../../services/auth";

export const login = () => {
    return {
        type: 'LOGIN',
    }
}

export const loginAsync = (user: any, history: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(login());

            const response = await new AuthService().loginAsync(user);

            dispatch(loginSuccess(response));
            history.push('/'); //redirect to home page
        } catch (error) {
            dispatch(loginFailure(error.message));          
        }
    }
}

export const loginSuccess = (user: any) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: user
    }
}

export const loginFailure = (error: any) => {
    return {
        type: 'LOGIN_FAILURE',
        payload: error
    }
}

export const isAuthenticated = () => {
    return (dispatch: any) => {
        dispatch(isLoggedIn());

        const response = new AuthService().isLoggedIn();
        if (response){
            dispatch(isLoggedInTrue(response));
        }
        else {
            dispatch(isLoggedInFalse());       
        }
    }
}

export const isLoggedIn = () => {
    return {
        type: 'IS_LOGGED_IN',
    }
}

export const isLoggedInTrue = (user: any) => {
    return {
        type: 'IS_LOGGED_IN_TRUE',
        payload: user
    }
}

export const isLoggedInFalse = () => {
    return {
        type: 'IS_LOGGED_IN_FALSE',
    }
}

export const logout = () => {
    return (dispatch: any) => {
        dispatch(logOut());
        new AuthService().logout();
    }
}

export const logOut = () => {
    return {
        type: 'LOGOUT'
    }
}