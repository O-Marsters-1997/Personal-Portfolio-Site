import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-scroll";
import { Box, Typography, Button } from "@mui/material";
import { bgcolor, styled } from "@mui/system";
import { AbcRounded } from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CanvasOverlay = ({}) => {
  const [arrowToggle, setArrowToggle] = useState(false);

  const handleToggle = () => {
    setArrowToggle(!arrowToggle);
  };

  const goToLink = () => {};

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

    ".MuiTypography-h2": {
      fontSize: "clamp( 2.7rem, 5vw, 4.25rem)",
    },

    ".overlay-text-title": {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        span: {
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
          <span className="span-separation">I'm a software </span>
          <span>engineer</span>
        </Typography>
        <Link to="contact" smooth={true} duration={2000} offset={-250}>
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
