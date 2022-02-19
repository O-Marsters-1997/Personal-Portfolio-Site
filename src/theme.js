import { createTheme } from "@mui/material/styles";
import { purple, orange, red } from "@mui/material/colors";

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
});

export default theme;
