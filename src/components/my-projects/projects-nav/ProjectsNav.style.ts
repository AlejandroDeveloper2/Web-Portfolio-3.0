import styled from "styled-components";

import { TapStyleProps } from "@models/StyledComponentsModels";

const TapNav = styled.nav`
  width: 100%;
  height: auto;
  border-radius: 1.25rem;
  background-color: var(--white);
  display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 1px;
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-rows: none;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Tap = styled.button<TapStyleProps>`
  width: 100%;
  background-color: ${({ bg }: TapStyleProps) => bg};
  display: flex;
  flex-direction: column;
  padding: 0.93rem 1.25rem;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    bottom: 0;
    width: 100%;
    height: 5px;
    background-color: var(--white);
    left: 0;
    position: absolute;
    opacity: ${({ active }: TapStyleProps) => (active === "true" ? 1 : 0)};
    transition: opacity 0.5s ease;
  }

  @media (min-width: 768px) {
    gap: 10px;
    padding: 1.25rem 1.875rem;
  }

  @media (min-width: 1400px) {
    gap: 0;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.7rem 1.875rem;
  }
`;

const TapLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

const ProjectIndicator = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--white);
  border-radius: 10px;
  display: grid;
  place-content: center;

  @media (min-width: 768px) {
    width: 3.125rem;
    height: 3.125rem;
  }

  @media (min-width: 1400px) {
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 20px;
  }
`;

export { TapNav, Tap, TapLabel, ProjectIndicator };
