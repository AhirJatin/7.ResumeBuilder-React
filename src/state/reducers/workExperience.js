import { SET_WORKEXPERIENCE } from "../../constants/actionTypes";

const INIT_STATE = {
  jobTitle: "",
  organizationName: "",
  jobDescription: "",
  startYear: "",
  endYear: "",
};

const addToWorkExpReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_WORKEXPERIENCE:
      return { ...action.payload };

    default:
      return state;
  }
};

export default addToWorkExpReducer;
