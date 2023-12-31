import { Route, Routes } from "react-router-dom";

import Layout from "@layout/Layout";
import { MainPage } from "@pages/index";

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
