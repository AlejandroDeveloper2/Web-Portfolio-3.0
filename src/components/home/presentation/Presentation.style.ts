import styled from "styled-components";

import { ButtonStyleVariant } from "@models/StyledComponentsModels";
import { ColorPattle } from "@models/ContextModels";
import { Image } from "@styles/GlobalStyles.style";

const PresentationContainer = styled.section`
  width: calc(100vw - 7.5rem);
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: calc(100vw - 12rem);
  }
  @media (min-width: 1400px) {
    width: 68.125rem;
  }
`;

const PresentationInfo = styled.div`
  width: 100%;
  height: auto;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;
  h2 {
    text-transform: uppercase;
    span {
      font-weight: normal;
    }
  }
`;

const Illustration = styled(Image)`
  width: 280px;
  height: 180px;
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  display: none;
  animation: bounce 3s infinite both ease;

  @media (min-width: 1400px) {
    display: block;
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

const getCvButtonStyle = (colorPattle: ColorPattle): ButtonStyleVariant => ({
  width: 220,
  height: 60,
  unit: "px",
  color: "var(--white)",
  bg: colorPattle.primaryColor,
});

export {
  PresentationContainer,
  PresentationInfo,
  Illustration,
  getCvButtonStyle,
};
