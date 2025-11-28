const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isLogin: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isLogin: true
            }
        default:
            return state;
    }
}

export const setAuthData = (data) => ({type: SET_AUTH_DATA, data})

export default profileReducer;