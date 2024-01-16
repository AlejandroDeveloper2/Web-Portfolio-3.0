import { useThemeContext } from "@hooks/index";

import { SingleLogo } from "@components/shared/logo/Logo";

import { LoaderBarContainer, LoadContainer } from "./LoaderBar.style";
import { Text } from "@styles/GlobalStyles.style";

const LoaderBar = (): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <LoaderBarContainer bg={colorPattle.bgColor}>
      <SingleLogo />
      <LoadContainer bg={colorPattle.gray}></LoadContainer>
      <Text color={colorPattle.secondaryColor} weight="bold" align="center">
        Loading Projects
      </Text>
    </LoaderBarContainer>
  );
};

export default LoaderBar;
