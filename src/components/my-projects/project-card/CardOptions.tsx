import { TbListDetails } from "react-icons/tb";
import { IoEyeSharp } from "react-icons/io5";

import { ButtonWithLabel, ExternalLinkWithLabel } from "@components/index";

import { useThemeContext } from "@hooks/index";
import { ProjectCardOptionsProps } from "@models/ComponentsModels";

import { Options, getButtonsStyle } from "./ProjectCard.style";

const CardOptions = ({
  codeUrl,
  category,
}: ProjectCardOptionsProps): JSX.Element => {
  const { colorPattle, themeMode } = useThemeContext();

  return (
    <Options>
      <ButtonWithLabel
        label={"More Details"}
        style={getButtonsStyle(colorPattle, themeMode)[1]}
        title={"See more details"}
        onClick={() => console.log("")}
      >
        <TbListDetails style={{ color: "var(--white)", fontSize: 24 }} />
      </ButtonWithLabel>
      <ExternalLinkWithLabel
        label={category === "development" ? "See Code" : "See Design"}
        style={getButtonsStyle(colorPattle, themeMode)[0]}
        title={"See app code"}
        href={codeUrl}
      >
        <IoEyeSharp
          style={{
            color:
              themeMode === "light" ? "var(--white)" : colorPattle.primaryColor,
            fontSize: 24,
          }}
        />
      </ExternalLinkWithLabel>
    </Options>
  );
};

export default CardOptions;
