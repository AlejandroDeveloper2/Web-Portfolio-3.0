import { useThemeContext } from "@hooks/index";

import { SvgVariant } from "@styles/GlobalStyles.style";

const SecondFigure = (): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <SvgVariant
      width="176"
      height="160"
      viewBox="0 0 176 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="126" r="32" fill="white" />
      <circle cx="46" cy="42" r="42" fill={colorPattle.primaryColor} />
      <circle cx="124" cy="108" r="52" fill={colorPattle.primaryColor} />
    </SvgVariant>
  );
};

export default SecondFigure;
