import { useThemeContext } from "@hooks/index";
import { ProjectBadgesProps } from "@models/ComponentsModels";

import { Badge } from "@components/index";

import { BadgesContainer } from "./ProjectCard.style";

const Badges = (props: ProjectBadgesProps): JSX.Element => {
  const { colorPattle } = useThemeContext();
  return (
    <BadgesContainer>
      <Badge
        text={props.category}
        style={{ bg: colorPattle.primaryColor, color: "var(--white)" }}
      />
      <Badge
        text={props.status}
        style={{
          bg: colorPattle.bgColor,
          color: colorPattle.secondaryColor,
        }}
      />
    </BadgesContainer>
  );
};

export default Badges;
