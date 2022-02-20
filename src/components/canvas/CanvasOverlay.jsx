import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { bgcolor, styled } from "@mui/system";

const CanvasOverlay = () => {
  const TitleWrapper = styled("div")({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: 0,
    alignItems: "center",
    // backgroundColor:"purple",
    height: "100vh",
    width: "100%",
    color: "white",

    ".MuiTypography-root": {
      padding: ".4rem",
    },

    ".overlay-text": {
      color: "orange",
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
      </Box>
    </TitleWrapper>
  );
};

export default CanvasOverlay;
