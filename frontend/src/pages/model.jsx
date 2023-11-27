import { Helmet } from "react-helmet-async";

import { ModelView } from "../sections/model/view";

// ----------------------------------------------------------------------

export function ModelPage() {
  return (
    <>
      <Helmet>
        <title> model manager | simple-ai-trainer </title>
      </Helmet>

      <ModelView />
    </>
  );
}
