import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import logo from "../../assets/images/navTopLogo.png";
import Menu from "./Menu";
import Home from "../../assets/images/home.png";
import Request from "../../assets/images/request.png";
import Records from "../../assets/images/records.png";
import Guides from "../../assets/images/guides.png";
import Officials from "../../assets/images/officials.png";
import About from "../../assets/images/about.png";
import Contact from "../../assets/images/contact.png";
import Account from "../../assets/images/account.png";
import { IconButton } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { CircularProgress } from "../../assets/icons";
import { connect } from "react-redux";
import { loggedOutAction, userRequestAction } from "../../redux";
import "../../assets/css/homePage/header_layout.css";

const MenuLink = styled(Link)`
  text-decoration: none;
`;

function Header(props) {
  const { pendingCount, userAccount } = props;
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/request/retrieve/${userAccount.userID}`
    )
      .then((result) => {
        const { data } = result;
        props.userRequestAction(data.result[0].Pendings);
      })
      .catch((err) => {
        console.log("Admin front end error", err);
      });
  }, [userAccount.userID, props]);

  //handle show menu
  const handleCLick = (e) => {
    e.preventDefault();
    if (showMenu === true) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  //logout
  const logout = (e) => {
    e.preventDefault();
    props.loggedOutAction();
    alert("Logout Successful");
    history.push("/");
  };
  return (
    <>
      <div className="header__logo">
        <Logo src={logo} />
        {/* <MenuIcon /> */}
        <IconButton onClick={handleCLick}>
          <DehazeIcon />
        </IconButton>
      </div>
      <div
        className={
          showMenu && pendingCount > 0
            ? "header__menu-showWithPending"
            : showMenu && pendingCount === 0
            ? "header__menu-show"
            : "header__menu"
        }
      >
        <MenuLink to="/">
          <Menu src={Home} title="Home" />
        </MenuLink>
        <MenuLink to="/request">
          <Menu src={Request} title="Request" />
        </MenuLink>
        <MenuLink to="/records">
          <Menu src={Records} title="Records" />
        </MenuLink>
        <MenuLink to="/guides">
          <Menu src={Guides} title="Guidelines" />
        </MenuLink>
        <MenuLink to="/barangayOfficials">
          <Menu src={Officials} title="Barangay Officials" />
        </MenuLink>
        <MenuLink to="/about">
          <Menu src={About} title="About" />
        </MenuLink>
        <MenuLink to="/contact">
          <Menu src={Contact} title="Contact" />
        </MenuLink>
        <MenuLink to="/account">
          <Menu src={Account} title="Profile" />
        </MenuLink>
        <button onClick={logout}>Logout</button>
      </div>
      <div className={`${pendingCount === 0 ? "request-hide" : "request"}`}>
        <p>pending request</p>
        <CircularProgress color="primary" size="18px" />
        <p>{pendingCount}</p>
      </div>
    </>
  );
}
//redux set up
const mapStateToProps = (state) => {
  return {
    isLoggedInState: state.user.isLoggedInState,
    pendingCount: state.user.pendingCount,
    userAccount: state.user.userAccount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loggedOutAction: () => dispatch(loggedOutAction()),
    userRequestAction: (pendingCount) =>
      dispatch(userRequestAction(pendingCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
