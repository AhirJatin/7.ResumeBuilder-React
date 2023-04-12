import { SET_EDUCATION } from "../../constants/actionTypes";

const addToEducation = (info) => {
  return {
    type: SET_EDUCATION,
    payload: info,
  };
};

export { addToEducation };
