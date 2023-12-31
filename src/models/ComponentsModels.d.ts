import { ReactNode } from "react";

import { MenuItem, SkillInfo, StudyStatus, WorkStatus } from "./DataModels";
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
  state: WorkStatus;
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
  status: StudyStatus;
  degreeImageUrl: string;
}

interface CarouselProps {
  children: ReactNode[] | ReactNode;
  indicatorsNumber: number;
  slidesHorizontalPosition: number;
  currentSlideIndex: number;
  toggleCarousel: (activeIndex: number) => void;
  next: () => void;
  goBack: () => void;
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
