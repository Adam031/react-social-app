export const getUsers = state => {
    return state.usersPage.users
}

export const getPagination = state => {
    return state.usersPage.pagination
}

export const getIsLoading = state => {
    return state.usersPage.isLoading
}