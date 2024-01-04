type Theme = "light" | "dark";
type ScreenMode = "lg" | "sm";

interface ThemeProps {
  thememode: Theme;
}

interface BackgroundStyledProps {
  bg: string;
}

interface TextStyledProps {
  color: string;
  weight: "bold" | "normal" | number;
  align: "center" | "left" | "right" | "justify";
}

interface ButtonStyleProps extends BackgroundStyledProps {
  unit: "rem" | "px" | "%";
  width: number;
  height: number;
}

interface ButtonStyleVariant extends ButtonStyleProps {
  color: string;
}

interface LateralMenuStyleProps extends BackgroundStyledProps {
  visible: string;
}

interface ThemeControlsStyleProps {
  is_mobile_screen: string;
}

interface ActiveBgStyle {
  bg: string;
  color: string;
}

interface MediaLinksStyleProps extends LateralMenuStyleProps {}

interface CarouselIndicatorStyleProps extends BackgroundStyledProps {
  active: boolean;
}

export type {
  Theme,
  ScreenMode,
  ThemeProps,
  TextStyledProps,
  BackgroundStyledProps,
  ButtonStyleProps,
  ButtonStyleVariant,
  LateralMenuStyleProps,
  ThemeControlsStyleProps,
  ActiveBgStyle,
  MediaLinksStyleProps,
  CarouselIndicatorStyleProps,
};
