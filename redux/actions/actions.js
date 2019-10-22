import { createAction } from "redux-actions";
import types from "./types";

//returns a function that returns {type, payload} where type is the first invocation argument,
//and payload is the returned functions first argument

export default (visibility = "payload") => {
  const { TOGGLE_MODAL } = types;
  return createAction(TOGGLE_MODAL)(visibility); //**(visibility)  would be the payload  */;
};
