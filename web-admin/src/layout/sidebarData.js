import {
  HomeIcon,
  PeopleIcon,
  AddToHomeScreenIcon,
  AssignmentIcon,
  AssessmentIcon,
  SettingsIcon,
  SupervisorAccountIcon,
  PeopleAltIcon,
} from "../assets/icons";

export const sidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Users",
    icon: <PeopleAltIcon />,
    link: "/users",
  },
  {
    title: "Employees",
    icon: <PeopleIcon />,
    link: "/employees",
  },
  {
    title: "Requests",
    icon: <AddToHomeScreenIcon />,
    link: "/requests",
  },
  {
    title: "Brgy. Officials",
    icon: <SupervisorAccountIcon />,
    link: "/barangayofficials",
  },

  {
    title: "Logs",
    icon: <AssignmentIcon />,
    link: "/logs",
  },
  {
    title: "Reports",
    icon: <AssessmentIcon />,
    link: "/reports",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];
