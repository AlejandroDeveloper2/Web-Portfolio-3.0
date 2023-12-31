import styled from "styled-components";

import {
  ActiveBgStyle,
  ButtonStyleProps,
  ThemeControlsStyleProps,
} from "@models/StyledComponentsModels";

const ThemeControls = styled.div<ThemeControlsStyleProps>`
  display: ${({ is_mobile_screen }: ThemeControlsStyleProps) =>
    is_mobile_screen === "true" ? "inline-flex" : "none"};
  gap: 0.4rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 1400px) {
    display: inline-flex;
  }
`;

const getThemeBtnStyle = (
  getActiveButtonBg: () => ActiveBgStyle
): ButtonStyleProps => ({
  width: 40,
  height: 40,
  unit: "px",
  bg: getActiveButtonBg().bg,
});

export { ThemeControls, getThemeBtnStyle };
