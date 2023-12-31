import styled from "styled-components";

import {
  BackgroundStyledProps,
  ButtonStyleProps,
} from "@models/StyledComponentsModels";
import { ColorPattle } from "@models/ContextModels";

const SkillsSectionContainer = styled.section`
  width: 100%;
  display: inline-flex;
  gap: 4.2rem;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media (min-width: 1400px) {
    width: 37rem;
  }
`;

const SkillListContainer = styled.div<BackgroundStyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 5px dashed ${({ bg }: BackgroundStyledProps) => bg};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 1.5rem;
  gap: 1rem;

  @media (min-width: 1400px) {
    align-items: flex-start;
  }
`;

const List = styled.ul`
  width: auto;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  li {
    list-style: none;
    display: block;
  }
`;

const getSkillBtnStyle = (
  colorPattle: ColorPattle,
  index: number
): ButtonStyleProps => ({
  bg: index % 2 === 0 ? colorPattle.primaryColor : colorPattle.secondaryColor,
  width: 50,
  height: 50,
  unit: "px",
});

export { SkillsSectionContainer, List, SkillListContainer, getSkillBtnStyle };
