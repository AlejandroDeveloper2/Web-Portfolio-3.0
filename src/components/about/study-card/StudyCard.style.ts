import styled from "styled-components";

import { BackgroundStyledProps } from "@models/StyledComponentsModels";

const StudyCardContainer = styled.div<BackgroundStyledProps>`
  width: 11.25rem;
  height: auto;
  padding: 1.25rem 0.9rem;
  border-radius: 20px;
  border: solid 2px ${({ bg }: BackgroundStyledProps) => bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  transition: transform 0.6s ease;

  div {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 15.625rem;
    height: 15.625rem;
    gap: 15px;
  }

  @media (min-width: 1400px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export { StudyCardContainer };
