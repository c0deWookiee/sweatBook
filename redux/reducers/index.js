import { combineReducers } from "redux";
import exercises from "./exercises";
import CurrentWorkouts from "./CurrentWorkouts";
import UI from "./ui";
export default combineReducers({ CurrentWorkouts, exercises, UI });
