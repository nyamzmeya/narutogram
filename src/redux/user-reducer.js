import { usersAPI } from "../common/api";

let initialState = {
  user: null,
  isFetching: true,
  userId: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "network/user/SET-CURRENT-USER-INFO":
      return { ...state, user: action.user };

    case "network/user/TOOGLE-IS-FETCHING":
      return { ...state, isFetshing: action.isFetshing };
      
    default:
      return state;
  }
};

export const setUserProfile = (user) => {
  return {
    type: "network/user/SET-CURRENT-USER-INFO",
    user,
  };
};

export const setFetching = (isFetshing) => {
  return {
    type: "network/user/TOOGLE-IS-FETCHING",
    isFetshing,
  };
};

export const getUser = (userId) => async (dispatch) => {
  let responce = await usersAPI.getUser(userId);
  dispatch(setUserProfile(responce));
};

export default userReducer;
