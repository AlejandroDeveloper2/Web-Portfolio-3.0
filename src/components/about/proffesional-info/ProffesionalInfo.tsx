import { FormattedMessage } from "react-intl";

import { useThemeContext } from "@hooks/index";

import { ProfileInfoContainer } from "./ProffesionalInfo.style";
import { Text, TextSubtitle } from "@styles/GlobalStyles.style";

const ProffesionalInfo = (): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <ProfileInfoContainer bg={colorPattle.primaryColor}>
      <TextSubtitle color={colorPattle.primaryColor} weight="bold" align="left">
        <FormattedMessage id="about.subtitle" defaultMessage="About me" />
      </TextSubtitle>
      <Text color={colorPattle.secondaryColor} weight="normal" align="left">
        <FormattedMessage
          id="about.profile-1"
          defaultMessage="I’m a front-end developer and an UI/UX design lover. For front-end development I have experience developing personal, academic projects and projects as a freelancer in certain technologies such as React + TypeScript, React native and much more. For UI design I have experience with Figma tool."
        />
      </Text>
      <Text color={colorPattle.secondaryColor} weight="normal" align="left">
        <FormattedMessage
          id="about.profile-2"
          defaultMessage="Finally, to describe myself I’m a self-learner and I like learning new things every day to keep growing both personally and professionally as well as to keep up with new emerging technologies."
        />
      </Text>
    </ProfileInfoContainer>
  );
};

export default ProffesionalInfo;
