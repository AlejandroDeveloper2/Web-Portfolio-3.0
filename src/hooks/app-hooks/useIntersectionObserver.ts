import { useState, useEffect, useRef } from "react";

import { useScreenSize } from "..";

const useIntersectionObserver = () => {
  const [sectionName, setSectionName] = useState<string>("#Home");
  const sectionsRef = useRef<HTMLElement>(null);
  const screenSize = useScreenSize();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(
            getSectionName(entry.target.id),
            "",
            getSectionName(entry.target.id)
          );
          setSectionName(window.history.state);
        }
      });
    },
    {
      rootMargin: `${screenSize < 600 ? "-100px" : "-120px"} 0px 0px 0px`,
      threshold: screenSize < 600 ? 0.3 : 0.4,
    }
  );
  const sections = sectionsRef.current?.querySelectorAll(".section");

  const observeSection = (): void => {
    sections?.forEach((section) => observer.observe(section));
  };

  const unobserveSection = (): void => {
    sections?.forEach((section) => observer.unobserve(section));
  };

  useEffect(() => {
    observeSection();
    return () => unobserveSection();
  });

  const getSectionName = (sectionId: string): string => {
    const sectionName: string =
      sectionId === "Home"
        ? "#Home"
        : sectionId === "About"
        ? "#About"
        : "#MyProjects";
    return sectionName;
  };

  return { sectionsRef, sectionName };
};

export default useIntersectionObserver;
