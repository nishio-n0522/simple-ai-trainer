import { Helmet } from "react-helmet-async";

import { DatasetView } from "../sections/dataset/view";

// ----------------------------------------------------------------------

export function DatasetPage() {
  return (
    <>
      <Helmet>
        <title> dataset manager | simple-ai-trainer </title>
      </Helmet>

      <DatasetView />
    </>
  );
}
