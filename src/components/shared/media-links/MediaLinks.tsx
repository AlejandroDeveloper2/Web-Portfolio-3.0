import { HiCode } from "react-icons/hi";
import { TiCode } from "react-icons/ti";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import {
  useLanguageContext,
  useMediaLinks,
  useScreenSize,
  useThemeContext,
} from "@hooks/index";
import { mediaLinks } from "@mocks/mediaLinks.data";

import { BaseExternalLink, ButtonBase } from "@components/index";

import {
  MediaLinksContainer,
  ToggleContainer,
  getSocialMediaBtnStyle,
} from "./MediaLinks.style";

const MediaLinks = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  const { language } = useLanguageContext();
  const { isMediaVisible, toggleMediaLinks } = useMediaLinks();
  const screenSize = useScreenSize();

  return (
    <MediaLinksContainer
      bg={colorPattle.bgColor}
      visible={String(isMediaVisible)}
    >
      <ToggleContainer>
        <ButtonBase
          style={getSocialMediaBtnStyle(colorPattle, screenSize)}
          title={
            language === "es-MX"
              ? "Mostrar links de contacto"
              : "Show contact links"
          }
          onClick={toggleMediaLinks}
        >
          {isMediaVisible ? (
            <BiChevronLeft
              style={{
                color: colorPattle.secondaryColor,
                fontSize: screenSize < 600 ? 24 : 30,
              }}
            />
          ) : (
            <BiChevronRight
              style={{
                color: colorPattle.secondaryColor,
                fontSize: screenSize < 600 ? 24 : 30,
              }}
            />
          )}
        </ButtonBase>
      </ToggleContainer>
      <HiCode
        style={{
          color: colorPattle.primaryColor,
          fontSize: screenSize < 600 ? 24 : 30,
        }}
      />
      <ul>
        {mediaLinks.map((mediaLink, i) => (
          <li key={i}>
            <BaseExternalLink
              style={{
                ...mediaLink.style,
                bg: colorPattle.gray,
                width: screenSize < 600 ? 35 : 60,
                height: screenSize < 600 ? 35 : 60,
              }}
              title={mediaLink.title}
              href={mediaLink.href}
            >
              <mediaLink.Icon
                style={{
                  color: colorPattle.secondaryColor,
                  fontSize: screenSize < 600 ? 24 : 30,
                }}
              />
            </BaseExternalLink>
          </li>
        ))}
      </ul>
      <TiCode
        style={{
          color: colorPattle.secondaryColor,
          fontSize: screenSize < 600 ? 24 : 30,
        }}
      />
    </MediaLinksContainer>
  );
};

export default MediaLinks;
