import "./App.css";
import SuperTokens from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import { PreBuiltUIList, SuperTokensConfig } from "./config";
import { Dashboard } from "./layouts/dashboard";
import { Home } from "./pages/home";
import { ModelPage } from "./pages/model";
import { DatasetPage } from "./pages/dataset";
import Page404 from "./pages/page-not-found";
import { useScrollToTop } from "./hooks/use-scroll-to-top";

import ThemeProvider from "./theme";

SuperTokens.init(SuperTokensConfig);

function App() {
  useScrollToTop();

  const MainLayout = () => (
    <SessionAuth>
      <Dashboard>
        <Outlet />
      </Dashboard>
    </SessionAuth>
  );

  return (
    <ThemeProvider>
      <Routes>
        {getSuperTokensRoutesForReactRouterDom(
          require("react-router-dom"),
          PreBuiltUIList
        )}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/dataset" element={<DatasetPage />} />
          <Route path="/model" element={<ModelPage />} />
        </Route>
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
