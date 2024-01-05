import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import { useResponsive } from "../../hooks/use-responsive";

import Iconify from "../../components/iconify";
import NotificationsPopover from "./common/notifications-popover";

import { NAV, HEADER } from "./config-layout";
import { grey } from "../../theme/palette";
// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");

  return (
    <AppBar
      sx={{
        bgcolor: grey[100],
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {!lgUp && (
          <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <NotificationsPopover />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
