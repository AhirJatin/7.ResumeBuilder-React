import { SET_PERSONALINFO } from "../../constants/actionTypes";

const addToPersonalInfo = (info) => {
  return {
    type: SET_PERSONALINFO,
    payload: info,
  };
};

export { addToPersonalInfo };
