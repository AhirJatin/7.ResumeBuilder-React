import { SET_KEYSKILLS } from "../../constants/actionTypes";

const INIT_STATE = {
  skill_1: "",
  skill_2: "",
  skill_3: "",
  skill_4: "",
  skill_5: "",
};

const addToKeySkillsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_KEYSKILLS:
      return { ...action.payload };

    default:
      return state;
  }
};

export default addToKeySkillsReducer;
