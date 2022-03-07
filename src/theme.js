import { createTheme } from "@mui/material/styles";

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
      project: "rgba(60, 68, 92, .52)",
      projectSmall: "rgba(60, 68, 92, .87)",
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
  typography: {
    // This is applied to the rules on the top page section
    h2: {
      fontFamily: "Cabin, Arial",
      letterSpacing: ".05em",
    },

    // H3 rules are applied to all the main section headings
    h3: {
      fontFamily: "Cabin, Arial",
      fontSize: "3.8rem",
      textTransform: "uppercase",
      margin: "0 auto 7.5vh auto",
      width: "fit-content",

      ".underline": {
        width: "60%",
        margin: "1.8rem auto 3.2rem auto",
        height: "4px",
        backgroundColor: theme.palette.text.primary,
        borderRadius: "5px",
      },
      // for mobile deveices the headings are smaller
      [theme.breakpoints.down("sm")]: {
        fontSize: "3.05rem",
        ".underline": {
          margin: "1.4rem auto 2.8rem auto",
        },
      },
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
      fontSize: "1.3em",
      lineHeight: "2.45rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.25em",
        lineHeight: "2.25rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.115em",
        lineHeight: "1.75rem",
      },
    },
    subtitle: {
      fontFamily: "Raleway, Arial",
      fontSize: ".95rem",
    },
    subtitle2: {
      fontFamily: "Raleway, Arial",
      fontSize: "1.15rem",
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
