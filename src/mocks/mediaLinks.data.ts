import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import { MediaLink } from "@models/DataModels";
import { ButtonStyleProps } from "@models/StyledComponentsModels";

const style: ButtonStyleProps = {
  width: 60,
  height: 60,
  unit: "px",
  bg: "",
};

export const mediaLinks: MediaLink[] = [
  {
    style,
    title: "Github",
    href: "https://github.com/AlejandroDeveloper2",
    Icon: AiFillGithub,
  },
  {
    style,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/diego-alejandro-diaz-28b3a2181/",
    Icon: AiFillLinkedin,
  },
  {
    style,
    title: "Email",
    href: "mailto:diegodiazdev9817@gmail.com?subject=subject text",
    Icon: MdEmail,
  },
];
