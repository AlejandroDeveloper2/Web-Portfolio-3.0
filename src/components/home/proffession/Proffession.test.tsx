import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";

import Proffession from "./Proffession";
import { ThemeProvider } from "@context/index";

import englishMessages from "@lang/english-messages.json";

describe("Proffession", () => {
  test("Should show the component correctly", () => {
    render(
      <ThemeProvider>
        <IntlProvider
          messages={englishMessages}
          locale="en-US"
          defaultLocale="en-US"
        >
          <Proffession />
        </IntlProvider>
      </ThemeProvider>
    );
    expect(screen.getByTestId("proffesion-element")).toBeDefined();
  });
});
