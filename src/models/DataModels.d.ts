import { IconType } from "react-icons";
import { ButtonStyleProps } from "./StyledComponentsModels";

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

export type { LanguageTag, MenuItem, SkillInfo, MediaLink };
