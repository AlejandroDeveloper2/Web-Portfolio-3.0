import styled from "styled-components";

import { BackgroundStyledProps } from "@models/StyledComponentsModels";

const LoaderBarContainer = styled.div<BackgroundStyledProps>`
  width: 18.75rem;
  padding: 2.5rem 1.875rem;
  border-radius: 1.25rem;
  background-color: ${({ bg }: BackgroundStyledProps) => bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 0 1.25rem;
`;

const LoadContainer = styled.div<BackgroundStyledProps>`
  width: 100%;
  height: 1.875rem;
  background-color: ${({ bg }: BackgroundStyledProps) => bg};
  position: relative;
  display: block;
  border-radius: 1.25rem;
`;

export { LoaderBarContainer, LoadContainer };
