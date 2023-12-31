import {
  BaseButtonProps,
  BaseExternalLinkProps,
  ButtonWithLabelProps,
} from "@models/ComponentsModels";

import { Button, ExternalLink } from "./CustomButton.style";
import { Text } from "@styles/GlobalStyles.style";

const ButtonBase = (props: BaseButtonProps): JSX.Element => {
  const { children, style, title, onClick } = props;
  const { bg, width, height, unit } = style;

  return (
    <Button
      bg={bg}
      width={width}
      height={height}
      unit={unit}
      title={title}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
const ButtonWithLabel = (props: ButtonWithLabelProps): JSX.Element => {
  const { children, style, title, label, onClick } = props;
  const { color } = style;

  return (
    <ButtonBase style={style} title={title} onClick={onClick}>
      {children}
      <Text color={color} weight="normal" align="center">
        {label}
      </Text>
    </ButtonBase>
  );
};

const BaseExternalLink = (props: BaseExternalLinkProps): JSX.Element => {
  const { children, style, title, href } = props;
  const { bg, width, height, unit } = style;

  return (
    <ExternalLink
      bg={bg}
      width={width}
      height={height}
      unit={unit}
      title={title}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </ExternalLink>
  );
};

export { ButtonWithLabel, BaseExternalLink };
export default ButtonBase;
