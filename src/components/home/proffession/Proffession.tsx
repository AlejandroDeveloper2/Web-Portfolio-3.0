import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { HiCode } from "react-icons/hi";
import { TiCode } from "react-icons/ti";

import { useThemeContext } from "@hooks/index";

import { TextSubtitle } from "@styles/GlobalStyles.style";
import { ProffessionSection } from "./Proffession.style";

const Proffession = (): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      data-testid="proffesion-element"
    >
      <ProffessionSection>
        <HiCode style={{ color: colorPattle.primaryColor, fontSize: 30 }} />
        <TextSubtitle
          color={colorPattle.primaryColor}
          weight="bold"
          align="center"
        >
          <FormattedMessage
            id="home.presentationPart1"
            defaultMessage="Ui - ux designer"
          />
          <span style={{ color: colorPattle.secondaryColor }}>
            <FormattedMessage
              id="home.presentationPart2"
              defaultMessage="and Web and mobile"
            />
          </span>
          <FormattedMessage
            id="home.presentationPart3"
            defaultMessage="front - end developer"
          />
        </TextSubtitle>
        <TiCode style={{ color: colorPattle.secondaryColor, fontSize: 30 }} />
      </ProffessionSection>
    </motion.div>
  );
};

export default Proffession;
