import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../styledComponents/Input";
import { Button } from "react-bootstrap";
import { loggedInAction, setUserAction } from "../../redux";
import { connect } from "react-redux";
import Axios from "axios";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../../assets/css/loginpage.css";

function Login(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = state;

    Axios.post("http://localhost:3001/api/user/login", {
      username,
      password,
    })
      .then((response) => {
        const { result, message, auth, token } = response.data;
        if (auth) {
          toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
          });
          localStorage.setItem("token", token);
          props.loggedInAction();
          props.setUserAction(result[0]);
        } else {
          toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) => {
        console.log("login front end error", err);
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <AccountCircleIcon />
        <h3>Login</h3>
        <Input
          aria-label="User Name..."
          label="userName"
          type="text"
          value={state.username}
          onChange={(val) => setState({ ...state, username: val })}
        />
        <Input
          aria-label="Password..."
          label="Password"
          type="password"
          value={state.password}
          onChange={(val) => setState({ ...state, password: val })}
        />
        <Button variant="primary" onClick={handleSubmit}>
          Login
        </Button>

        <Link to="#">Forgot Password?</Link>
      </form>
    </div>
  );
}
// redux setup
// state
const mapStateToProps = (state) => {
  return {
    isLoggedInState: state.user.isLoggedInState,
    userAccount: state.user.userAccount,
  };
};
// dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    loggedInAction: () => dispatch(loggedInAction()),
    setUserAction: (userAccount) => dispatch(setUserAction(userAccount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
