import { FormattedMessage } from "react-intl";
import { GiGraduateCap } from "react-icons/gi";

import { useCarousel, useLanguageContext, useThemeContext } from "@hooks/index";
import {
  studiesListEnglish,
  studiesListSpanish,
} from "@mocks/studiesData.data";

import { Carousel, StudyCard } from "@components/index";

import { StudiesSection, SectionTitle } from "./Studies.style";
import { TextSubtitle } from "@styles/GlobalStyles.style";

const Studies = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { language } = useLanguageContext();
  const slides = language === "en-US" ? studiesListEnglish : studiesListSpanish;
  const carouselData = useCarousel({
    shownSlidesNumber: { desktop: 4, tablet: 2, mobile: 1 },
    slides,
  });

  return (
    <StudiesSection>
      <SectionTitle>
        <GiGraduateCap style={{ color: colorPattle.secondaryColor }} />
        <TextSubtitle
          color={colorPattle.primaryColor}
          weight="bold"
          align="center"
        >
          <FormattedMessage
            id="about.studiesTitle"
            defaultMessage="My studies and courses"
          />
        </TextSubtitle>
      </SectionTitle>
      <Carousel {...carouselData}>
        {slides.map((item, i) => (
          <StudyCard key={i} {...item} />
        ))}
      </Carousel>
    </StudiesSection>
  );
};

export default Studies;
