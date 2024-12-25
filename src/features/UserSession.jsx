
export const SET_USER_SESSION = 'SET_USER_SESSION';

//action
export const setUserSession = (user) => ({
    type: SET_USER_SESSION,
    payload: user,
});

//reducer
const initialState = {
    userInfo: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_SESSION:
            return {
                ...state,
                userInfo: action.payload,
            };
            default:
                return state;
    }
};

export default userReducer;