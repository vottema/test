import { CHECK_ADMIN } from "../actionTypes/adminAT";

export const checkAdmin = (payload) => {
  return {
    type: CHECK_ADMIN,
    payload,
  };
};
