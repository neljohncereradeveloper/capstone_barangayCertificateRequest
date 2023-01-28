import { lazy } from "react";
import LoginPage from "./LoginPage";
const HomePage = lazy(() => import("./HomePage"));
const UserPage = lazy(() => import("./UserPage"));
const RequestPage = lazy(() => import("./RequestPage"));
const LogsPage = lazy(() => import("./LogsPage"));
const ContactPage = lazy(() => import("./ContactPage"));
const AboutPage = lazy(() => import("./AboutPage"));
const ReportsPage = lazy(() => import("./ReportsPage"));
const SettingsPage = lazy(() => import("./SettingsPage"));
const EmployeePage = lazy(() => import("./EmployeePage"));
const BarangayOfficials = lazy(() => import("./BarangayOfficials"));

export {
  UserPage,
  HomePage,
  RequestPage,
  LogsPage,
  ReportsPage,
  LoginPage,
  SettingsPage,
  ContactPage,
  AboutPage,
  EmployeePage,
  BarangayOfficials,
};
