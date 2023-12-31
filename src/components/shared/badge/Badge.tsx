import { BadgeProps } from "@models/ComponentsModels";

import { BadgeContainer } from "./Badge.style";
import { TextCaption } from "@styles/GlobalStyles.style";

const Badge = (props: BadgeProps): JSX.Element => {
  const { style, text } = props;

  return (
    <BadgeContainer bg={style.bg}>
      <TextCaption color={style.color} weight="bold" align="center">
        {text}
      </TextCaption>
    </BadgeContainer>
  );
};

export default Badge;
