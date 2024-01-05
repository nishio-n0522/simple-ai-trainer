import { createTheme, alpha } from "@mui/material/styles";

import { typography } from "./typography";
import { customShadows } from "./custom-shadows";
import { overrides } from "./overrides";

const defaultTheme = createTheme({
  customShadows: customShadows(),
  grey: {
    0: "#FFFFFF",
    100: "#f3f3f3",
    200: "#e9e9e9",
    300: "#a0a0a0",
    400: "#6c6c6c",
    500: "#404040",
    600: "#000000",
  },
  palette: {
    primary: {
      lighter: "#f3f3f3",
      light: "#e9e9e9",
      main: "#a0a0a0",
      dark: "#6c6c6c",
      darker: "#404040",
      contrastText: "#FFFFFF",
    },
    secondary: {
      lighter: "#EFD6FF",
      light: "#C684FF",
      main: "#8E33FF",
      dark: "#5119B7",
      darker: "#27097A",
      contrastText: "#FFFFFF",
    },
    info: {
      lighter: "#a0a0a0",
      light: "#6c6c6c",
      main: "#404040",
      dark: "#000000",
      darker: "#000000",
      contrastText: "#FFFFFF",
    },
    success: {
      lighter: "#C8FAD6",
      light: "#5BE49B",
      main: "#00A76F",
      dark: "#007867",
      darker: "#004B50",
      contrastText: "#FFFFFF",
    },
    warning: {
      lighter: "#FFF5CC",
      light: "#FFD666",
      main: "#FFAB00",
      dark: "#B76E00",
      darker: "#7A4100",
      contrastText: "#212B36",
    },
    error: {
      lighter: "#FFE9D5",
      light: "#FFAC82",
      main: "#FF5630",
      dark: "#B71D18",
      darker: "#7A0916",
      contrastText: "#FFFFFF",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    action: {
      hover: alpha("#919EAB", 0.08),
      selected: alpha("#919EAB", 0.16),
      disabled: alpha("#919EAB", 0.8),
      disabledBackground: alpha("#919EAB", 0.24),
      focus: alpha("#919EAB", 0.24),
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
    // text: {
    //   primary: grey[800],
    //   secondary: grey[600],
    //   disabled: grey[500],
    // },
    // background: {
    //   paper: "#FFFFFF",
    //   default: grey[100],
    //   neutral: grey[200],
    // },
  },
  typography,
});

defaultTheme.components = overrides(defaultTheme);

export default defaultTheme;
