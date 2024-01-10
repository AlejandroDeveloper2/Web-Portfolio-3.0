import styled from "styled-components";

const ProjectsContainer = styled.section`
  width: 18.75rem;
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

const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
`;

const SubtitleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export { ProjectsContainer, ProjectInfo, SubtitleContainer };
