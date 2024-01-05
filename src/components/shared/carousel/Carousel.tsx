import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { CarouselProps } from "@models/ComponentsModels";
import { useScreenSize, useThemeContext } from "@hooks/index";

import { ButtonBase } from "@components/index";

import {
  CarouselContainer,
  Slides,
  CarouselIndicators,
  Indicator,
  CarouselControls,
} from "./Carousel.style";

const Carousel = (props: CarouselProps): JSX.Element => {
  const {
    children,
    indicatorsNumber,
    slidesHorizontalPosition,
    currentSlideIndex,
    toggleCarousel,
    next,
    goBack,
  } = props;
  const { colorPattle } = useThemeContext();
  const screenSize = useScreenSize();

  return (
    <CarouselContainer bg={colorPattle.primaryColor}>
      <Slides left={slidesHorizontalPosition}>{children}</Slides>
      <CarouselControls>
        <ButtonBase
          style={{
            bg: colorPattle.primaryColor,
            width: screenSize < 600 ? 40 : 50,
            height: screenSize < 600 ? 40 : 50,
            unit: "px",
          }}
          title=""
          onClick={goBack}
        >
          <IoIosArrowBack
            style={{
              color: "var(--white)",
              fontSize: screenSize < 600 ? 24 : 30,
            }}
          />
        </ButtonBase>
        <CarouselIndicators>
          {Array(indicatorsNumber)
            .fill(".")
            .map((_, i) => (
              <Indicator
                key={i}
                active={currentSlideIndex === i ? true : false}
                bg={colorPattle.secondaryColor}
                onClick={() => toggleCarousel(i)}
              />
            ))}
        </CarouselIndicators>
        <ButtonBase
          style={{
            bg: colorPattle.primaryColor,
            width: screenSize < 600 ? 40 : 50,
            height: screenSize < 600 ? 40 : 50,
            unit: "px",
          }}
          title=""
          onClick={next}
        >
          <IoIosArrowForward
            style={{
              color: "var(--white)",
              fontSize: screenSize < 600 ? 24 : 30,
            }}
          />
        </ButtonBase>
      </CarouselControls>
    </CarouselContainer>
  );
};

export default Carousel;
