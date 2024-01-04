import { ReactNode } from "react";

import { MenuItem, SkillInfo } from "./DataModels";
import { ButtonStyleProps, ButtonStyleVariant } from "./StyledComponentsModels";

interface LogoProps {
  children: React.ReactNode;
}

interface BaseButtonProps {
  children: React.ReactNode;
  style: ButtonStyleProps;
  title: string;
  onClick: () => void;
}

interface ButtonWithLabelProps extends BaseButtonProps {
  label: string;
  style: ButtonStyleVariant;
}

interface BaseExternalLinkProps {
  children: React.ReactNode;
  style: ButtonStyleProps;
  title: string;
  href: string;
}

interface LateralMenuProps {
  isVisible: boolean;
  toggleMenu: () => void;
}

interface ThemeControlsProps {
  isMobileScreen: boolean;
}

interface NavItemProps {
  item: MenuItem;
}

interface SkillSectionProps {
  children: React.ReactNode;
}

interface SkillListProps {
  listTitle: string;
  skillGroup: SkillInfo[];
}

interface ExperienceInfoProps {
  description: string;
  timeDuration: string;
  jobPosition: string;
  state: "ended" | "working";
}

interface BadgeProps {
  text: string;
  style: {
    bg: string;
    color: string;
  };
}

interface StudyCardProps {
  degreeTitle: string;
  timeSpan: string;
  status: "ended" | "studying";
  degreeImageUrl: string;
}

interface CarouselProps {
  children: ReactNode[] | ReactNode;
  indicatorsNumber: number;
  next: () => void;
}

export type {
  LogoProps,
  BaseButtonProps,
  ButtonWithLabelProps,
  BaseExternalLinkProps,
  LateralMenuProps,
  ThemeControlsProps,
  NavItemProps,
  SkillSectionProps,
  SkillListProps,
  ExperienceInfoProps,
  BadgeProps,
  StudyCardProps,
  CarouselProps,
};
