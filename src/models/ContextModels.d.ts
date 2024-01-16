import { MessageFormatElement } from "react-intl";

import {
  LanguageTag,
  Project,
  LanguageLabel,
  ProjectCategory,
} from "./DataModels";
import { Theme } from "./StyledComponentsModels";

interface ContextProps {
  children: JSX.Element | JSX.Element[];
}

interface ColorPattle {
  primaryColor: string;
  bgColor: string;
  gray: string;
  secondaryColor: string;
  background: string;
}

interface ThemeContextModel {
  themeMode: Theme;
  colorPattle: ColorPattle;
  toggleThemeMode: (mode: Theme) => void;
  getColorPattle: () => void;
}

interface LanguageContextModel {
  language: LanguageTag;
  appMessages: Record<string, string> | Record<string, MessageFormatElement[]>;
  toggleAppLanguage: () => void;
}

interface StoreDataModel {
  projects: Project[];
  allProjects: Project[];
  projectTap: ProjectCategory;
  isLoading: boolean;
  getAllProjects: (lang: LanguageLabel) => Promise<void>;
  toggleProjectTap: () => void;
}

interface CounterProject {
  designCounter: number;
  developmentCounter: number;
}

export type {
  ContextProps,
  ThemeContextModel,
  ColorPattle,
  LanguageContextModel,
  StoreDataModel,
  CounterProject,
};
