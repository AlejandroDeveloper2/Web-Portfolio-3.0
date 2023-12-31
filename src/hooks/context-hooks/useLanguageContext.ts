import { useContext } from "react";

import LanguageContext from "@context/LanguageProvider";

import { LanguageContextModel } from "@models/ContextModels";

const useLanguageContext = (): LanguageContextModel => {
  return useContext(LanguageContext);
};
export default useLanguageContext;
