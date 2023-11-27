import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { HelmetProvider } from "react-helmet-async";
import { SuperTokensConfig } from "./config";
import { BrowserRouter } from "react-router-dom";

SuperTokens.init(SuperTokensConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SuperTokensWrapper>
        <BrowserRouter>
          <Suspense>
            <App />
          </Suspense>
        </BrowserRouter>
      </SuperTokensWrapper>
    </HelmetProvider>
  </React.StrictMode>
);
