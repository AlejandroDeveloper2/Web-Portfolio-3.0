import styled from "styled-components";

import {
  ButtonStyleProps,
  LateralMenuStyleProps,
} from "@models/StyledComponentsModels";

import { Nav } from "../navigation/Navigation.style";

const LateralMenuContainer = styled.div<LateralMenuStyleProps>`
  width: 10.5rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all ease 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${({ bg }: LateralMenuStyleProps) => bg};
  transform: ${({ visible }: LateralMenuStyleProps) =>
    visible === "true" ? "translateX(0)" : "translateX(-100%)"};
  z-index: 15;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 12rem;
  }

  @media (min-width: 1400px) {
    display: none;
  }
`;

const MobileNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 1400px) {
    display: none;
  }
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: block;
  button {
    box-shadow: none;
  }
`;

const MobileMenuFooter = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const getMenuBtnStyle = (): ButtonStyleProps => ({
  width: 40,
  height: 40,
  unit: "px",
  bg: "transparent",
});

export {
  LateralMenuContainer,
  MobileNav,
  CloseButtonContainer,
  MobileMenuFooter,
  getMenuBtnStyle,
};
