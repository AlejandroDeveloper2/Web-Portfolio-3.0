import { FormattedMessage } from "react-intl";
import { MdWork } from "react-icons/md";

import { useThemeContext, useLanguageContext } from "@hooks/index";
import EnglishMessages from "@lang/english-messages.json";
import SpanishMessages from "@lang/spanish-messages.json";

import { ExperienceInfo } from "@components/index";

import {
  ExperienceArticle,
  ExperienceContainer,
  ArticleTitle,
} from "./Experiencie.style";
import { TextSubtitle } from "@styles/GlobalStyles.style";

const Experience = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { language } = useLanguageContext();

  return (
    <ExperienceContainer>
      <ArticleTitle>
        <MdWork style={{ color: colorPattle.secondaryColor }} />
        <TextSubtitle
          color={colorPattle.primaryColor}
          weight="bold"
          align="center"
        >
          <FormattedMessage
            id="about.experienceSubtitle"
            defaultMessage="My experience"
          />
        </TextSubtitle>
      </ArticleTitle>
      <ExperienceArticle bg={colorPattle.primaryColor}>
        <ExperienceInfo
          jobPosition={
            language === "en-US"
              ? EnglishMessages["about.experienceOneTitle"]
              : SpanishMessages["about.experienceOneTitle"]
          }
          description={
            language === "en-US"
              ? EnglishMessages["about.experienceOneDescription"]
              : SpanishMessages["about.experienceOneDescription"]
          }
          timeDuration={language === "en-US" ? "6 months" : "6 meses"}
          state={language === "en-US" ? "ended" : "finalizado"}
        />
        <ExperienceInfo
          jobPosition={
            language === "en-US"
              ? EnglishMessages["about.experienceTwoTitle"]
              : SpanishMessages["about.experienceTwoTitle"]
          }
          description={
            language === "en-US"
              ? EnglishMessages["about.experienceTwoDescription"]
              : SpanishMessages["about.experienceTwoDescription"]
          }
          timeDuration={language === "en-US" ? "6 months" : "6 meses"}
          state={language === "en-US" ? "ended" : "finalizado"}
        />
      </ExperienceArticle>
    </ExperienceContainer>
  );
};

export default Experience;
