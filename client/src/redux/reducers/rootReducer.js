import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";
import { checkAdmin } from "./admin.Reducer";

export const rootReducer = combineReducers({ tasksReducer, checkAdmin });
