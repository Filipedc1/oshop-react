import initialUserState from '../state/user';

const userReducer = (state = initialUserState, action: any) => {
    console.log(action);
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
                userName: action.payload.Username,
                isAdmin: action.payload.IsAdmin,
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
            return state;
        default:
            return state;

    }
}

export default userReducer;