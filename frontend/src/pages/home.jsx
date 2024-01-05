import { Helmet } from "react-helmet-async";

import { HomeView } from "../sections/home/view";
// import { AppView } from "../sections/overview/view";

// ----------------------------------------------------------------------

export function Home() {
  return (
    <>
      <Helmet>
        <title> home | simple-ai-trainer </title>
      </Helmet>

      <HomeView />
    </>
  );
}
