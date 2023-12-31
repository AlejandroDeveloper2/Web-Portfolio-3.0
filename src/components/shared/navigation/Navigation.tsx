import { MdOutlineLanguage } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";

import {
  useLanguageContext,
  useLateralMenu,
  useThemeContext,
  useScreenSize,
  useStickyNavigation,
} from "@hooks/index";
import { MENU_ITEMS_LIST } from "@mocks/navLinks.data";

import {
  ButtonBase,
  ButtonWithLabel,
  LateralMobileMenu,
  Logo,
  NavItem,
  SingleLogo,
  ThemeModeControls,
} from "@components/index";

import {
  MobileButtonContainer,
  Nav,
  NavigationContainer,
  getLangBtnStyle,
  getShowMenuBtnStyle,
  relativeNavStyle,
  setStickyNavStyle,
} from "./Navigation.style";

const Navigation = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { isVisible, toggleMenu } = useLateralMenu();
  const { toggleAppLanguage, language } = useLanguageContext();
  const { navRef, isSticky } = useStickyNavigation();
  const screenSize = useScreenSize();

  return (
    <>
      <LateralMobileMenu isVisible={isVisible} toggleMenu={toggleMenu} />
      <NavigationContainer
        bg={colorPattle.bgColor}
        ref={navRef}
        style={isSticky ? setStickyNavStyle() : relativeNavStyle}
      >
        <ThemeModeControls isMobileScreen={false} />
        <Nav>
          {MENU_ITEMS_LIST.slice(0, 2).map((item, i) => (
            <NavItem key={i} item={item} />
          ))}
        </Nav>
        <MobileButtonContainer>
          <ButtonBase
            style={getShowMenuBtnStyle()}
            title={
              language === "en-US"
                ? "Show menu options"
                : "Mostrar menú de opciones"
            }
            onClick={() => toggleMenu()}
          >
            <CgMenuGridR
              style={{ color: colorPattle.secondaryColor, fontSize: 30 }}
            />
          </ButtonBase>
        </MobileButtonContainer>
        {screenSize < 600 ? <SingleLogo /> : <Logo />}
        <Nav>
          {MENU_ITEMS_LIST.slice(2, 4).map((item, i) => (
            <NavItem key={i} item={item} />
          ))}
        </Nav>
        <ButtonWithLabel
          style={getLangBtnStyle(colorPattle)}
          title={language === "en-US" ? "Change language" : "Cambiar idioma"}
          label={language === "en-US" ? "En" : "Es"}
          onClick={() => toggleAppLanguage()}
        >
          <MdOutlineLanguage style={{ color: "var(--white)", fontSize: 24 }} />
        </ButtonWithLabel>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
