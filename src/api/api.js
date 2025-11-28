import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "d0b097e0-d25c-41e7-94be-e783ce0f5b3b"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.status)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.status)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
