import { motion } from "framer-motion";
import { BiSolidChevronDown } from "react-icons/bi";

import {
  useLanguageContext,
  useScreenSize,
  useThemeContext,
} from "@hooks/index";

import { ButtonBase, Presentation, Profile } from "@components/index";

import { PageContainer } from "@styles/GlobalStyles.style";

import { FirstFigure, SecondFigure } from "@assets/index";

const MainPage = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { language } = useLanguageContext();
  const screenSize = useScreenSize();

  return (
    <>
      {/* Home Section */}
      <PageContainer
        id="Home"
        className="section"
        style={{
          height:
            screenSize < 600 ? "calc(100vh - 6.25rem)" : "calc(100vh - 7.5rem)",
        }}
      >
        <FirstFigure />
        <SecondFigure />
        <Presentation />
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <ButtonBase
            style={{
              width: 100,
              height: 60,
              unit: "px",
              bg: colorPattle.bgColor,
            }}
            title={language === "es-MX" ? "Empezar a navegar" : "Start diving"}
            onClick={() => (window.location.href = "#About")}
          >
            <BiSolidChevronDown
              style={{ color: colorPattle.secondaryColor, fontSize: 30 }}
            />
          </ButtonBase>
        </motion.div>
      </PageContainer>
      {/* About Section */}
      <PageContainer id="About" className="section">
        <Profile />
      </PageContainer>

      {/* My Projects Section */}
      <PageContainer id="MyProjects" className="section">
        <h1>Mis proyectos</h1>
      </PageContainer>
    </>
  );
};

export default MainPage;
