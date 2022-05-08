import { CHECK_ADMIN } from "../actionTypes/adminAT";
const initialState = {};

export const checkAdmin = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_ADMIN:
      return { admin: action.payload };
    default:
      return state;
  }
};
