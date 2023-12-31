import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaClock } from "react-icons/fa";

import { useThemeContext } from "@hooks/index";

import { Badge } from "@components/index";

import { Text, TextSubtitle } from "@styles/GlobalStyles.style";
import {
  InfoContainer,
  InfoHeader,
  InfoTitle,
  InfoTime,
} from "./ExperienceInfo.style";
import { ExperienceInfoProps } from "@models/ComponentsModels";

const ExperienceInfo = (props: ExperienceInfoProps): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { jobPosition, description, timeDuration, state } = props;

  return (
    <InfoContainer>
      <InfoHeader>
        <InfoTitle>
          <AiFillSafetyCertificate
            style={{ color: colorPattle.secondaryColor }}
          />
          <TextSubtitle
            color={colorPattle.secondaryColor}
            weight="bold"
            align="center"
          >
            {jobPosition}
          </TextSubtitle>
        </InfoTitle>
        <InfoTime>
          <FaClock style={{ color: colorPattle.secondaryColor }} />
          <Text
            color={colorPattle.secondaryColor}
            weight="normal"
            align="center"
          >
            {timeDuration}
          </Text>
        </InfoTime>
      </InfoHeader>
      <Text color={colorPattle.secondaryColor} weight="normal" align="left">
        {description}
      </Text>
      <Badge
        style={{
          bg: colorPattle.primaryColor,
          color: "var(--white)",
        }}
        text={state}
      />
    </InfoContainer>
  );
};

export default ExperienceInfo;
