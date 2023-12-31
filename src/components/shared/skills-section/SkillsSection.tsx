import { SkillsSectionContainer } from "./SkillsSection.style";

import { SkillSectionProps } from "@models/ComponentsModels";

// import { FigureSkillsLight, FigureSkillsDark } from "@assets/index";

const SkillsSection = ({ children }: SkillSectionProps): JSX.Element => {
  return (
    <SkillsSectionContainer>
      {children}
      {/* <FigureContainer>
        <Image
          src={themeMode === "light" ? FigureSkillsLight : FigureSkillsDark}
          alt="Featured skill DiegoDev"
          loading="lazy"
        />
      </FigureContainer> */}
    </SkillsSectionContainer>
  );
};

export default SkillsSection;
