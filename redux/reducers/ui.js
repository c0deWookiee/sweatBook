export default (state = { modal: false }, { type }) => {
  switch (type) {
    case "TOGGLE_MODAL":
      return { ...state, modal: !state.modal };
    default:
      return state;
  }
};
