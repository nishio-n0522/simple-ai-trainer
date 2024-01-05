import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import Chart, { useChart } from "../../components/chart";
import { Box, Button, CardContent, Typography } from "@mui/material";
import { common, success } from "../../theme/palette";
import { typography } from "../../theme/typography";
import { CARD } from "../../layouts/dashboard/config-layout";

// ----------------------------------------------------------------------

export default function ServerStatus({ title, subheader, chart, ...other }) {
  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: "16%",
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== "undefined") {
            return `${value.toFixed(0)} visits`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other} sx={{ height: "100%" }}>
      <CardHeader
        title={title}
        sx={{ height: CARD.H_HEADER }}
        action={
          <Box
            sx={{
              borderRadius: 4,
              bgcolor: success.light,
            }}
          >
            <Typography variant="h6" color={common.white} sx={{ mx: 2 }}>
              Free
            </Typography>
          </Box>
        }
      />
      <CardContent sx={{ height: `calc(100% - ${CARD.H_HEADER}px)` }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height="100%"
        />
      </CardContent>
    </Card>
  );
}

ServerStatus.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
