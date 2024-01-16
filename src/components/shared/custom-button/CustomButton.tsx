import {
  BaseButtonProps,
  BaseExternalLinkProps,
  ButtonWithLabelProps,
  ExternalLinkWithLabelProps,
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
      <Text color={color} weight="bold" align="center">
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

const ExternalLinkWithLabel = (
  props: ExternalLinkWithLabelProps
): JSX.Element => {
  const { children, style, title, href, label } = props;
  const { color } = style;

  return (
    <BaseExternalLink style={style} title={title} href={href}>
      {children}
      <Text color={color} weight="bold" align="center">
        {label}
      </Text>
    </BaseExternalLink>
  );
};

export { ButtonWithLabel, BaseExternalLink, ExternalLinkWithLabel };
export default ButtonBase;
