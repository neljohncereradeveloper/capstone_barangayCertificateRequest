import Axios from "axios";

export const UserLogin = ({ userName, password }) => {
  Axios.post("http://localhost:3001/api/user/login", {
    userName: userName,
    password: password,
  })
    .then((response) => {
      console.log("Login Result", response);
    })
    .catch((err) => {
      console.log("login front end error", err);
    });
};
