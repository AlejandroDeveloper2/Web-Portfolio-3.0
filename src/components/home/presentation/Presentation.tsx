import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { IoMdDownload } from "react-icons/io";

import { useLanguageContext, useThemeContext } from "@hooks/index";

import { ButtonWithLabel, ProfilePhoto, Proffession } from "@components/index";

import {
  Illustration,
  PresentationContainer,
  PresentationInfo,
  getCvButtonStyle,
} from "./Presentation.style";
import { TextMega } from "@styles/GlobalStyles.style";

import { FigureSkillsDark, FigureSkillsLight } from "@assets/index";

const Presentation = (): JSX.Element => {
  const { colorPattle, themeMode } = useThemeContext();
  const { language } = useLanguageContext();

  return (
    <PresentationContainer>
      <ProfilePhoto />
      <PresentationInfo>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <TextMega
            color={colorPattle.secondaryColor}
            weight="bold"
            align="center"
          >
            <FormattedMessage
              id="home.presentationName"
              defaultMessage="{ Hello I'm Diego Alejandro Diaz Bonilla }"
            />
          </TextMega>
        </motion.div>
        <Proffession />
        <ButtonWithLabel
          label={language === "en-US" ? "Download CV" : "Descargar CV"}
          style={getCvButtonStyle(colorPattle)}
          title={language === "en-US" ? "Download CV" : "Descargar CV"}
          onClick={() => console.log("Download")}
        >
          <IoMdDownload style={{ color: "var(--white)", fontSize: 30 }} />
        </ButtonWithLabel>
      </PresentationInfo>
      <Illustration
        src={themeMode === "dark" ? FigureSkillsDark : FigureSkillsLight}
        alt="Illustration"
        loading="lazy"
      />
    </PresentationContainer>
  );
};

export default Presentation;
