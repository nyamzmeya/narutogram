import { stopSubmit } from "redux-form";
import { authAPI } from "../common/api";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "network/auth/SET-USER-DATA":
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };

    default:
      return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => {
  return {
    type: "network/auth/SET-USER-DATA",
    data: { userId, email, login },
    isAuth: isAuth,
  };
};

export const getAuthUserData = () => async (dispatch) => {
  let responce = await authAPI.me();

  if (responce.data.resultCode === 0) {
    let { id, email, login } = responce.data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const Login = (email, password, rememberMe) => async (dispatch) => {
  let responce = await authAPI.login(email, password, rememberMe);

  if (responce.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message =
      responce.data.messages.length > 0
        ? responce.data.messages[0]
        : "Some error";
    let action = stopSubmit("login", { _error: message });
    dispatch(action);
  }
};

export const Logout = () => async (dispatch) => {
  let responce = await authAPI.logout();
  if (responce.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
