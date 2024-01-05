import { useState, useEffect, useCallback } from "react";

import { CarouselConfig } from "@models/DataModels";
import { useScreenSize } from "..";

const useCarousel = ({ shownSlidesNumber, slides }: CarouselConfig) => {
  const [shownSlides] = useState(shownSlidesNumber);
  const [indicatorsNumber, setIndicatorsNumber] = useState<number>(1);
  const [slidesHorizontalPosition, setSlidesHorizontalPosition] =
    useState<number>(1.875);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const screenSize = useScreenSize();

  const changeSlidesPosition = (
    finalPosition: number,
    activeIndex: number
  ): void => {
    setSlidesHorizontalPosition(() => {
      if (activeIndex == 0) return 1.875;
      return activeIndex * finalPosition - 0.9;
    });
  };

  const roundIndicatorNumber = useCallback(
    (shownSlides: number): void => {
      setIndicatorsNumber(Math.ceil(slides.length / shownSlides));
    },
    [slides]
  );

  const setCarouselIndicators = useCallback((): void => {
    if (screenSize < 600) roundIndicatorNumber(shownSlides.mobile);
    else if (screenSize >= 600 && screenSize <= 1400)
      roundIndicatorNumber(shownSlides.tablet);
    else roundIndicatorNumber(shownSlides.desktop);
  }, [roundIndicatorNumber, screenSize, shownSlides]);

  const toggleCarousel = (activeIndex: number): void => {
    if (indicatorsNumber > 1) {
      setCurrentSlideIndex(activeIndex);
      if (screenSize < 600)
        changeSlidesPosition(-11.25 * shownSlides.mobile, activeIndex);
      else if (screenSize >= 600 && screenSize <= 1400)
        changeSlidesPosition(-15.625 * shownSlides.tablet, activeIndex);
      else changeSlidesPosition(-15.625 * shownSlides.desktop, activeIndex);
    }
  };

  const next = (): void => {
    if (indicatorsNumber > 1 && currentSlideIndex < indicatorsNumber - 1) {
      toggleCarousel(currentSlideIndex + 1);
      return;
    }
    toggleCarousel(0);
  };

  const goBack = (): void => {
    if (
      indicatorsNumber > 1 &&
      currentSlideIndex <= indicatorsNumber - 1 &&
      currentSlideIndex !== 0
    ) {
      toggleCarousel(currentSlideIndex - 1);
      return;
    }
    toggleCarousel(indicatorsNumber - 1);
  };

  const resetCarousel = (): void => {
    setSlidesHorizontalPosition(1.875);
    setCurrentSlideIndex(0);
  };

  useEffect(() => {
    setCarouselIndicators();
  }, [setCarouselIndicators]);

  useEffect(() => {
    resetCarousel();
  }, [screenSize]);

  return {
    slidesHorizontalPosition,
    currentSlideIndex,
    indicatorsNumber,
    toggleCarousel,
    next,
    goBack,
  };
};

export default useCarousel;
