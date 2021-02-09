export const requestUsers = (state) => {
    return state.usersPage.users
};

export const requestTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};

export const requestPageSize = (state) => {
    return state.usersPage.pageSize
};

export const requestCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const requestFollowingUsers = (state) => {
    return state.usersPage.followingUsers
};

