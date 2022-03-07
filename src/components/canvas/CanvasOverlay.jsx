import React from "react";
import { Link } from "react-scroll";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CanvasOverlay = () => {

  const TitleWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: 0,
    alignItems: "center",
    height: "100vh",
    width: "100%",
    color: theme.palette.text.primary,

    ".overlay-wrapper": {
      width: "fit-content",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "2em",
      },
    },

    ".MuiTypography-root": {
      width: "fit-content",
      padding: ".4rem",
      "&:last-child": {
        color: "blue",
      },

      "&.overlay-text-accent": {
        color: theme.palette.text.accent,
      },
    },

    ".MuiTypography-h2": {
      fontSize: "clamp( 2.7rem, 5vw, 4.25rem)",
    },

    ".overlay-text-title": {
      display: "flex",
      width: "fit-content",
      flexDirection: "row",
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

    ".span-separation": {
      marginRight: "1.2rem",
    },
  }));

  return (
    <TitleWrapper className="overlay-container">
      <Box className="overlay-wrapper">
        <Typography variant="h5">Hello, my name is</Typography>
        <Typography variant="h2" className="overlay-text-accent">
          Olly Marsters
        </Typography>
        <Typography variant="h2" className="overlay-text-title">
          I make things for the web
        </Typography>
        <Link to="about" smooth={true} duration={1500} offset={-100}>
          <Button variant="outlined" className="overlay-button">
            <Box className="overlay-button-wrapper">
              <Typography>See more</Typography>
              <ArrowDownwardIcon />
            </Box>
          </Button>
        </Link>
      </Box>
    </TitleWrapper>
  );
};

export default CanvasOverlay;
