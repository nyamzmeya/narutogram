import { usersAPI } from "../common/api";

let initialState = {
  users: [
    // {fullName: 'Anya Z.', userId: 1, status: 'I love anime',
    // location: {city: 'Shymkent', country: 'Kazakhstan'},
    // followcheck: true,
    // image: 'https://i1.sndcdn.com/avatars-000272333422-wk7031-t500x500.jpg'},
    // {fullName: 'Vanya M.', userId: 2, status: 'I love sosiski',
    // location: {city: 'Taraz', country: 'Kazakhstan'},
    // followcheck: false,
    // image: 'https://a.wattpad.com/useravatar/Haruno_Sakura001.256.167932.jpg'},
    // {fullName: 'Vasilii K.', userId: 3, status: 'I love shawarma',
    // location: {city: 'Astana', country: 'Kazakhstan'},
    // followcheck: true,
    // image: 'https://i.pinimg.com/564x/b7/8e/b3/b78eb361686a4d367dc919cca82131fb.jpg'}
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingUsers: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "network/users/FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.userId === action.userId) {
            return { ...u, followcheck: true };
          }
          return u;
        }),
      };

    case "network/users/UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.userId === action.userId) {
            return { ...u, followcheck: false };
          }
          return u;
        }),
      };
    case "network/users/SET-USERS":
      return { ...state, users: action.users };

    case "network/users/SET-CURRENT-PAGE":
      return { ...state, currentPage: action.currentPage };

    case "network/users/SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount };
    case "network/users/TOOGLE-IS-FETCHING":
      return { ...state, isFetshing: action.isFetshing };

    case "network/users/SET-FETCHING-USERS":
      return {
        ...state,
        followingUsers: action.condition
          ? [...state.followingUsers, action.followingUsers]
          : state.followingUsers.filter(
              (followingUsers) => followingUsers !== action.followingUsers
            ),
      };

    default:
      return state;
  }
};

export const follow = (userId) => {
  return {
    type: "network/users/FOLLOW",
    userId,
  };
};

export const unfollow = (userId) => {
  return {
    type: "network/users/UNFOLLOW",
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: "network/users/SET-USERS",
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: "network/users/SET-CURRENT-PAGE",
    currentPage,
  };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: "network/users/SET-TOTAL-USERS-COUNT",
    totalUsersCount,
  };
};

export const setIsFetching = (isFetshing) => {
  return {
    type: "network/users/TOOGLE-IS-FETCHING",
    isFetshing,
  };
};

export const setFetchingUsers = (condition, followingUsers) => {
  return {
    type: "network/users/SET-FETCHING-USERS",
    condition,
    followingUsers,
  };
};

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
  dispatch(setFetchingUsers(true, userId));
  let resultCode = await apiMethod(userId);
  if (resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(setFetchingUsers(false, userId));
};

export const followUser = (userId) => async (dispatch) => {

    followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), follow)
};

export const unfollowUser = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollow)
};

export default usersReducer;
