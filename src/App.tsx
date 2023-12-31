import { BrowserRouter } from "react-router-dom";

import AppRouter from "@routes/AppRouter";
import { ThemeProvider, LanguageProvider } from "@context/index";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
