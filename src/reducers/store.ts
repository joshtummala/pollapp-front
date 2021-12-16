import { combineReducers, createStore } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({ userReducer, usersReducer });
export default createStore(reducer);
