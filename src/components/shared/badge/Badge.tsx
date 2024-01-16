import { useScreenSize } from "@hooks/index";

import {
  BadgeIconOnlyProps,
  BadgeProps,
  BadgeWithIconProps,
} from "@models/ComponentsModels";

import { BadgeContainer } from "./Badge.style";
import { TextCaption } from "@styles/GlobalStyles.style";

const Badge = (props: BadgeProps): JSX.Element => {
  const { style, text, children } = props;

  return (
    <BadgeContainer bg={style.bg}>
      {children}
      <TextCaption color={style.color} weight="bold" align="center">
        {text}
      </TextCaption>
    </BadgeContainer>
  );
};

const BadgeWithIcon = (props: BadgeWithIconProps): JSX.Element => {
  const { Icon, style } = props;
  return (
    <Badge {...props}>
      <Icon style={{ color: style.color, fontSize: 30 }} />
    </Badge>
  );
};

const BadgeIconOnly = (props: BadgeIconOnlyProps): JSX.Element => {
  const { Icon, style } = props;
  const screenSize = useScreenSize();

  return (
    <BadgeContainer bg={style.bg}>
      <Icon
        style={{ color: style.color, fontSize: screenSize < 600 ? 24 : 30 }}
      />
    </BadgeContainer>
  );
};

export { BadgeWithIcon, BadgeIconOnly };
export default Badge;
