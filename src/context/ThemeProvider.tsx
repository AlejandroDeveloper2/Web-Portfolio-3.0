import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import {
  ColorPattle,
  ContextProps,
  ThemeContextModel,
} from "@models/ContextModels";
import { Theme } from "@models/StyledComponentsModels";

import { useLocalstorage } from "@hooks/index";

const ThemeContext = createContext<ThemeContextModel>({} as ThemeContextModel);
//last gray color #F9EAEA
const DEFAULT_COLOR_PATTLE: ColorPattle = {
  primaryColor: "#2C65F8",
  bgColor: "#fff",
  gray: "#DFD8D8",
  secondaryColor: "#333437",
  background: `linear-gradient(-90deg, #97B3FA 0%, #DFD8D8 70%);`,
};

const ThemeProvider = ({ children }: ContextProps): JSX.Element => {
  const { lsValue: themeLS, setLsValue: setThemeLS } = useLocalstorage<Theme>(
    "theme",
    "dark"
  );

  const [themeMode, setThemeMode] = useState<Theme>(themeLS as Theme);
  const [colorPattle, setColorPattle] =
    useState<ColorPattle>(DEFAULT_COLOR_PATTLE);

  useEffect(() => {
    setThemeLS(themeMode);
  }, [setThemeLS, themeMode]);

  const toggleThemeMode = useCallback((mode: Theme): void => {
    setThemeMode(mode);
  }, []);

  const getColorPattle = useCallback((): void => {
    const colorAppPattle: ColorPattle =
      themeMode === "light"
        ? DEFAULT_COLOR_PATTLE
        : {
            primaryColor: "#707EFA",
            bgColor: "#27282B",
            gray: "#333437",
            secondaryColor: "#fff",
            background:
              "linear-gradient(-90deg, rgba(112,126,250,0.3) 0%, #333437 65.1%)",
          };
    setColorPattle(colorAppPattle);
  }, [themeMode]);

  useEffect(() => {
    getColorPattle();
  }, [getColorPattle, themeMode]);

  const value = useMemo(
    () => ({
      themeMode,
      colorPattle,
      toggleThemeMode,
      getColorPattle,
    }),
    [themeMode, colorPattle, toggleThemeMode, getColorPattle]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
