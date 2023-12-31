import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 30px;
  }
`;

const InfoHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

const InfoTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  svg {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    gap: 15px;
    svg {
      font-size: 30px;
    }
  }
`;

const InfoTitle = styled(InfoTime)`
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export { InfoContainer, InfoHeader, InfoTitle, InfoTime };
