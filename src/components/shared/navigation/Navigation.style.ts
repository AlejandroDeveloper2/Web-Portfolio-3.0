import styled, { CSSProperties } from "styled-components";

import {
  BackgroundStyledProps,
  ButtonStyleProps,
  ButtonStyleVariant,
} from "@models/StyledComponentsModels";
import { ColorPattle } from "@models/ContextModels";

/* Navigation styles */
const setStickyNavStyle = (): CSSProperties => {
  const stickyNavStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    animation: "0.5s linear moveDown",
  };
  return stickyNavStyle;
};

const relativeNavStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
};

const NavigationContainer = styled.header<BackgroundStyledProps>`
  width: 100%;
  height: 6.25rem;
  background-color: ${({ bg }: BackgroundStyledProps) => bg};
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 5;
  @media (min-width: 1400px) {
    height: 7.5rem;
  }
  @keyframes moveDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const MobileButtonContainer = styled.div`
  width: auto;
  height: auto;
  display: block;
  @media (min-width: 1400px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1400px) {
    display: inline-flex;
  }
`;

const getShowMenuBtnStyle = (): ButtonStyleProps => ({
  width: 40,
  height: 40,
  unit: "px",
  bg: "transparent",
});

const getLangBtnStyle = (colorPattle: ColorPattle): ButtonStyleVariant => ({
  width: 70,
  height: 40,
  unit: "px",
  bg: colorPattle.primaryColor,
  color: "var(--white)",
});

export {
  setStickyNavStyle,
  relativeNavStyle,
  NavigationContainer,
  MobileButtonContainer,
  Nav,
  getShowMenuBtnStyle,
  getLangBtnStyle,
};
