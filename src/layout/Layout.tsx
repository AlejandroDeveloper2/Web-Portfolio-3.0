import { Outlet, useLocation } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { BiSolidChevronUp } from "react-icons/bi";

import {
  useIntersectionObserver,
  useLanguageContext,
  useScreenSize,
  useThemeContext,
} from "@hooks/index";

import {
  ButtonBase,
  MediaLinks,
  Navigation,
  ParticlesBg,
} from "@components/index";

import {
  MainContainer,
  FloatButtonContainer,
} from "@styles/GlobalStyles.style";

const Layout = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { language, appMessages } = useLanguageContext();
  const sectionsRef = useIntersectionObserver();
  const screenSize = useScreenSize();
  const location = useLocation();

  return (
    <IntlProvider
      messages={appMessages}
      locale={language}
      defaultLocale="en-US"
    >
      <MainContainer bg={colorPattle.background} ref={sectionsRef}>
        <Navigation />
        <ParticlesBg />
        <MediaLinks />
        <Outlet />
        {location.hash === "#Home" ? null : (
          <FloatButtonContainer>
            <ButtonBase
              style={{
                width: screenSize < 600 ? 50 : 100,
                height: screenSize < 600 ? 50 : 60,
                unit: "px",
                bg: colorPattle.secondaryColor,
              }}
              title={language === "es-MX" ? "Ir al inicio" : "Go home"}
              onClick={() => (window.location.href = "#Home")}
            >
              <BiSolidChevronUp
                style={{
                  color: colorPattle.gray,
                  fontSize: screenSize < 600 ? 24 : 30,
                }}
              />
            </ButtonBase>
          </FloatButtonContainer>
        )}
      </MainContainer>
    </IntlProvider>
  );
};

export default Layout;
