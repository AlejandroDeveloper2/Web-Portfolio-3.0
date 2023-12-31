import { useState, useEffect } from "react";

const useScreenSize = (): number => {
  const [screenSize, setScreenSize] = useState<number>(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", () => getCurrentScreenSize());
    return () =>
      window.removeEventListener("resize", () => getCurrentScreenSize());
  }, []);

  const getCurrentScreenSize = (): void => {
    setScreenSize(window.screen.width);
  };

  return screenSize;
};

export default useScreenSize;
