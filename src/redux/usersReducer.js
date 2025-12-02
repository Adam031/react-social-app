import {followAPI, usersAPI} from "../api/api";

const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT_USERS = 'users/SET_TOTAL_COUNT_USERS'
const SET_LOADING = 'users/SET_LOADING'
const SET_FOLLOW_STATUS = 'users/SET_FOLLOW_STATUS'

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

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setLoading(true))

    const response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setUsers(response.items))
    dispatch(setTotalCountUsers(response.totalCount))
    dispatch(setLoading(false))
}

export const onPaginationClick = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(setLoading(true))

    const response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setUsers(response.items))
    dispatch(setTotalCountUsers(response.totalCount))
    dispatch(setLoading(false))
}

export const toggleFollow = (userId, isFollowed) => async (dispatch) => {
    const apiMethod = isFollowed ? followAPI.unfollow : followAPI.follow
    const newStatus = !isFollowed

    const response = await apiMethod(userId)

    if (response === 200) {
        dispatch(setFollowStatus(newStatus, userId))
    }
}

export default usersReducer;