import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";

export const rootReducer = combineReducers({
    note: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>