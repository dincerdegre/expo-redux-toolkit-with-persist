import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
import themeSlice from "./slices/themeSlice";

const rootReducer = combineReducers({
  example: exampleReducer,
  theme: themeSlice,
});

export default rootReducer;
