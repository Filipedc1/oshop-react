import initialUserState from '../state/user';

const userReducer = (state = initialUserState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                loading: false,
                isLoggedIn: true,
                userName: action.payload.username,
                isAdmin: action.payload.isAdmin,
                error: false,
                errorMsg: null
            }
        case 'LOGIN_FAILURE':
            return {
                loading: false,
                isLoggedIn: false,
                userName: null,
                isAdmin: false,
                error: true,
                errorMsg: action.payload
            }
        case 'IS_LOGGED_IN':
            return {
                ...state,
                loading: true
            }
        case 'IS_LOGGED_IN_TRUE':
            return {
                loading: false,
                isLoggedIn: true,
                userName: action.payload.username,
                isAdmin: action.payload.role === "Admin",
                error: false,
                errorMsg: null
            }
        case 'IS_LOGGED_IN_FALSE':
            return {
                loading: false,
                isLoggedIn: false,
                userName: null,
                isAdmin: false,
                error: false,
                errorMsg: null
            }
        case 'LOGOUT':
            return {
                loading: false,
                isLoggedIn: false,
                userName: null,
                isAdmin: false,
                error: false,
                errorMsg: null
            }
        default:
            return state;

    }
}

export default userReducer;