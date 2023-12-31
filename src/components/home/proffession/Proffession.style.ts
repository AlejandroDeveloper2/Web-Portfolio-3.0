import styled from "styled-components";

const ProffessionSection = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1400px) {
    flex-direction: row;
  }
`;

export { ProffessionSection };
