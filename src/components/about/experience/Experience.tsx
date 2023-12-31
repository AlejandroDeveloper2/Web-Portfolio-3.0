import { MdWork } from "react-icons/md";

import { useThemeContext } from "@hooks/index";

import { ExperienceInfo } from "@components/index";

import {
  ExperienceArticle,
  ExperienceContainer,
  ArticleTitle,
} from "./Experiencie.style";
import { TextSubtitle } from "@styles/GlobalStyles.style";

const Experience = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  return (
    <ExperienceContainer>
      <ArticleTitle>
        <MdWork style={{ color: colorPattle.secondaryColor }} />
        <TextSubtitle
          color={colorPattle.primaryColor}
          weight="bold"
          align="center"
        >
          My Experience
        </TextSubtitle>
      </ArticleTitle>
      <ExperienceArticle bg={colorPattle.primaryColor}>
        <ExperienceInfo
          jobPosition="Front - end developer"
          description="I worked in this project as a freelancer front-end developer for individual clients during 6 months in 2023. I collaborated with a working team that was composed of 3 persons a product owner, backend developer and me. It was about an electronic bingo game application."
          timeDuration=" 6 months"
          state="ended"
        />
        <ExperienceInfo
          jobPosition="Front - end developer and UI/UX designer"
          description="I developed this project as a software engineer student for getting my degree in engineering. This project lasted 6 months. I collaborated with a development team that was composed of 4 persons two project directors, and two developers. It was about a mobile app for android system to make easier the production’s costs and expenses management of coffee crops for coffee growers in Rosas Cauca Colombia town."
          timeDuration=" 6 months"
          state="ended"
        />
      </ExperienceArticle>
    </ExperienceContainer>
  );
};

export default Experience;
