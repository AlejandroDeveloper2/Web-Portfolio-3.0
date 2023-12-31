import { BsCode } from "react-icons/bs";

import { useThemeContext } from "@hooks/index";
import { LogoProps } from "@models/ComponentsModels";

import {
  LayersContainer,
  LogoContainer,
  LogoText,
  SubLayer,
  Layer,
} from "./Logo.style";

const BaseLogo = ({ children }: LogoProps): JSX.Element => {
  const { colorPattle } = useThemeContext();
  return (
    <LogoContainer to="/">
      <LogoText color={colorPattle.primaryColor} weight="bold" align="center">
        {"<Diego"}
      </LogoText>
      {children}
      <LogoText color={colorPattle.secondaryColor} weight="bold" align="center">
        {"dev/>"}
      </LogoText>
    </LogoContainer>
  );
};

const Logo = (): JSX.Element => {
  return (
    <BaseLogo>
      <SingleLogo />
    </BaseLogo>
  );
};

const SingleLogo = (): JSX.Element => {
  const { colorPattle } = useThemeContext();
  return (
    <LayersContainer>
      <Layer bg={colorPattle.primaryColor}></Layer>
      <SubLayer bg={colorPattle.secondaryColor}>
        <BsCode
          style={{
            color: colorPattle.secondaryColor,
            fontSize: 24,
          }}
        />
      </SubLayer>
    </LayersContainer>
  );
};

export { SingleLogo };
export default Logo;
