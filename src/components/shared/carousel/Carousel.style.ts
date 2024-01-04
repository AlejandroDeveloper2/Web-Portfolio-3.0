import styled from "styled-components";

import {
  BackgroundStyledProps,
  CarouselIndicatorStyleProps,
} from "@models/StyledComponentsModels";

const CarouselContainer = styled.div<BackgroundStyledProps>`
  width: 100%;
  border: solid 4px ${({ bg }: BackgroundStyledProps) => bg};
  padding-top: 2.5rem;
  padding-bottom: 3.125rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  border-radius: 20px;
  overflow-x: hidden;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
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
      String(active) === "true" ? 1.2 : 1}
  );
  border-radius: 50%;
  background-color: ${({ bg }: CarouselIndicatorStyleProps) => bg};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export { CarouselContainer, CarouselIndicators, Indicator };
