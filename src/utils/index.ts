import { ColorPattle } from "@models/ContextModels";
import { ActiveBgStyle, Theme } from "@models/StyledComponentsModels";

export const getActiveItemBg = (
  to: string,
  colorPattle: ColorPattle,
  sectionName: string
): string => {
  const currentPath = sectionName;
  const activeBg =
    to === currentPath ? colorPattle.primaryColor : colorPattle.secondaryColor;
  return activeBg;
};

export const getActiveButtonBg = (
  appMode: Theme,
  mode: Theme,
  colorPattle: ColorPattle
): ActiveBgStyle => {
  if (appMode === mode)
    return { bg: colorPattle.primaryColor, color: "var(--white)" };
  return { bg: colorPattle.gray, color: colorPattle.secondaryColor };
};
