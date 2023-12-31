import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import { MenuItem } from "@models/DataModels";

export const MENU_ITEMS_LIST: MenuItem[] = [
  {
    to: "#Home",
    label: "Home",
    Icon: AiFillHome,
    langId: "nav.homeLabel",
  },
  {
    to: "#About",
    label: "About me",
    Icon: AiFillInfoCircle,
    langId: "nav.aboutLabel",
  },
  {
    to: "#MyProjects",
    label: "My Projects",
    Icon: BiSolidDashboard,
    langId: "nav.myProjectsLabel",
  },
  {
    to: "#",
    label: "Contact me",
    Icon: MdEmail,
    langId: "nav.contactLabel",
  },
];
