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

// action user logged in
export const loggedInAction = () => {
  return {
    type: USER_LOGGED_IN,
  };
};
// action user logged out
export const loggedOutAction = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};
// action Set User
export const setUserAction = (userAccount) => {
  return {
    type: SET_USER,
    payload: userAccount,
  };
};
// action Request COUNT
export const userRequestAction = (requestCount) => {
  return {
    type: SET_REQUEST_COUNT,
    payload: requestCount,
  };
};

// action PENDING BUTTON CLICK TRUE
export const pendingClickTrueAction = () => {
  return {
    type: PENDING_CLICK_TRUE,
  };
};
// action PENDING BUTTON CLICK FALSE
export const pendingClickFalseAction = () => {
  return {
    type: PENDING_CLICK_FALSE,
  };
};
// action Set User
export const setSettingsAction = (settings) => {
  return {
    type: SET_SETTINGS,
    payload: settings,
  };
};

// action Set User
export const setBarangayImagesAction = (barangayimages) => {
  return {
    type: SET_BARANGAYIMAGES,
    payload: barangayimages,
  };
};

// action MODAL TRUE
export const ModalTrueAction = () => {
  return {
    type: MODAL_TRUE,
  };
};
// action MODAL FALSE
export const ModalFalseAction = () => {
  return {
    type: MODAL_FALSE,
  };
};

// action Set User
export const setModalAction = (modal) => {
  return {
    type: SET_MODAL,
    payload: modal,
  };
};
