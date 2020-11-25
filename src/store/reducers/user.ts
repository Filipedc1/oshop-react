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