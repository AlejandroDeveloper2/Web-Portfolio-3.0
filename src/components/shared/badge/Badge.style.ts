import styled from "styled-components";

import { BackgroundStyledProps } from "@models/StyledComponentsModels";

const BadgeContainer = styled.div<BackgroundStyledProps>`
  width: 6.25rem;
  padding: 6px 10px;
  display: grid;
  place-content: center;
  border-radius: 1.2rem;
  background-color: ${({ bg }: BackgroundStyledProps) => bg};
`;

export { BadgeContainer };
