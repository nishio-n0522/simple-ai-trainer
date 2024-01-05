import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import AppCurrentVisits from "../app-current-visits";
import ServerStatus from "../server-status";
import AppConversionRates from "../app-conversion-rates";

// ----------------------------------------------------------------------

export function HomeView() {
  return (
    <Grid container rowSpacing={4} columnSpacing={3} height="100%">
      <Grid xs={12} md={6} lg={5} height="55%">
        <AppCurrentVisits
          title="News"
          chart={{
            series: [
              { label: "America", value: 4344 },
              { label: "Asia", value: 5435 },
              { label: "Europe", value: 1443 },
              { label: "Africa", value: 4443 },
            ],
          }}
        />
      </Grid>

      <Grid xs={12} md={6} lg={7} height="55%">
        <ServerStatus
          title="Server status"
          subheader="(+43%) than last year"
          chart={{
            labels: [
              "01/01/2003",
              "02/01/2003",
              "03/01/2003",
              "04/01/2003",
              "05/01/2003",
              "06/01/2003",
              "07/01/2003",
              "08/01/2003",
              "09/01/2003",
              "10/01/2003",
              "11/01/2003",
            ],
            series: [
              {
                name: "Team B",
                type: "area",
                fill: "gradient",
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
              },
            ],
          }}
        />
      </Grid>

      <Grid xs={12} height="45%">
        <AppConversionRates
          title="How to"
          subheader="(+43%) than last year"
          chart={{
            series: [
              { label: "Italy", value: 400 },
              { label: "Japan", value: 430 },
              { label: "China", value: 448 },
              { label: "Canada", value: 470 },
              { label: "France", value: 540 },
              { label: "Germany", value: 580 },
              { label: "South Korea", value: 690 },
              { label: "Netherlands", value: 1100 },
              { label: "United States", value: 1200 },
              { label: "United Kingdom", value: 1380 },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
}
