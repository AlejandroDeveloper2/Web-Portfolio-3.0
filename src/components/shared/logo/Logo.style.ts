import styled from "styled-components";

import {
  BackgroundStyledProps,
  TextStyledProps,
} from "@models/StyledComponentsModels";

import { textStyle } from "@styles/GlobalStyles.style";

const LogoContainer = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
  transition: all ease 0.6s;
  &:hover {
    transform: rotate(5deg);
    p:first-of-type {
      transform: translateX(-5px);
    }
    p:last-of-type {
      transform: translateX(5px);
    }
  }
`;

const LogoText = styled.p<TextStyledProps>`
  ${textStyle};
  font-family: "Luckiest Guy", cursive;
  font-size: 20px;
  text-transform: uppercase;
  transition: transform 0.5s ease;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const LayersContainer = styled.div`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
`;

const Layer = styled.div<BackgroundStyledProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10px;
  background-color: transparent;
  transform: rotate(45deg);
  border: solid 4px ${({ bg }: BackgroundStyledProps) => bg};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const SubLayer = styled(Layer)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: scale(0.7) rotate(45deg);
  svg {
    transform: rotate(-45deg);
  }
`;

export { LogoContainer, LogoText, LayersContainer, Layer, SubLayer };
