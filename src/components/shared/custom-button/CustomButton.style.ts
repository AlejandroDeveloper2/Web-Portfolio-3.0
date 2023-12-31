import styled, { css } from "styled-components";

import { ButtonStyleProps } from "@models/StyledComponentsModels";

const baseStyle = css<ButtonStyleProps>`
  width: ${({ unit, width }: ButtonStyleProps) => `${width}${unit}`};
  height: ${({ unit, height }: ButtonStyleProps) => `${height}${unit}`};
  background-color: ${({ bg }: ButtonStyleProps) => bg};
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  padding: 0;
  cursor: pointer;
  transition: opacity ease 0.5s;
  border-radius: 10px;
  border: none;
  opacity: 1;
`;

const Button = styled.button<ButtonStyleProps>`
  ${baseStyle};
  p,
  svg {
    transition: all ease 0.5s;
  }
  &:hover {
    opacity: 0.7;
    p {
      transform: translateX(5px);
    }
    svg {
      transform: translateX(-5px);
    }
  }
`;

const ExternalLink = styled.a<ButtonStyleProps>`
  ${baseStyle};
  svg {
    transition: transform ease 0.5s;
  }

  &:hover {
    opacity: 0.7;
    svg {
      transform: rotate(5deg);
    }
  }
`;

export { Button, ExternalLink };
