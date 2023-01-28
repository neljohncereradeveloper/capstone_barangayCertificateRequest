import { USER_LOGGED_IN } from "./userTypes";
import { USER_LOGGED_OUT } from "./userTypes";
import { SET_USER } from "./userTypes";
import { SET_USER_REQUEST } from "./userTypes";
import { SET_BARANGAYIMAGES } from "./userTypes";
import { SET_SETTINGS } from "./userTypes";

const initialState = {
  isLoggedInState: false,
  userAccount: {},
  pendingCount: 0,
  barangayimages: [],
  settings: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isLoggedInState: true,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedInState: false,
      };
    case SET_USER:
      return {
        ...state,
        userAccount: action.payload,
      };
    case SET_USER_REQUEST:
      return {
        ...state,
        pendingCount: action.payload,
      };
    case SET_BARANGAYIMAGES:
      return {
        ...state,
        barangayimages: action.payload,
      };
    case SET_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
