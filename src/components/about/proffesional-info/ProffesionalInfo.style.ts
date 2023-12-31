import styled from "styled-components";

import { BackgroundStyledProps } from "@models/StyledComponentsModels";

const ProfileInfoContainer = styled.article<BackgroundStyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 1rem;

  @media (min-width: 1400px) {
    width: 30rem;
  }
`;

export { ProfileInfoContainer };
