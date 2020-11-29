import { combineReducers } from "redux";
import animalReducer from "./animal";

const allReducers = combineReducers({
  animal: animalReducer,
});

export default allReducers;
