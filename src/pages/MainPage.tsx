import { Suspense } from "react";
import { motion } from "framer-motion";
import { BiSolidChevronDown } from "react-icons/bi";

import { useLanguageContext, useThemeContext } from "@hooks/index";
import usePortfolioStore from "@zustands/usePortfolioStore";

import { ButtonBase, Presentation, Profile, Projects } from "@components/index";

import { PageContainer } from "@styles/GlobalStyles.style";

import { FirstFigure, ProjectIllustration, SecondFigure } from "@assets/index";

const MainPage = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { language } = useLanguageContext();
  const { projects } = usePortfolioStore();

  return (
    <>
      {/* Home Section */}
      <PageContainer id="Home" className="section">
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
        <ProjectIllustration />
        <Projects />
        <Suspense fallback={<h2>Cargando...</h2>}>
          {projects.map((project) => (
            <div key={project.id}>{project.name}</div>
          ))}
        </Suspense>
      </PageContainer>
    </>
  );
};

export default MainPage;
