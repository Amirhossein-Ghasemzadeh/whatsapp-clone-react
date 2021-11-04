import { SET_USER } from "./StateProvider";

const reducer = (state, action) => {
  console.log(action);
  if (action.type === SET_USER) {
    return { ...state, user: action.payload };
  }
};

export default reducer;
