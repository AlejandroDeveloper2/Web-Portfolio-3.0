import styled from "styled-components";

import { BackgroundStyledProps } from "@models/StyledComponentsModels";

const Li = styled.li`
  list-style: none;
  display: block;
  padding: auto;
`;

const StyledLink = styled.a<BackgroundStyledProps>`
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  p,
  svg {
    transition: all ease 0.5s;
  }
  &:hover {
    p {
      color: ${({ bg }: BackgroundStyledProps) => bg};
    }
    svg {
      fill: ${({ bg }: BackgroundStyledProps) => bg};
    }
  }

  @media (min-width: 1400px) {
    svg {
      display: none;
    }
  }
`;

export { Li, StyledLink };
