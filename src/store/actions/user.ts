import axios from 'axios';

export const login = (user:any) => {
    return {
        type: 'LOGIN',
        payload: {
            Username: user.username,
            Password: user.password
        }
    }
}

// export const loginAsync = () => {
//     return (dispatch: any) => {
//         dispatch(login())
//         axios.post('https://localhost:44356/api/user/login', {
//                UserName: 'Fred',
//                Password: 'Flintstone'
//             })
//             .then(function (response) {
//                 console.log(response);
//                 console.log(response.data);
//                 dispatch(loginSuccess(response.data))
//             })
//             .catch(function (error) {
//                 console.log(error);
//                 dispatch(loginFailure(error.message))
//             });
//     }
// }

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