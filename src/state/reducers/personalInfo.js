import { SET_PERSONALINFO } from "../../constants/actionTypes";

const INIT_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  postalCode: "",
  objective: "",
};

const addToPersonalInfoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PERSONALINFO:
      return { ...action.payload };

    default:
      return state;
  }
};

export default addToPersonalInfoReducer;
