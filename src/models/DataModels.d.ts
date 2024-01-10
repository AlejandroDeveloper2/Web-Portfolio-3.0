import { IconType } from "react-icons";
import { ButtonStyleProps } from "./StyledComponentsModels";
import { StudyCardProps } from "./ComponentsModels";
import { CounterProject } from "./ContextModels";

type LanguageTag = "es-MX" | "en-US";
type LanguageLabel = "spanish" | "english";
type ProjectStatus = "ended" | "in progress" | "finalizado" | "en progreso";
type ProjectCategory = "design" | "development";
type StudyStatus = "ended" | "studying" | "finalizado" | "estudiando";
type WorkStatus = "ended" | "working" | "finalizado" | "trabajando";

interface MenuItem {
  to: string;
  label: string;
  Icon: IconType;
  langId: string;
}

interface SkillInfo {
  id: string;
  TechIcon: IconType;
  title: string;
  experienceLevel: number;
  experienceDateRange: string;
  isFeaturedSkill: boolean;
}

interface MediaLink {
  style: ButtonStyleProps;
  title: string;
  href: string;
  Icon: IconType;
}

interface StudiesInfo extends StudyCardProps {}

interface CarouselConfig {
  shownSlidesNumber: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  slides: T[];
}

interface Technologie {
  name: string;
  skillId: string;
}

interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  codeUrl: string;
  demoUrl: string;
  designUrl: string;
  description: string;
  language: LanguageLabel;
  presentationImage: string;
  status: ProjectStatus;
  technologies: Technologie[];
}

interface ServerResponseError {
  message: string;
}

interface ProjectTap {
  label: string;
  category: ProjectCategory;
  Icon: IconType;
  projectsQuantity: CounterProject;
}

export type {
  LanguageTag,
  LanguageLabel,
  ProjectStatus,
  ProjectCategory,
  StudyStatus,
  WorkStatus,
  MenuItem,
  SkillInfo,
  MediaLink,
  StudiesInfo,
  CarouselConfig,
  Technologie,
  Project,
  ServerResponseError,
  ProjectTap,
};
