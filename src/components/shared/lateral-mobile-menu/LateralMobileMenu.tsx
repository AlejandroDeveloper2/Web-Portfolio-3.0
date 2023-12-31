import { HiMiniXMark } from "react-icons/hi2";
import { FormattedMessage } from "react-intl";

import { useLanguageContext, useThemeContext } from "@hooks/index";
import { LateralMenuProps } from "@models/ComponentsModels";
import { MENU_ITEMS_LIST } from "@mocks/navLinks.data";

import {
  ButtonBase,
  NavItem,
  SingleLogo,
  ThemeModeControls,
} from "@components/index";

import {
  LateralMenuContainer,
  MobileNav,
  CloseButtonContainer,
  MobileMenuFooter,
  getMenuBtnStyle,
} from "./LateralMobileMenu.style";
import { Text } from "@styles/GlobalStyles.style";

const LateralMobileMenu = (props: LateralMenuProps): JSX.Element => {
  const { isVisible, toggleMenu } = props;
  const { colorPattle } = useThemeContext();
  const { language } = useLanguageContext();

  return (
    <LateralMenuContainer bg={colorPattle.bgColor} visible={String(isVisible)}>
      <CloseButtonContainer>
        <ButtonBase
          style={getMenuBtnStyle()}
          title={language === "en-US" ? "Close menu" : "Cerrar menú"}
          onClick={() => toggleMenu()}
        >
          <HiMiniXMark
            style={{ color: colorPattle.secondaryColor, fontSize: 30 }}
          />
        </ButtonBase>
      </CloseButtonContainer>
      <SingleLogo />
      <MobileNav>
        {MENU_ITEMS_LIST.map((item, i) => (
          <NavItem key={i} item={item} />
        ))}
      </MobileNav>
      <MobileMenuFooter>
        <ThemeModeControls isMobileScreen={true} />
        <Text color={colorPattle.secondaryColor} weight={500} align="center">
          <FormattedMessage id="app.versionLabel" defaultMessage="Version" />{" "}
          1.0.0
        </Text>
      </MobileMenuFooter>
    </LateralMenuContainer>
  );
};

export default LateralMobileMenu;
