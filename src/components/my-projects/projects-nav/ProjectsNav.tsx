import { useScreenSize, useThemeContext } from "@hooks/index";
import { getProjectTaps } from "@mocks/projectTaps.data";
import usePortfolioStore from "@zustands/usePortfolioStore";
import { getProjectsQuantityPerCategory } from "@utils/index";

import { TapNav, Tap, TapLabel, ProjectIndicator } from "./ProjectsNav.style";
import { Text, TextSubtitle } from "@styles/GlobalStyles.style";

const ProjectsNav = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { allProjects, projectTap, toggleProjectTap } = usePortfolioStore();
  const screenSize = useScreenSize();

  const projectCounters = getProjectsQuantityPerCategory(allProjects);

  return (
    <TapNav>
      {getProjectTaps(projectCounters).map((tap, index) => (
        <Tap
          key={index}
          bg={colorPattle.primaryColor}
          active={String(projectTap === tap.category ? true : false)}
          onClick={toggleProjectTap}
        >
          <TapLabel>
            <tap.Icon
              style={{
                color: "var(--white)",
                fontSize: screenSize < 600 ? 24 : 40,
              }}
            />
            <Text color="var(--white)" weight="bold" align="center">
              {tap.label}
            </Text>
          </TapLabel>
          <ProjectIndicator>
            <TextSubtitle
              color={colorPattle.primaryColor}
              weight="bold"
              align="center"
            >
              {tap.projectsQuantity[`${tap.category}Counter`]}
            </TextSubtitle>
          </ProjectIndicator>
        </Tap>
      ))}
    </TapNav>
  );
};

export default ProjectsNav;
