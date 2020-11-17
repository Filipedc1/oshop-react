interface UserState {
    userName: string | null;
    isLoggedIn: boolean;
    isAdmin: boolean;
    loading: boolean;
    error: boolean;
    errorMsg: string | null;
}

const initialUserState: UserState = {
    userName: null,
    isLoggedIn: false,
    isAdmin: false,
    loading: false,
    error: false,
    errorMsg: null
};

export default initialUserState;