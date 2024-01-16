import { ReactNode } from "react";
import { IconType } from "react-icons";

import {
  MenuItem,
  SkillInfo,
  StudyStatus,
  WorkStatus,
  Project,
  ProjectStatus,
  ProjectCategory,
} from "./DataModels";
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

interface ExternalLinkWithLabelProps extends BaseExternalLinkProps {
  label: string;
  style: ButtonStyleVariant;
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
  children?: ReactNode | ReactNode[];
}

interface BadgeWithIconProps extends BadgeProps {
  Icon: IconType;
}

interface BadgeIconOnlyProps {
  Icon: IconType;
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

interface ProjectCardProps extends Project {}

interface ProjectBadgesProps {
  category: ProjectCategory;
  status: ProjectStatus;
}

interface ProjectDescriptionProps {
  description: string;
}

interface ProjectCardOptionsProps {
  codeUrl: string;
  category: ProjectCategory;
}

export type {
  LogoProps,
  BaseButtonProps,
  ButtonWithLabelProps,
  BaseExternalLinkProps,
  ExternalLinkWithLabelProps,
  LateralMenuProps,
  ThemeControlsProps,
  NavItemProps,
  SkillSectionProps,
  SkillListProps,
  ExperienceInfoProps,
  BadgeProps,
  BadgeWithIconProps,
  BadgeIconOnlyProps,
  StudyCardProps,
  CarouselProps,
  ProjectCardProps,
  ProjectBadgesProps,
  ProjectDescriptionProps,
  ProjectCardOptionsProps,
};
