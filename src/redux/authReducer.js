import {authAPI} from "../api/api";

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
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthData = (userId, email, login, isLogin) => ({type: SET_AUTH_DATA, payload: {userId, email, login, isLogin}})

export const auth = () => (dispatch) => {
    authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {userId, email, login} = data.data;
            dispatch(setAuthData(userId, email, login, true))
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(auth())
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
        }
    });
}

export default profileReducer;