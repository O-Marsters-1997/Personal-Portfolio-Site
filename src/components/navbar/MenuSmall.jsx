import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MenuSmall = () => {
  const MyWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.modifier,
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 100,
    
    ".MuiTypography-root": {
      fontVariant: "small-caps",
      textTransform: "uppercase",
      fontSize: "1.75rem",
    },

    ".MuiButton-root": {
      fontSize: "1.75rem",
      padding: ".75rem 2.25rem",
    },
  }));
  return (
    <MyWrapper component="div">
      <Typography variant="h5">about</Typography>
      <Typography variant="h5">projects</Typography>
      <Typography variant="h5">contact</Typography>
      <Button color="inherit">CV</Button>
    </MyWrapper>
  );
};

export default MenuSmall;
