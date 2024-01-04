import { IconType } from "react-icons";
import { ButtonStyleProps } from "./StyledComponentsModels";
import { StudyCardProps } from "./ComponentsModels";

type LanguageTag = "es-MX" | "en-US";

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

export type {
  LanguageTag,
  MenuItem,
  SkillInfo,
  MediaLink,
  StudiesInfo,
  CarouselConfig,
};
