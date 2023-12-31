import { MessageFormatElement } from "react-intl";
import { LanguageTag } from "./DataModels";
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

export type {
  ContextProps,
  ThemeContextModel,
  ColorPattle,
  LanguageContextModel,
};
