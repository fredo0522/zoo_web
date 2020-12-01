import { combineReducers } from "redux";
import animalReducer from "./animal";
import newsReducer from "./news";

const allReducers = combineReducers({
  animal: animalReducer,
  news: newsReducer,
});

export default allReducers;
