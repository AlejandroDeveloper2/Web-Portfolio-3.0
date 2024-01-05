import { FormattedMessage } from "react-intl";

import { useThemeContext } from "@hooks/index";
import { NavItemProps } from "@models/ComponentsModels";
import { getActiveItemBg } from "@utils/index";

import { Li, StyledLink } from "./NavItem.style";
import { Text } from "@styles/GlobalStyles.style";

const NavItem = ({ item }: NavItemProps): JSX.Element => {
  const { to, label, Icon, langId } = item;
  const { colorPattle } = useThemeContext();
  const sectionName = window.history.state;

  return (
    <Li>
      <StyledLink href={to} bg={colorPattle.primaryColor}>
        <Icon
          style={{
            color: getActiveItemBg(to, colorPattle, sectionName),
            fontSize: 24,
            marginRight: 10,
          }}
        />
        <Text
          color={getActiveItemBg(to, colorPattle, sectionName)}
          weight="bold"
          align="center"
        >
          <FormattedMessage id={langId} defaultMessage={label} />
        </Text>
      </StyledLink>
    </Li>
  );
};

export default NavItem;
