import PropTypes from "prop-types";

import { Box, Stack, Typography } from "@mui/material";

import { useResponsive } from "../../hooks/use-responsive";

import { NAV, HEADER } from "./config-layout";
import { grey } from "../../theme/palette";

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }) {
  const lgUp = useResponsive("up", "lg");

  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "100vh",
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        boxSizing: "border-box",
      }}
    >
      <Box
        aria-aria-label="empty box"
        sx={{
          display: "flex",
          flexGrow: 0,
          flexShrink: 0,
          boxShadow: "none",
          height: "64px",
          width: "100%",
          boxSizing: "border-box",
          bgcolor: grey[100],
          ...(lgUp && {
            height: `${HEADER.H_DESKTOP}px`,
          }),
        }}
      />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: `calc(100% - ${HEADER.H_MOBILE}px)`,
          pt: 1,
          px: "3%",
          bgcolor: grey[100],
          boxSizing: "border-box",
          ...(lgUp && {
            height: `calc(100% - ${HEADER.H_DESKTOP}px)`,
          }),
          ...sx,
        }}
        {...other}
      >
        {children}
      </Box>
    </Stack>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
