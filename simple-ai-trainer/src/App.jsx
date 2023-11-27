import React from "react";

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "Simple-AI-Trainer",
    apiDomain: "http://localhost:8181",
    websiteDomain: "http://localhost:8180",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

/* Your App */
class App extends React.Component {
  render() {
    return (
      <SuperTokensWrapper>
        <BrowserRouter>
          <Routes>
            {/*This renders the login UI on the /auth route*/}
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
              EmailPasswordPreBuiltUI,
            ])}
            {/*Your app routes*/}
          </Routes>
        </BrowserRouter>
      </SuperTokensWrapper>
    );
  }
}
export default App;
