import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isLogin: false
}

const authReducer = (state = initialState, action) => {
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

export const auth = () => async (dispatch) => {
    const response = await authAPI.auth()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(auth())
    } else {
        let errorMessage = response.data.messages[0]
        if (errorMessage.length > 0) {
            dispatch(stopSubmit("LoginForm", {_error: errorMessage}))
        }
    }
}

export const logout = () => async (dispatch) => {
    const response= await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
}

export default authReducer;