import {profileAPI} from "../api/api";

const ADD_POST_ACTION = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, title: "My first react post!!!", likesCount: '99'},
        {id: 2, title: "My second react post!!!", likesCount: '5'},
        {id: 3, title: "My react post!!!", likesCount: '24'},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_ACTION:
            return {
                ...state,
                postsData: [...state.postsData, {id: 4, title: action.postMessage, likesCount: '0'}],
                postMessage: ''
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = (postMessage) => ({type: ADD_POST_ACTION, postMessage})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response))
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer;