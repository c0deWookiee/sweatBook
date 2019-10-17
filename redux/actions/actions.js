import { createAction } from "redux-actions";
import { SET_EXERCISE_VISIBILITY } from "./types";

export default visibility =>
  createAction(SET_EXERCISE_VISIBILITY)("did this work");
