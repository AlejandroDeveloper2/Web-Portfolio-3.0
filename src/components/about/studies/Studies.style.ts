import styled from "styled-components";

const StudiesSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;

  @media (min-width: 768px) {
    gap: 0.9rem;
  }
`;

const SectionTitle = styled.div`
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

export { StudiesSection, SectionTitle };
