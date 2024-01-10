import { FaCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

import { ProjectTap } from "@models/DataModels.d";
import { CounterProject } from "@models/ContextModels";

export const getProjectTaps = (
  projectsQuantity: CounterProject
): ProjectTap[] => [
  {
    label: "Development projects",
    Icon: FaCode,
    projectsQuantity,
    category: "development",
  },
  {
    label: "Design projects",
    Icon: MdOutlineDesignServices,
    projectsQuantity,
    category: "design",
  },
];
