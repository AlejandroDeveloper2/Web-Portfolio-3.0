import { useState } from "react";

const useLateralMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsVisible(!isVisible);
  };

  return {
    isVisible,
    toggleMenu,
  };
};
export default useLateralMenu;
