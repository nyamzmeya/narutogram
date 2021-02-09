import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");
const { default: dialogsReducer } = require("./dialogs-reducer");
const { default: profileReducer } = require("./profile-reducer");
const { default: usersReducer } = require("./users-reducer");
const { default: userReducer } = require("./user-reducer");
const { default: appReducer } = require("./app-reducer");



let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    userPage: userReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer, 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


window.store = store;

export default store;