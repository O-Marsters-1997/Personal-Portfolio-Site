import { createTheme } from "@mui/material/styles";
import { purple, orange, red } from "@mui/material/colors";

// Cabin fonts
import CabinTtf from "./assets/fonts/cabin-v18-latin-regular.ttf";
import CabinWoff from "./assets/fonts/cabin-v18-latin-regular.woff";
import CabinWoff2 from "./assets/fonts/cabin-v18-latin-regular.woff2";

import RalewayWoff2 from "./assets/fonts/raleway-v26-latin-regular.woff2";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(28, 32, 45,1)",
    },
    secondary: {
      main: "rgba(240, 167, 81, 1)",
    },
    stars: {
      one: "rgba(240, 167, 81, 1)",
      two: "rgba(89, 195, 195, 1)",
      three: "rgba(218, 218, 218, 1)",
      four: "rgba(255, 255, 255, 1)",
    },
  },
  typography: {
    fontFamily: "Cabin, Arial",
  },
  components: {
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
  },
});

export default theme;
