import { Helmet } from "react-helmet-async";

import { AppView } from "../sections/overview/view";

// ----------------------------------------------------------------------

export function Home() {
  return (
    <>
      <Helmet>
        <title> home | simple-ai-trainer </title>
      </Helmet>

      <AppView />
    </>
  );
}
