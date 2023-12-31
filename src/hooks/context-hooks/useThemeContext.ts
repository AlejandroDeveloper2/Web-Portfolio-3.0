import { useContext } from "react";

import ThemeContext from "@context/ThemeProvider";
import { ThemeContextModel } from "@models/ContextModels";

const useThemeContext = (): ThemeContextModel => {
  return useContext(ThemeContext);
};
export default useThemeContext;
