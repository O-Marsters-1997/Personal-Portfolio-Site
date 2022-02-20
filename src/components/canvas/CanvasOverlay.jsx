import React, {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography, Button } from "@mui/material";
import { bgcolor, styled } from "@mui/system";
import { AbcRounded } from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CanvasOverlay = ({}) => {

  const [arrowToggle, setArrowToggle] = useState(false);


  const handleToggle = ()=> {
    setArrowToggle(!arrowToggle);
  }

  const TitleWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: 0,
    alignItems: "center",
    height: "100vh",
    width: "100%",
    color: theme.palette.text.primary,

    ".MuiTypography-root": {
      padding: ".4rem",
      "&:last-child": {
        color: "blue",
      },

      "&.overlay-text-accent": {
        color: theme.palette.text.accent,
      },
    },

    ".MuiTypography-h3": {
      fontSize: "clamp( 2.7rem, 5vw, 4.25rem)",
    },

    ".overlay-text-title": {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        "span": {
          padding: 0,
        },
      },
    },

    ".MuiTypography-h5": {
      fontSize: "calc(clamp( 2.7rem, 5vw, 4.25rem)/2.35)",
    },

    ".overlay-button-wrapper": {
      display: "flex",
      justifyContent: "flexStart",
      alignItems: "center",
    },
    ".MuiButton-root": {
      marginTop: "1.4rem",
    },
  }));

  return (
    <TitleWrapper className="overlay-container">
      <Box className="overlay-wrapper">
        <Typography variant="h5">Hello, my name is</Typography>
        <Typography variant="h3" className="overlay-text-accent">
          Olly Marsters
        </Typography>
        <Typography variant="h3" className="overlay-text-title">
          <Box component="span">I'm a software </Box>
          <Box component="span" sx={{ pl: ".32em" }}>
            {" "}
            engineer{" "}
          </Box>
        </Typography>
        <Button variant="outlined" className="overlay-button">
          <Box className="overlay-button-wrapper">
            <Typography>See more</Typography>
            <ArrowDownwardIcon/>
          </Box>
        </Button>
      </Box>
    </TitleWrapper>
  );
};

export default CanvasOverlay;
