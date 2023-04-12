import { SET_PROFILEPHOTO } from "../../constants/actionTypes";

const INIT_STATE = {
  files: "",
};

const addToProfilePhotoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PROFILEPHOTO:
      return { ...action.payload };
    default:
      return state;
  }
};

export default addToProfilePhotoReducer;
