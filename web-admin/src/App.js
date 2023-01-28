import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ReactQueryDevtools } from "react-query/devtools";
import { Sidebar } from "./layout";
import {
  setSettingsAction,
  setBarangayImagesAction,
  setModalAction,
} from "./redux";
import {
  UserPage,
  HomePage,
  LogsPage,
  ReportsPage,
  LoginPage,
  SettingsPage,
  ContactPage,
  AboutPage,
  EmployeePage,
  BarangayOfficials,
} from "./pages";
import {
  RequestPending,
  RequestAll,
  RequestApprove,
  RequestDisapprove,
} from "./components/tables";
import {
  UserInformations,
  UserRegistration,
  EditProf,
} from "./components/user";
import { EmployeeRegistration } from "./components/employee";
import {
  TotalApproveRequest,
  TotalDisapproveRequest,
} from "./components/print/reports";
import { PrintRequest } from "./components/print";
import { PageLoader } from "./skeletons";
import { ProtectedRoute, PublicRoute } from "./routes";
import { useQuery } from "react-query";
import { fetchSettings } from "./api/Settings";
import "./App.css";
import "./assets/css/table.css";
import Modal from "./components/modal/Modal";
import useFirestore from "./components/hooks/useFirestore";

function App(props) {
  const { isLoggedInState, modal } = props;
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
    <>
      {modal ? <Modal /> : null}
      <Router>
        <div className="app">
          {isLoggedInState ? <Sidebar /> : null}
          <div className="right">
            <Suspense fallback={<PageLoader />}>
              <Switch>
                {/* Protected Routes */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/home"
                  component={HomePage}
                  exact={true}
                />
                {/* PRINT Routes */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/print/request"
                  component={PrintRequest}
                  exact={true}
                />
                {/* Barangay officials ROUTES */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/barangayofficials"
                  component={BarangayOfficials}
                  exact={true}
                />
                {/* Employee ROUTES */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/employees"
                  component={EmployeePage}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/employee-registration"
                  component={EmployeeRegistration}
                  exact={true}
                />
                {/* USER ROUTES */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/users"
                  component={UserPage}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/user/:id"
                  component={UserInformations}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/user-registration"
                  component={UserRegistration}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/user-edit/:id"
                  component={EditProf}
                  exact={true}
                />
                {/*REQUEST ROUTES */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/requests"
                  component={RequestAll}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/requests/all"
                  component={RequestAll}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/requests/pending"
                  component={RequestPending}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/requests/approve"
                  component={RequestApprove}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/requests/disapprove"
                  component={RequestDisapprove}
                  exact={true}
                />
                {/*LOGS ROUTES */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/logs"
                  component={LogsPage}
                  exact={true}
                />
                {/*REPORTS ROUTES */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/reports"
                  component={ReportsPage}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/reports/approve"
                  component={TotalApproveRequest}
                  exact={true}
                />
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/reports/disapprove"
                  component={TotalDisapproveRequest}
                  exact={true}
                />
                {/*SETTINGS ROUTES */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/settings"
                  component={SettingsPage}
                  exact={true}
                />
                {/*CONTACT ROUTES */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/contact"
                  component={ContactPage}
                  exact={true}
                />
                {/*ABOUT ROUTES */}
                <ProtectedRoute
                  isLoggedInState={isLoggedInState}
                  path="/about"
                  component={AboutPage}
                  exact={true}
                />
                {/* Public Route */}
                <PublicRoute
                  isLoggedInState={isLoggedInState}
                  path="/"
                  component={LoginPage}
                  exact={true}
                />
                <Redirect from="*" to="/" />
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
      {/* React query dev tools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

// redux setup
const mapStateToProps = (state) => {
  return {
    isLoggedInState: state.user.isLoggedInState,
    modal: state.user.modal,
  };
};
// dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    setSettingsAction: (settings) => dispatch(setSettingsAction(settings)),
    setBarangayImagesAction: (barangayimages) =>
      dispatch(setBarangayImagesAction(barangayimages)),
    setModalAction: (modal) => dispatch(setModalAction(modal)),
  };
};
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
