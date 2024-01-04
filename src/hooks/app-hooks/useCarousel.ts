import { useState, useEffect, useCallback } from "react";

import { CarouselConfig } from "@models/DataModels";
import { useScreenSize } from "..";

const useCarousel = <T>({ shownSlidesNumber, slides }: CarouselConfig) => {
  const [shownSlides] = useState(shownSlidesNumber);
  const [indicatorsNumber, setIndicatorsNumber] = useState<number>(0);
  const [carouselSlides, setCarouselSlides] = useState<T[]>(slides);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);
  const screenSize = useScreenSize();

  const sliceCarouselSlides = useCallback(
    (finalIndex: number): void =>
      setCarouselSlides(slides.slice(0, finalIndex)),
    [slides]
  );

  const roundIndicatorNumber = useCallback(
    (shownSlides: number): void => {
      setIndicatorsNumber(Math.ceil(slides.length / shownSlides));
    },
    [slides.length]
  );

  const configShownSlides = useCallback((): void => {
    if (screenSize < 600) sliceCarouselSlides(shownSlides.mobile);
    else if (screenSize >= 600 && screenSize <= 1400)
      sliceCarouselSlides(shownSlides.tablet);
    else sliceCarouselSlides(shownSlides.desktop);
  }, [screenSize, shownSlides, sliceCarouselSlides]);

  const setCarouselIndicators = useCallback((): void => {
    if (screenSize < 600) roundIndicatorNumber(shownSlides.mobile);
    else if (screenSize >= 600 && screenSize <= 1400)
      roundIndicatorNumber(shownSlides.tablet);
    else roundIndicatorNumber(shownSlides.desktop);
  }, [roundIndicatorNumber, screenSize, shownSlides]);

  const next = (): void => {
    setActiveSlideIndex((prevState) => prevState + 1);
    setCarouselSlides((prevState) => {
      if (indicatorsNumber > 1) {
        const newCarouselSlides = slides.slice(
          prevState.length,
          Math.ceil(slides.length / prevState.length)
        );
        return newCarouselSlides;
      }
      return prevState;
    });
  };

  useEffect(() => {
    configShownSlides();
  }, [configShownSlides]);

  useEffect(() => {
    setCarouselIndicators();
  }, [setCarouselIndicators]);

  return {
    carouselSlides,
    indicatorsNumber,
    activeSlideIndex,
    next,
  };
};

export default useCarousel;
