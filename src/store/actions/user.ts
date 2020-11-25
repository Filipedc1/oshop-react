import axios from 'axios';

// export const login = (user:any) => {
//     return {
//         type: 'LOGIN',
//         payload: {
//             Username: user.username,
//             Password: user.password
//         }
//     }
// }

export const login = () => {
    return {
        type: 'LOGIN',
    }
}

export const loginAsync = (user: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(login());
            const response = await axios.post('https://localhost:44356/api/user/login', user);
            dispatch(loginSuccess(response.data))
        } catch (error) {
            dispatch(loginFailure(error.message))
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

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}