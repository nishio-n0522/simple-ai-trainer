import axios from "axios";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { signOut } from "supertokens-auth-react/recipe/session";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import { getApiDomain } from "../../config";

import { usePathname } from "../../routes/hooks";
import { RouterLink } from "../../routes/components";

import { useResponsive } from "../../hooks/use-responsive";

import { account } from "../../_mock/account";

import Logo from "../../components/logo";
import SimpleAiTrainerLogo from "../../assets/images/simple-ai-trainer_logo.png";
import Scrollbar from "../../components/scrollbar";

import { NAV } from "./config-layout";
import navConfig from "./config-navigation";
import { typography } from "../../theme/typography";
import { grey } from "../../theme/palette";

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive("up", "lg");

  const navigate = useNavigate();

  async function logoutClicked() {
    await signOut();
    navigate("/");
  }

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        bgcolor: grey[500],
      }}
    >
      <Avatar src={account.photoURL} alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2" color={grey[100]}>
          {account.displayName}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {account.role}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100vh",
        "& .simplebar-content": {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
        py: 3,
      }}
    >
      <Box flexGrow={1}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            mx: 3,
            gap: 1,
          }}
        >
          <Box
            component="img"
            src={SimpleAiTrainerLogo}
            sx={{
              width: "40px",
              height: "40px",
              objectFit: "contain",
            }}
          />
          <Typography
            fontFamily="BIZUDPGothic"
            fontWeight={400}
            fontSize={typography.h6.fontSize}
          >
            Simple-ai-trainer
          </Typography>
        </Stack>
        {renderAccount}
        {renderMenu}
      </Box>
      <Button
        color="info"
        variant="contained"
        sx={{ mx: 4 }}
        onClick={logoutClicked}
      >
        Log out
      </Button>
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            bgcolor: grey[100],
            borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "primary.main",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "primary.darker",
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.3),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ ml: 1 }}>
        {item.title}
      </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
