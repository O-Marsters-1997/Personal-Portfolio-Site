import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Link,
} from "@mui/material";
import {
  Link as ScrollLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { bgcolor, styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Hamburger from "./Hamburger";
import Github from "../../assets/images/github-white.svg";
import Linkedin from "../../assets/images/linkedin.svg";

const Navbar = ({ mobileMenu, onMobileClick }) => {
  const MyToolbar = styled("div")(({ theme }) => ({
    width: "100vw",
    position: "relative",
    top: 0,
    display: "flex",
    backgroundColor: theme.palette.primary.modifier,
    justifyContent: "flex-start",
    boxShadow: "none",
    borderBottom: `3.85px solid ${theme.palette.primary.navAccent}`,
    zIndex: 200,

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
        [theme.breakpoints.down("md")]: {
          paddingRight: "2em",
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
      [theme.breakpoints.down("md")]: {
        display: "none",
      },

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

  useEffect(() => {
    navChange();
  });

  const navChange = () => {
    const header = document.getElementsByClassName("navbar")[0];
    const welcomePage = document.getElementsByClassName("canvas-container")[0];
    const options = {};
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && !mobileMenu) {
          header.classList.add("nav-fixed");
        } else {
          header.classList.remove("nav-fixed");
        }
      });
    }, options);
    observer.observe(welcomePage);
  };

  const scrollIntoView = () => {};

  return (
    <Box onClick={navChange}>
      <Box sx={{ mt: "-30px", boxShadow: "none" }}>
        <MyToolbar className="navbar">
          <Box component="div" className="icon-wrapper">
            <Link
              href="https://github.com/O-Marsters-1997"
              target="_blank"
              rel="noopener"
            >
              <img src={Github}></img>
            </Link>
            <Link
              href="https://www.linkedin.com/in/olly-marsters/"
              target="_blank"
              rel="noopener"
            >
              <img src={Linkedin}></img>
            </Link>
          </Box>
          <Box component="div" className="nav-wrapper">
            <Typography variant="h5">
              <ScrollLink to="about" smooth={true} duration={1000}>
                about
              </ScrollLink>
            </Typography>
            <Typography variant="h5">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={1000}
                offset={-150}
              >
                projects
              </ScrollLink>
            </Typography>
            <Typography variant="h5">
              <ScrollLink to="contact" smooth={true} duration={1000}>
                contact
              </ScrollLink>
            </Typography>
            <Button color="inherit">CV</Button>
          </Box>
          <Hamburger onMobileClick={onMobileClick} />
        </MyToolbar>
      </Box>
    </Box>
  );
};

export default Navbar;
