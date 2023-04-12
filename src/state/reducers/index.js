import { combineReducers } from "redux";
import addToPersonalInfoReducer from "./personalInfo";
import addToWorkExpReducer from "./workExperience";
import addToEducationReducer from "./education";
import addToKeySkillsReducer from "./keySkills";
import addToProfilePhotoReducer from "./profilePhoto";

const rootRducer = combineReducers({
  personalInfo: addToPersonalInfoReducer,
  workExp: addToWorkExpReducer,
  education: addToEducationReducer,
  keySkills: addToKeySkillsReducer,
  profilePhoto: addToProfilePhotoReducer,
});

export default rootRducer;
