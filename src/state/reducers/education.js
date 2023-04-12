import { SET_EDUCATION } from "../../constants/actionTypes";

const INIT_STATE = {
  degreetype: "",
  university: "",
  degree: "",
  startYear: "",
  endYear: "",
};

const addToEducationReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_EDUCATION:
      return { ...action.payload };

    default:
      return state;
  }
};

export default addToEducationReducer;
