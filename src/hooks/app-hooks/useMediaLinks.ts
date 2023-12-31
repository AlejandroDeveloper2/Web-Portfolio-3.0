import { useState } from "react";

const useMediaLinks = () => {
  const [isMediaVisible, setIsMediaVisible] = useState<boolean>(false);

  const toggleMediaLinks = (): void => {
    setIsMediaVisible(!isMediaVisible);
  };

  return {
    isMediaVisible,
    toggleMediaLinks,
  };
};
export default useMediaLinks;
