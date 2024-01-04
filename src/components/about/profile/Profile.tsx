import { FormattedMessage } from "react-intl";

import { useThemeContext } from "@hooks/index";
import { featuredSkills } from "@mocks/skills.data";

import {
  Experience,
  ProffesionalInfo,
  SkillList,
  SkillsSection,
  Studies,
} from "@components/index";

import { TextTitle } from "@styles/GlobalStyles.style";
import { ProfileContainer, ProfileRow } from "./Profile.style";

const Profile = (): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <ProfileContainer>
      <TextTitle
        color={colorPattle.secondaryColor}
        weight="bold"
        align="center"
      >
        <FormattedMessage
          id="about.title"
          defaultMessage="Let’s know a little more about me"
        />
      </TextTitle>
      <ProfileRow>
        <ProffesionalInfo />
        <SkillsSection>
          <SkillList listTitle="My tech skills" skillGroup={featuredSkills} />
        </SkillsSection>
      </ProfileRow>
      <Experience />
      <Studies />
    </ProfileContainer>
  );
};

export default Profile;
