import { lazy } from "react";
const HomePage = lazy(() => import("./HomePage"));
const RequestPage = lazy(() => import("./RequestPage"));
const GuideLinesPage = lazy(() => import("./GuideLinesPage"));
const RecordsPage = lazy(() => import("./RecordsPage"));
const OfficialsPage = lazy(() => import("./OfficialsPage"));
const ContactPage = lazy(() => import("./ContactPage"));
const AboutPage = lazy(() => import("./AboutPage"));
const AccountPage = lazy(() => import("./AccountPage"));
const LoginPage = lazy(() => import("./LoginPage"));

export {
  HomePage,
  RequestPage,
  GuideLinesPage,
  RecordsPage,
  OfficialsPage,
  ContactPage,
  AboutPage,
  AccountPage,
  LoginPage,
};
