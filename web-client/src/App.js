import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HomePage,
  RequestPage,
  RecordsPage,
  GuideLinesPage,
  OfficialsPage,
  AboutPage,
  ContactPage,
  AccountPage,
  LoginPage,
} from "./pages";
import { ProtectedRoute, PublicRoute } from "./routes";
import { connect } from "react-redux";
import { EditProfile } from "./components";
import useFirestore from "./hooks/useFirestore";
import { setBarangayImagesAction, setSettingsAction } from "./redux";
import { fetchSettings } from "./api/Settings";
import { useQuery } from "react-query";

function App(props) {
  const { isLoggedInState } = props;
  const { data } = useQuery("settings", fetchSettings, {
    onSuccess: (res) => {
      const { result } = res;
      props.setSettingsAction(result[0]);
    },
  });
  const { docs } = useFirestore("images");

  // useEffect
  useEffect(() => {
    props.setBarangayImagesAction(docs);
  }, [docs, props]);

  return (
    <Router>
      <>
        {/* <CircularProgress color="secondary" /> */}
        <Suspense fallback={<div>Loading....</div>}>
          <Switch>
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/home"
              component={HomePage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/request"
              component={RequestPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/records"
              component={RecordsPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/guides"
              component={GuideLinesPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/barangayOfficials"
              component={OfficialsPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/about"
              component={AboutPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/contact"
              component={ContactPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/account"
              component={AccountPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/account-edit"
              component={EditProfile}
              exact={true}
            />
            {/* Public Route */}
            <PublicRoute
              isLoggedInState={isLoggedInState}
              path="/"
              component={LoginPage}
              exact={true}
            />
            <Route path="*">
              <h4>Not found</h4>
            </Route>
          </Switch>
        </Suspense>
      </>
    </Router>
  );
}

// redux setup
const mapStateToProps = (state) => {
  return {
    isLoggedInState: state.user.isLoggedInState,
    userAccount: state.user.userAccount,
  };
};
// dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    setSettingsAction: (settings) => dispatch(setSettingsAction(settings)),
    setBarangayImagesAction: (barangayimages) =>
      dispatch(setBarangayImagesAction(barangayimages)),
  };
};
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
