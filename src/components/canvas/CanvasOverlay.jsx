import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { bgcolor, styled } from "@mui/system";
import { AbcRounded } from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CanvasOverlay = ({ theme }) => {
  const TitleWrapper = styled("div")({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: 0,
    alignItems: "center",
    height: "100vh",
    width: "100%",
    color: "stars.one",

    ".MuiTypography-root": {
      padding: ".4rem",
    },

    ".overlay-text": {
      color: "orange",
    },

    ".overlay-button-wrapper": {
      display: "flex",
      justifyContent: "flexStart",
      alignItems: "center",
    },
  });

  return (
    <TitleWrapper className="overlay-container">
      <Box className="overlay-wrapper" sx={{}}>
        <Typography className="overlay-text" variant="h5">
          Hello, my name is
        </Typography>
        <Typography variant="h3">Olly Marsters</Typography>
        <Typography variant="h3">I'm a software engineer</Typography>
        <Button variant="outlined" className="overlay-button">
          <Box className="overlay-button-wrapper">
            <Typography>dfsadf</Typography>
            <ArrowDownwardIcon />
          </Box>
        </Button>
      </Box>
    </TitleWrapper>
  );
};

export default CanvasOverlay;
