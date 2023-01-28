import { USER_LOGGED_IN } from "./userTypes";
import { USER_LOGGED_OUT } from "./userTypes";
import { SET_USER } from "./userTypes";
import { SET_USER_REQUEST } from "./userTypes";
import { SET_BARANGAYIMAGES } from "./userTypes";
import { SET_SETTINGS } from "./userTypes";

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

// action User Request
export const userRequestAction = (pendingCount) => {
  return {
    type: SET_USER_REQUEST,
    payload: pendingCount,
  };
};

export const setBarangayImagesAction = (barangayimages) => {
  return {
    type: SET_BARANGAYIMAGES,
    payload: barangayimages,
  };
};

export const setSettingsAction = (settings) => {
  return {
    type: SET_SETTINGS,
    payload: settings,
  };
};
