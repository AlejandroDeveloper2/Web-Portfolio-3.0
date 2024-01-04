import { CarouselProps } from "@models/ComponentsModels";
import { useThemeContext } from "@hooks/index";

import {
  CarouselContainer,
  CarouselIndicators,
  Indicator,
} from "./Carousel.style";

const Carousel = ({
  children,
  indicatorsNumber,
  next,
}: CarouselProps): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <CarouselContainer bg={colorPattle.primaryColor}>
      {children}
      <CarouselIndicators>
        {Array(indicatorsNumber)
          .fill(".")
          .map((_, i) => (
            <Indicator
              key={i}
              active={false}
              bg={colorPattle.secondaryColor}
              onClick={next}
            />
          ))}
      </CarouselIndicators>
    </CarouselContainer>
  );
};

export default Carousel;
