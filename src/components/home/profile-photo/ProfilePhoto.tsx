import { useThemeContext } from "@hooks/index";

import { Image } from "@styles/GlobalStyles.style";
import {
  PhotoContainer,
  PhotoFirstLayer,
  PhotoLastLayer,
  PhotoMainContainer,
} from "./ProfilePhoto.style";

import { ProfilePhoto as ProfileImg } from "@assets/index";

const ProfilePhoto = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  return (
    <PhotoMainContainer>
      <PhotoLastLayer
        bg={colorPattle.primaryColor}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></PhotoLastLayer>
      <PhotoFirstLayer bg={colorPattle.primaryColor}>
        <PhotoContainer bg={colorPattle.bgColor}>
          <Image src={ProfileImg} alt="Profile Photo DiegoDev" loading="lazy" />
        </PhotoContainer>
      </PhotoFirstLayer>
    </PhotoMainContainer>
  );
};

export default ProfilePhoto;
