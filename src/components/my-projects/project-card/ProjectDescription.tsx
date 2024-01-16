import { useThemeContext } from "@hooks/index";

import { ProjectDescriptionProps } from "@models/ComponentsModels";

import { Description } from "./ProjectCard.style";
import { TextSubtitle, Text } from "@styles/GlobalStyles.style";

const ProjectDescription = ({
  description,
}: ProjectDescriptionProps): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <Description>
      <TextSubtitle
        color={colorPattle.secondaryColor}
        weight="bold"
        align="left"
      >
        Description:
      </TextSubtitle>
      <Text color={colorPattle.secondaryColor} weight="normal" align="left">
        {description}
      </Text>
    </Description>
  );
};

export default ProjectDescription;
