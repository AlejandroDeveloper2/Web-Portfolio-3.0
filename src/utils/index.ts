import { ColorPattle, CounterProject } from "@models/ContextModels";
import { LanguageTag, Project } from "@models/DataModels";
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

export const downloadCV = async (language: LanguageTag): Promise<void> => {
  const hostUrl: string = import.meta.env.PRODUCTION_WEBSITE_URL + "download/";
  const cvFileURl: string =
    language === "en-US"
      ? hostUrl + "CV-ingles.pdf"
      : hostUrl + "CV-español.pdf";
  try {
    const res = await window.fetch(cvFileURl);
    const file = await res.blob();
    const tempURL = window.URL.createObjectURL(file);
    const aTag = window.document.createElement("a");
    aTag.href = tempURL;
    aTag.download = cvFileURl.replace(/^.*[\\/]/, "");
    window.document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  } catch (error) {
    console.log(error);
  }
};

export const getProjectsQuantityPerCategory = (
  projects: Project[]
): CounterProject => {
  let designCounter = 0,
    developmentCounter = 0;
  projects.forEach((project: Project) => {
    if (project.category === "design") designCounter++;
    else developmentCounter++;
  });
  return { designCounter, developmentCounter };
};
