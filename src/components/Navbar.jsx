import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { bgcolor, styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Github from "../assets/images/github-white.svg";
import Linkedin from "../assets/images/linkedin.svg";

const Navbar = ({ theme }) => {
  const MyToolbar = styled("Appar")(({ theme }) => ({
    position: "relative",
    display: "flex",
    backgroundColor: theme.palette.primary.modifier,
    justifyContent: "flex-start",

    ".icon-wrapper": {
      marginLeft: "5%",
      display: "flex",
      width: "30%",
      padding: "2em 0",
      justifyContnet: "space-evenly",
      alignItems: "center",

      img: {
        height: "3.5rem",
        paddingRight: "5em",
        cursor: "pointer",
        "&:hover": {
          filter:
            "brightness(0) saturate(100%) invert(85%) sepia(28%) saturate(2489%) hue-rotate(322deg) brightness(102%) contrast(88%)",
        },
      },
    },

    ".nav-wrapper": {
      marginRight: "5%",
      marginLeft: "auto",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "50%",
      fontVariant: "small-caps",
      textTransform: "uppercase",

      "	.MuiTypography-root": {
        marginRight: ".8rem",
        fontSize: "1.5rem",
      },
      ".MuiButton-root": {
        fontSize: "1.5rem",
        padding: "0 1.34em",
      },
    },
  }));

  return (
    <Box className="navbar">
      <AppBar position="relative" sx={{ mt: "-30px" }}>
        <MyToolbar>
          <Box component="div" className="icon-wrapper">
            <img src={Github}></img>
            <img src={Linkedin}></img>
          </Box>
          <Box component="div" className="nav-wrapper">
            <Typography variant="h5">about</Typography>
            <Typography variant="h5">projects</Typography>
            <Typography variant="h5">contact</Typography>
            <Button color="inherit">CV</Button>
          </Box>
        </MyToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
