import styled, { css } from "styled-components";

import {
  TextStyledProps,
  BackgroundStyledProps,
} from "@models/StyledComponentsModels";

const MainContainer = styled.main<BackgroundStyledProps>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background: ${({ bg }: BackgroundStyledProps) => bg};
  position: relative;
  gap: 7.5rem;
`;

const FloatButtonContainer = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
`;

const textStyle = css<TextStyledProps>`
  font-weight: ${(props: TextStyledProps) => props.weight};
  color: ${(props: TextStyledProps) => props.color};
  text-align: ${(props: TextStyledProps) => props.align};
  text-overflow: clip;
  white-space: pre-wrap;
`;

const Text = styled.p<TextStyledProps>`
  font-size: var(--sm-normal-text);
  ${textStyle};

  @media (min-width: 768px) {
    font-size: var(--lg-normal-text);
  }
`;

const TextCaption = styled.span<TextStyledProps>`
  font-size: var(--sm-caption-text);
  ${textStyle};

  @media (min-width: 768px) {
    font-size: var(--lg-caption-text);
  }
`;

const TextTitle = styled.h1<TextStyledProps>`
  font-size: var(--sm-title);
  ${textStyle};

  @media (min-width: 768px) {
    font-size: var(--lg-title);
  }
`;

const TextMega = styled.h1<TextStyledProps>`
  font-size: var(--sm-mega-text);
  ${textStyle};

  @media (min-width: 768px) {
    font-size: var(--lg-mega-text);
  }
`;

const TextSubtitle = styled.h2<TextStyledProps>`
  font-size: var(--sm-subtitle);
  ${textStyle};

  @media (min-width: 768px) {
    font-size: var(--lg-subtitle);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  position: relative;
  padding: 20px 0;
  overflow-x: hidden;
  svg[id="projectillustration"] {
    position: absolute;
    top: 1rem;
    right: 2rem;
    display: none;
  }
  @media (min-height: 800px) {
    gap: 7rem;
  }
  @media (min-width: 768px) {
    padding: 40px 0;
    svg[id="projectillustration"] {
      display: block;
      width: 6.25rem;
      height: 6.25rem;
    }
  }
  @media (min-width: 1400px) {
    svg[id="projectillustration"] {
      width: 8.75rem;
      height: 8.75rem;
    }
  }
`;

const Svg = styled.svg`
  width: 68px;
  height: 56px;
  position: absolute;
  right: 20px;
  top: 0.5rem;
  animation: bounce 3s ease backwards infinite;

  @media (min-width: 768px) {
    width: 176px;
    height: 160px;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5%);
    }
  }
`;

const SvgVariant = styled(Svg)`
  right: auto;
  top: auto;
  bottom: 1rem;
  left: 10px;
  animation: bounce-inverse 3s ease backwards infinite;
  @media (min-width: 768px) {
    top: auto;
  }

  @keyframes bounce-inverse {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5%);
    }
  }
`;

export {
  MainContainer,
  TextCaption,
  Text,
  TextMega,
  TextTitle,
  TextSubtitle,
  textStyle,
  Image,
  PageContainer,
  Svg,
  SvgVariant,
  FloatButtonContainer,
};
