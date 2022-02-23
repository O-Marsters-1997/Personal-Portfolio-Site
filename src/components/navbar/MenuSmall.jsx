import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MenuSmall = ({ onMobileClick }) => {
  const MyWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.modifier,
    height: "90vh",
    display: "flex",
    position: "absolute",
    width: "100%",

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

  const aboutNav = async () => {
    await onMobileClick();
    const element = document.getElementById("about");
    element.scrollIntoView({ behaviour: "smooth", block: "start" });
  };

  const projectsNav = async () => {
    await onMobileClick();
    const element = document.getElementById("projects");
    element.scrollIntoView({ behaviour: "smooth", block: "start" });
  };

  const contactNav = async () => {
    await onMobileClick();
    const element = document.getElementById("contact");
    element.scrollIntoView({ behaviour: "smooth", block: "start" });
  };

  return (
    <MyWrapper component="div">
      <Typography variant="h5" onClick={aboutNav}>
        about
      </Typography>
      <Typography variant="h5" onClick={projectsNav}>
        projects
      </Typography>
      <Typography variant="h5" onClick={contactNav}>
        contact
      </Typography>
      <Button color="inherit">CV</Button>
    </MyWrapper>
  );
};

export default MenuSmall;
