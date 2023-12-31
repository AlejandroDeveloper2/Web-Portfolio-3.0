import { useThemeContext } from "@hooks/index";

import { Svg } from "@styles/GlobalStyles.style";

const FirstFigure = (): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <Svg
      width="177"
      height="162"
      viewBox="0 0 177 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="144.594"
        cy="34.8197"
        r="32"
        transform="rotate(179.815 144.594 34.8197)"
        fill="white"
      />
      <circle
        cx="130.865"
        cy="118.864"
        r="42"
        transform="rotate(179.815 130.865 118.864)"
        fill="white"
      />
      <circle
        cx="52.6524"
        cy="53.1162"
        r="52"
        transform="rotate(179.815 52.6524 53.1162)"
        fill={colorPattle.primaryColor}
      />
    </Svg>
  );
};

export default FirstFigure;
