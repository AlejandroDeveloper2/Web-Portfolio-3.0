import { IoIosRocket } from "react-icons/io";

import { useThemeContext } from "@hooks/index";

import { ProjectsNav } from "@components/index";

import { TextSubtitle, TextTitle } from "@styles/GlobalStyles.style";
import {
  ProjectInfo,
  ProjectsContainer,
  SubtitleContainer,
} from "./Projects.style";

const Projects = (): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <ProjectsContainer>
      <TextTitle
        color={colorPattle.secondaryColor}
        weight="bold"
        align="center"
      >
        Let me show you my different projects
      </TextTitle>
      <ProjectInfo>
        <SubtitleContainer>
          <IoIosRocket
            style={{ color: colorPattle.secondaryColor, fontSize: 30 }}
          />
          <TextSubtitle
            color={colorPattle.primaryColor}
            weight="bold"
            align="center"
          >
            My projects
          </TextSubtitle>
        </SubtitleContainer>
        <ProjectsNav />
      </ProjectInfo>
    </ProjectsContainer>
  );
};

export default Projects;
