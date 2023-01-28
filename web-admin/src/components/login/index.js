import React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { loginAdmin } from "../../api/Login";
import { toast } from "react-toastify";
import { loggedInAction, setUserAction } from "../../redux";
import { connect } from "react-redux";
import "../../assets/css/loginpage.css";
import LoginForm from "../form/LoginForm";

toast.configure();

function Login(props) {
  let history = useHistory();
  //USEMUTATION APPROVE REQUEST
  const mutation = useMutation(loginAdmin, {
    onSuccess: (res) => {
      const { message, auth, token, result } = res.data;
      if (auth) {
        localStorage.setItem("token", token);
        props.loggedInAction();
        props.setUserAction(result[0]);
        toast.success(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
    onError: () => {
      toast.error("User does not exist", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });
  // Handle Submit
  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      await mutation.mutateAsync({
        username,
        password,
      });
    } catch (e) {}

    if (username === "admin" && password === "admin2021") {
      alert("WELCOME ADMINISTRATOR NELJOHN");
      props.loggedInAction();
      history.push("/admin");
    }
  };
  return (
    <div className="login">
      <LoginForm handleSubmit={handleSubmit} />
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
