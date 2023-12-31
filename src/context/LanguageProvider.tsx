import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { MessageFormatElement } from "react-intl";

import { ContextProps, LanguageContextModel } from "@models/ContextModels";
import { LanguageTag } from "@models/DataModels";

import englishMessages from "@lang/english-messages.json";
import spanishMessages from "@lang/spanish-messages.json";
import { useLocalstorage } from "@hooks/index";

const LanguageContext = createContext<LanguageContextModel>(
  {} as LanguageContextModel
);

const LanguageProvider = ({ children }: ContextProps): JSX.Element => {
  const { lsValue: langLS, setLsValue: setLangLS } =
    useLocalstorage<LanguageTag>("lang", "en-US");

  const [language, setLanguage] = useState<LanguageTag>(langLS as LanguageTag);
  const [appMessages, setAppMessages] = useState<
    Record<string, string> | Record<string, MessageFormatElement[]>
  >(() => {
    if (langLS) {
      const defaultLang =
        langLS === "en-US" ? englishMessages : spanishMessages;
      return defaultLang;
    }
    return englishMessages;
  });

  const toggleAppLanguage = useCallback((): void => {
    if (language === "en-US") {
      setLanguage("es-MX");
      setLangLS("es-MX");
      return;
    }
    setLanguage("en-US");
    setLangLS("en-US");
  }, [language, setLangLS]);

  const setLanguageMessages = useCallback((): void => {
    const languageMessages =
      language === "en-US" ? englishMessages : spanishMessages;
    setAppMessages(languageMessages);
  }, [language]);

  useEffect(() => {
    setLanguageMessages();
  }, [language, setLanguageMessages]);

  const value = useMemo(
    () => ({
      language,
      appMessages,
      toggleAppLanguage,
    }),
    [language, appMessages, toggleAppLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
