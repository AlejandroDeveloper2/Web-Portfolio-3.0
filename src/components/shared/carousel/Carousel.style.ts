import styled from "styled-components";

import {
  BackgroundStyledProps,
  CarouselIndicatorStyleProps,
  SlidesStyleProps,
} from "@models/StyledComponentsModels";

const CarouselContainer = styled.div<BackgroundStyledProps>`
  width: 100%;
  height: 18.75rem;
  border: solid 4px ${({ bg }: BackgroundStyledProps) => bg};
  border-radius: 20px;
  position: relative;
  display: block;
  overflow-x: hidden;

  @media (min-width: 768px) {
    height: 23.75rem;
  }
`;

const Slides = styled.div<SlidesStyleProps>`
  width: auto;
  height: auto;
  position: absolute;
  top: 1.5rem;
  left: ${({ left }: SlidesStyleProps) => left}rem;
  display: inline-flex;
  gap: 0.9rem;
  transition: all 0.6s ease;
`;

const CarouselIndicators = styled.div`
  width: auto;
  display: inline-flex;
  position: absolute;
  bottom: 0.6rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  gap: 0.625rem;
  justify-content: center;
`;

const Indicator = styled.button<CarouselIndicatorStyleProps>`
  width: 0.625rem;
  height: 0.625rem;
  transition: all ease 0.6s;
  transform: scale(
    ${({ active }: CarouselIndicatorStyleProps) =>
      String(active) === "true" ? 1.3 : 1}
  );
  border-radius: 50%;
  background-color: ${({ bg }: CarouselIndicatorStyleProps) => bg};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const CarouselControls = styled.div`
  width: 100%;
  padding: 0 1.875rem;
  position: absolute;
  bottom: 1.25rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
`;

export {
  CarouselContainer,
  Slides,
  CarouselIndicators,
  Indicator,
  CarouselControls,
};
