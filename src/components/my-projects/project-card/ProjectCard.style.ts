import styled from "styled-components";

import {
  BackgroundStyledProps,
  ButtonStyleVariant,
  Theme,
} from "@models/StyledComponentsModels";
import { ColorPattle } from "@models/ContextModels";

const ProjectCardContainer = styled.div<BackgroundStyledProps>`
  width: 100%;
  height: 25rem;
  display: flex;
  padding: 0.9rem;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  border-radius: 1.25rem;
  border: 2px solid ${({ bg }: BackgroundStyledProps) => bg};
  background-color: transparent;

  @media (min-width: 768px) {
    width: 32.5rem;
    padding: 1.5rem;
    height: 38.75rem;
  }
`;

const ProjectPresentation = styled.figure`
  width: 100%;
  height: 22.5rem;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  position: relative;
  overflow: hidden;
  display: block;
  border-bottom: 4px var(--white) solid;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(112, 126, 250, 0.2);
  }
`;

const BadgesContainer = styled.div`
  width: auto;
  gap: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Description = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button,
  a {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    button,
    a {
      width: 0;
    }
    a {
      flex-grow: 4;
    }
    button:first-of-type {
      flex-grow: 6;
    }
  }
`;

const ProjectTitle = styled.div<BackgroundStyledProps>`
  width: 100%;
  border-top-right-radius: 2.5rem;
  background-color: ${({ bg }: BackgroundStyledProps) => bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 1.25rem;
    padding: 1.25rem 1.5rem;
    flex-direction: row;
  }
`;

const getButtonsStyle = (
  colorPattle: ColorPattle,
  themeMode: Theme
): ButtonStyleVariant[] => [
  {
    bg: colorPattle.secondaryColor,
    color: themeMode === "light" ? "var(--white)" : colorPattle.primaryColor,
    unit: "px",
    width: 0,
    height: 60,
  },
  {
    bg: colorPattle.primaryColor,
    color: "var(--white)",
    unit: "px",
    width: 0,
    height: 60,
  },
];

export {
  ProjectCardContainer,
  ProjectPresentation,
  BadgesContainer,
  Description,
  Options,
  ProjectTitle,
  getButtonsStyle,
};
