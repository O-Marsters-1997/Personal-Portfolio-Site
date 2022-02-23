import { createTheme } from "@mui/material/styles";
import { purple, orange, red } from "@mui/material/colors";

// Cabin fonts
import CabinTtf from "./assets/fonts/cabin-v18-latin-regular.ttf";
import CabinWoff from "./assets/fonts/cabin-v18-latin-regular.woff";
import CabinWoff2 from "./assets/fonts/cabin-v18-latin-regular.woff2";

import RalewayWoff2 from "./assets/fonts/raleway-v26-latin-regular.woff2";

// Initialising the theme so that I can access the colours later
let theme = createTheme({
  palette: {
    primary: {
      main: "rgba(28, 32, 45,1)",
      alternative: "rgba(242, 242, 242,1)",
      modifier: "rgba(60,68,92, 1)",
      overlay: "rgba(80, 89, 121, .62)",
      navAccent: "rgba(95, 112, 139, 1)",
      project: "rgba(60, 68, 92, .92)",
      footer: "#21273bff",
      footerShadow: "#21283dff",
    },
    secondary: {
      main: "rgba(240, 167, 81, 1)",
    },

    text: {
      // Off white
      primary: "rgba(242, 242, 242,1)",
      secondary: "rgba(72, 72, 72, 1)",
      accent: "rgba(240, 167, 81, 1)",
    },
    stars: {
      one: "rgba(240, 167, 81, 1)",
      two: "rgba(89, 195, 195, 1)",
      three: "rgba(218, 218, 218, 1)",
      four: "rgba(255, 255, 255, 1)",
    },
  },
});

// Update the theme so that more values can be added on top of it
theme = createTheme(theme, {
  typography: {
    h3: {
      fontFamily: "Cabin, Arial",
    },
    h4: {
      fontFamily: "Raleway, Arial",
      fontWeight: "600",
      fontSize: "1.2em",
    },
    h5: {
      fontFamily: "Raleway, Arial",
    },
    button: {
      fontFamily: "Raleway, Arial",
    },
    body1: {
      fontFamily: "roboto",
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: "1.75rem",
    },
    subtitle: {
      fontFamily: "Raleway, Arial",
      fontSize: ".95rem",
    },
    subtitle2: {
      fontFamily: "Raleway, Arial",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      vs: 300,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    // CSS Baseline for font face (self host fonts)
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
        }

        @font-face {
          font-family: 'Cabin';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src:  url(${CabinTtf}) format('ttf'),
                url(${CabinWoff}) format('woff'),
                url(${CabinWoff2}) format('woff2');
        }
      `,
    },
    // Button components
    MuiButton: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          borderRadius: "10px",
          border: `.5px solid ${theme.palette.text.accent}`,
          "&:hover": { border: `2px solid ${theme.palette.text.accent}` },
        },
      },
    },
  },
});

export default theme;
