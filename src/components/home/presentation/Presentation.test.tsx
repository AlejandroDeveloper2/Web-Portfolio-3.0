import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";

import Presentation from "./Presentation";
import { ThemeProvider } from "@context/index";

import englishMessages from "@lang/english-messages.json";

describe("Presentation", () => {
  test("Should show the component correctly", () => {
    render(
      <ThemeProvider>
        <IntlProvider
          messages={englishMessages}
          locale="en-US"
          defaultLocale="en-US"
        >
          <Presentation />
        </IntlProvider>
      </ThemeProvider>
    );
    expect(screen.getByAltText("Illustration")).toBeDefined();
  });
});
