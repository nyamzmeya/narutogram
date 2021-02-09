import Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '97daf9df-1e5e-4fb8-9712-b4111f0e5f60'
    }
})


export const usersAPI = {
    getUsers(currentPage= 1, pageSize= 5) {
        return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
            return responce.data
    })},

    getUser(userId) {
        return instance
        .get( `profile/${userId}`, {withCredentials: true})
        .then(responce => {
            return responce.data
        });
    },

    followUser(userId) {
        return instance
        .post(`follow/${userId}`).
        then(responce => {
            return responce.data.resultCode
        })},
    
    unfollowUser(userId) {
            return instance
            .delete(`unfollow/${userId}`).
            then(responce => {
                return responce.data.resultCode
            })},
}

export const authAPI = {
    me () {
        return instance
        .get('auth/me')
    },

    login (email, password, rememberMe = false) {
        return instance
        .post('auth/login', {email, password, rememberMe})
    },
    logout () {
        return instance
        .delete('auth/login')
    },
}

export const profileAPI = {
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
    }
}