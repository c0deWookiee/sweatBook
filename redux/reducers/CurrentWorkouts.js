export default (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_WORKOUT_COMPLETE": //using on end type of action types since these state changes are asynchronous
      return [...state, payload];
    case "FETCH_CURRENT_WORKOUT_COMPLETE":
      return payload;
    default:
      return state;
  }
};
