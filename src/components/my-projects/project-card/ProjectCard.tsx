import { MdOutlineSmartphone } from "react-icons/md";

import { ProjectCardProps } from "@models/ComponentsModels";

import { useThemeContext } from "@hooks/index";

import {
  BadgeIconOnly,
  Badges,
  CardOptions,
  ProjectDescription,
} from "@components/index";

import {
  ProjectCardContainer,
  ProjectPresentation,
  ProjectTitle,
} from "./ProjectCard.style";
import { Image, TextSubtitle } from "@styles/GlobalStyles.style";

const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const { colorPattle, themeMode } = useThemeContext();

  return (
    <ProjectCardContainer bg={colorPattle.primaryColor}>
      <ProjectPresentation>
        <Badges category={props.category} status={props.status} />
        <Image
          loading="lazy"
          src={`http://127.0.0.1:8090/api/files/projects/${props.id}/${props.presentationImage}`}
          alt={`${props.name}-thumbail`}
        />
        <ProjectTitle bg={colorPattle.secondaryColor}>
          <BadgeIconOnly
            Icon={MdOutlineSmartphone}
            style={{ bg: colorPattle.primaryColor, color: "var(--white)" }}
          />
          <TextSubtitle
            color={
              themeMode === "dark" ? colorPattle.primaryColor : "var(--white)"
            }
            weight="bold"
            align="center"
          >
            {props.name}
          </TextSubtitle>
        </ProjectTitle>
      </ProjectPresentation>
      <ProjectDescription description={props.description} />
      <CardOptions codeUrl={props.designUrl} category={props.category} />
    </ProjectCardContainer>
  );
};

export default ProjectCard;
