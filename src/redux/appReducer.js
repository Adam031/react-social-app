import {auth} from "./authReducer";

const SET_INIT_SUCCESS_TYPE = 'SET_INIT_SUCCESS_TYPE';

let initialState = {
    isInit: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT_SUCCESS_TYPE:
            return {
                ...state,
                isInit: true
            }
        default:
            return state;
    }
}

export const setInitSuccessApp = () => ({type: SET_INIT_SUCCESS_TYPE})

export const initApp = () => (dispatch) => {
    let promise = dispatch(auth())
    promise.then(() => {
        dispatch(setInitSuccessApp())
    })
}

export default appReducer;