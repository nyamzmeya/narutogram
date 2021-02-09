import { getAuthUserData } from "./auth-reducer";

let initialState = {
  initialised: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-INITIALISED":
      return {
        ...state,
        initialised: true,
      };

    default:
      return state;
  }
};

export const initialisedSuccess = () => ({type: "SET-INITIALISED"});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
      dispatch(initialisedSuccess());
    });
};

export default appReducer;
