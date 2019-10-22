import { combineReducers } from "redux";
import exercises from "./exercises";
import CurrentWorkouts from "./CurrentWorkouts";
import UI from "./ui";
//so here there are actually three substates of state.
export default combineReducers({ CurrentWorkouts, exercises, UI });
