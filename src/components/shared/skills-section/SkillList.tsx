import { useThemeContext } from "@hooks/index";
import { SkillListProps } from "@models/ComponentsModels";

import { ButtonBase } from "@components/index";

import { TextSubtitle } from "@styles/GlobalStyles.style";
import {
  SkillListContainer,
  List,
  getSkillBtnStyle,
} from "./SkillsSection.style";

const SkillList = (props: SkillListProps): JSX.Element => {
  const { listTitle, skillGroup } = props;
  const { colorPattle } = useThemeContext();

  return (
    <SkillListContainer bg={colorPattle.primaryColor}>
      <TextSubtitle color={colorPattle.primaryColor} weight="bold" align="left">
        <span style={{ color: colorPattle.secondaryColor }}>{"{ } "}</span>
        {listTitle}
      </TextSubtitle>
      <List>
        {skillGroup.map((skill, i) => (
          <li key={skill.id}>
            <ButtonBase
              style={getSkillBtnStyle(colorPattle, i)}
              title={skill.title}
              onClick={() => console.log(skill)}
            >
              {
                <skill.TechIcon
                  style={{
                    color: i % 2 === 0 ? "var(--white)" : colorPattle.bgColor,
                    fontSize: 30,
                  }}
                />
              }
            </ButtonBase>
          </li>
        ))}
      </List>
    </SkillListContainer>
  );
};

export default SkillList;
