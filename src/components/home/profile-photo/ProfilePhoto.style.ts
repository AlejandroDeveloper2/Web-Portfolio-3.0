import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { BackgroundStyledProps } from "@models/StyledComponentsModels";

const PhotoMainContainer = styled.div`
  width: 16rem;
  height: 16rem;
  display: block;
  position: relative;

  @media (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;

const baseLayerStyle = css`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const PhotoFirstLayer = styled.div<BackgroundStyledProps>`
  width: 90%;
  height: 90%;
  background-color: ${({ bg }: BackgroundStyledProps) => bg};
  ${baseLayerStyle};
`;

const PhotoLastLayer = styled(motion.div)<BackgroundStyledProps>`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: dashed 5px ${({ bg }: BackgroundStyledProps) => bg};
  ${baseLayerStyle};
`;

const PhotoContainer = styled.figure<BackgroundStyledProps>`
  width: 13.5rem;
  height: 13.5rem;
  border-radius: 50%;
  background-color: ${({ bg }: BackgroundStyledProps) => bg};
  overflow: hidden;

  @media (min-width: 768px) {
    width: 17rem;
    height: 17rem;
  }
`;

export { PhotoMainContainer, PhotoFirstLayer, PhotoLastLayer, PhotoContainer };
