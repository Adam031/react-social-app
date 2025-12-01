import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
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

export const setAuthData = (id, email, login, isLogin) => ({type: SET_AUTH_DATA, payload: {id, email, login, isLogin}})

export const auth = () => (dispatch) => {
    return authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthData(id, email, login, true))
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(auth())
        } else {
            let errorMessage = data.messages[0]
            if (errorMessage.length > 0) {
                console.log(errorMessage)
                dispatch(stopSubmit("LoginForm", {_error: errorMessage}))
            }
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