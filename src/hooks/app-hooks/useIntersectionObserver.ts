import { useEffect, useRef } from "react";

const useIntersectionObserver = () => {
  const sectionsRef = useRef<HTMLElement>(null);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.location.assign(getSectionName(entry.target.id));
        }
      });
    },
    { rootMargin: "-120px 0px 0px 0px", threshold: 0.4 }
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

  return sectionsRef;
};

export default useIntersectionObserver;
