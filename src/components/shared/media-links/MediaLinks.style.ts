import styled from "styled-components";

import {
  ButtonStyleProps,
  MediaLinksStyleProps,
} from "@models/StyledComponentsModels";
import { ColorPattle } from "@models/ContextModels";

const MediaLinksContainer = styled.nav<MediaLinksStyleProps>`
  width: 50px;
  height: 250px;
  background-color: ${({ bg }: MediaLinksStyleProps) => bg};
  position: fixed;
  left: 0;
  top: 8rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  z-index: 5;
  transition: transform 0.6s ease;
  transform: ${({ visible }: MediaLinksStyleProps) =>
    visible === "true" ? "translateX(0)" : "translateX(-100%)"};
  ul {
    display: inline-flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      display: block;
    }
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 400px;
    top: 8rem;
    bottom: auto;
    transform: translateX(0);
  }

  @media (min-width: 1024px) {
    width: 90px;
    top: 0;
    bottom: 0;
  }
`;

const ToggleContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: -2.5rem;
  top: 0;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const getSocialMediaBtnStyle = (
  colorPattle: ColorPattle,
  screenSize: number
): ButtonStyleProps => ({
  width: screenSize < 600 ? 40 : 60,
  height: screenSize < 600 ? 40 : 60,
  unit: "px",
  bg: colorPattle.bgColor,
});

export { MediaLinksContainer, ToggleContainer, getSocialMediaBtnStyle };
