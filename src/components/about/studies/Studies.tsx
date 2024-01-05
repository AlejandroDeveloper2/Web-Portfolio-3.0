import { GiGraduateCap } from "react-icons/gi";

import { useCarousel, useThemeContext } from "@hooks/index";
import { studiesInfo } from "@mocks/studiesData.data";

import { Carousel, StudyCard } from "@components/index";

import { StudiesSection, SectionTitle } from "./Studies.style";
import { TextSubtitle } from "@styles/GlobalStyles.style";

const Studies = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const carouselData = useCarousel({
    shownSlidesNumber: { desktop: 4, tablet: 2, mobile: 1 },
    slides: studiesInfo,
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
          My studies and courses
        </TextSubtitle>
      </SectionTitle>
      <Carousel {...carouselData}>
        {studiesInfo.map((item, i) => (
          <StudyCard key={i} {...item} />
        ))}
      </Carousel>
    </StudiesSection>
  );
};

export default Studies;
