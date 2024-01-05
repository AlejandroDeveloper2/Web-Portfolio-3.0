import { FormattedMessage } from "react-intl";
import { GiGraduateCap } from "react-icons/gi";
import { GrView } from "react-icons/gr";

import { StudyCardProps } from "@models/ComponentsModels";
import {
  useLanguageContext,
  useScreenSize,
  useThemeContext,
} from "@hooks/index";

import { Badge, BaseExternalLink } from "@components/index";

import { StudyCardContainer } from "./StudyCard.style";
import { Text, TextCaption } from "@styles/GlobalStyles.style";

const StudyCard = (props: StudyCardProps): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { language } = useLanguageContext();
  const screenSize = useScreenSize();
  const { degreeTitle, timeSpan, status, degreeImageUrl } = props;

  return (
    <StudyCardContainer bg={colorPattle.primaryColor}>
      <Badge
        text={status}
        style={{
          bg: colorPattle.secondaryColor,
          color: colorPattle.primaryColor,
        }}
      />
      <GiGraduateCap
        style={{
          color: colorPattle.secondaryColor,
          fontSize: screenSize > 600 ? 55 : 40,
        }}
      />
      <Text color={colorPattle.secondaryColor} weight="normal" align="center">
        {degreeTitle}
      </Text>
      <TextCaption
        color={colorPattle.secondaryColor}
        weight="normal"
        align="center"
      >
        {timeSpan}
      </TextCaption>
      <BaseExternalLink
        style={{
          width: screenSize > 600 ? 200 : 100,
          height: screenSize > 600 ? 60 : 40,
          unit: "px",
          bg: colorPattle.primaryColor,
        }}
        title={language === "en-US" ? "See certificate" : "Ver certificado"}
        href={degreeImageUrl}
      >
        <GrView style={{ color: "var(--white)", fontSize: 24 }} />
        {screenSize > 600 ? (
          <Text color="var(--white)" weight="bold" align="center">
            <FormattedMessage
              id="about.certificateButtonLabel"
              defaultMessage="See Certificate"
            />
          </Text>
        ) : null}
      </BaseExternalLink>
    </StudyCardContainer>
  );
};

export default StudyCard;
