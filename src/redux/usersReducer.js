import {followAPI, usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const SET_LOADING = 'SET_LOADING';
const SET_FOLLOW_STATUS = 'SET_FOLLOW_STATUS';

let initialState = {
    users: [],
    pagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
    },
    isLoading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                pagination: {...state.pagination, currentPage: action.page}
            }
        case SET_TOTAL_COUNT_USERS:
            return {
                ...state,
                pagination: {...state.pagination, total: action.usersCount}
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.userId === user.id) {
                        return {...user, followed: action.status}
                    }
                    return user
                })
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalCountUsers = (usersCount) => ({type: SET_TOTAL_COUNT_USERS, usersCount})
export const setLoading = (isLoading) => ({type: SET_LOADING, isLoading})
export const setFollowStatus = (status, userId) => ({type: SET_FOLLOW_STATUS, status, userId})

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setLoading(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalCountUsers(data.totalCount))
        dispatch(setLoading(false))
    });
}

export const onPaginationClick = (currentPage, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setLoading(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalCountUsers(data.totalCount))
        dispatch(setLoading(false))
    });
}

export const toggleFollow = (userId, isFollowed) => (dispatch) => {
    if (isFollowed) {
        followAPI.unfollow(userId).then(status => {
            if (status === 200) {
                dispatch(setFollowStatus(false, userId))
            }
        });
    } else {
        followAPI.follow(userId).then(status => {
            if (status === 200) {
                dispatch(setFollowStatus(true, userId))
            }
        });
    }
}

export default usersReducer;