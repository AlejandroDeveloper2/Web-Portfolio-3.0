import styled from "styled-components";

const ProfileContainer = styled.section`
  width: calc(100vw - 7.5rem);
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: calc(100vw - 12rem);
  }
  @media (min-width: 1400px) {
    width: 68.125rem;
    gap: 50px;
  }
`;

const ProfileRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media (min-width: 1400px) {
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`;

export { ProfileContainer, ProfileRow };
