import { SET_WORKEXPERIENCE } from "../../constants/actionTypes";

const addToWorkExp = (info) => {
  return {
    type: SET_WORKEXPERIENCE,
    payload: info,
  };
};

export { addToWorkExp };
