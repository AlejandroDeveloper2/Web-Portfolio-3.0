import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useLanguageContext, useThemeContext } from "@hooks/index";
import { ThemeControlsProps } from "@models/ComponentsModels";

import { ButtonBase } from "@components/index";

import { ThemeControls, getThemeBtnStyle } from "./ThemeModeControls.style";
import { getActiveButtonBg } from "@utils/index";

const ThemeModeControls = ({
  isMobileScreen,
}: ThemeControlsProps): JSX.Element => {
  const { themeMode, colorPattle, toggleThemeMode } = useThemeContext();
  const { language } = useLanguageContext();

  return (
    <ThemeControls is_mobile_screen={String(isMobileScreen)}>
      <ButtonBase
        style={getThemeBtnStyle(() =>
          getActiveButtonBg(themeMode, "dark", colorPattle)
        )}
        title={language === "en-US" ? "Dark mode" : "Modo oscuro"}
        onClick={() => toggleThemeMode("dark")}
      >
        <MdDarkMode
          style={{
            color: getActiveButtonBg(themeMode, "dark", colorPattle).color,
            fontSize: 30,
          }}
        />
      </ButtonBase>
      <ButtonBase
        style={getThemeBtnStyle(() =>
          getActiveButtonBg(themeMode, "light", colorPattle)
        )}
        title={language === "en-US" ? "Light mode" : "Modo claro"}
        onClick={() => toggleThemeMode("light")}
      >
        <MdLightMode
          style={{
            color: getActiveButtonBg(themeMode, "light", colorPattle).color,
            fontSize: 30,
          }}
        />
      </ButtonBase>
    </ThemeControls>
  );
};

export default ThemeModeControls;
