import { USER_LOGGED_IN } from "./userTypes";
import { USER_LOGGED_OUT } from "./userTypes";
import { SET_USER } from "./userTypes";
import { SET_REQUEST_COUNT } from "./userTypes";
import { PENDING_CLICK_TRUE } from "./userTypes";
import { PENDING_CLICK_FALSE } from "./userTypes";
import { SET_SETTINGS } from "./userTypes";
import { SET_BARANGAYIMAGES } from "./userTypes";
import { MODAL_TRUE } from "./userTypes";
import { MODAL_FALSE } from "./userTypes";
import { SET_MODAL } from "./userTypes";

const initialState = {
  isLoggedInState: false,
  isPendingButtonClick: false,
  userAccount: {},
  requestCount: 0,
  settings: {},
  barangayimages: [],
  modal: false,
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
    case SET_REQUEST_COUNT:
      return {
        ...state,
        requestCount: action.payload,
      };
    case PENDING_CLICK_TRUE:
      return {
        ...state,
        isPendingButtonClick: true,
      };
    case PENDING_CLICK_FALSE:
      return {
        ...state,
        isPendingButtonClick: false,
      };
    case SET_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    case SET_BARANGAYIMAGES:
      return {
        ...state,
        barangayimages: action.payload,
      };
    case MODAL_TRUE:
      return {
        ...state,
        modal: true,
      };
    case MODAL_FALSE:
      return {
        ...state,
        modal: false,
      };
    case SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
