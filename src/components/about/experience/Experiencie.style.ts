import styled from "styled-components";

import { BackgroundStyledProps } from "@models/StyledComponentsModels";

const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 15px;
  }
`;

const ExperienceArticle = styled.article<BackgroundStyledProps>`
  width: 100%;
  border-radius: 20px;
  border: solid 4px ${({ bg }: BackgroundStyledProps) => bg};
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 25px;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    padding: 40px 30px;
    align-items: flex-start;
  }
`;

const ArticleTitle = styled.div`
  display: inline-flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    svg {
      font-size: 40px;
    }
  }
`;

export { ExperienceContainer, ExperienceArticle, ArticleTitle };
