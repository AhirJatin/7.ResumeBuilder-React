import { SET_PROFILEPHOTO } from "../../constants/actionTypes";

const addToProfilePhoto = (info) => {
  return {
    type: SET_PROFILEPHOTO,
    payload: info,
  };
};

export { addToProfilePhoto };
