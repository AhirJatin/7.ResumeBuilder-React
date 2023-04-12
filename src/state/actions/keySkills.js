import { SET_KEYSKILLS } from "../../constants/actionTypes";

const addToKeySkills = (info) => {
  return {
    type: SET_KEYSKILLS,
    payload: info,
  };
};

export { addToKeySkills };
