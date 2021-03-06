import React, { useEffect } from "react";
import { Typography, Button, Box, Link } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { styled } from "@mui/system";
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
      padding: "1.05em 0",
      justifyContnet: "space-evenly",
      alignItems: "center",

      img: {
        height: "45px",
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
        cursor: "pointer",
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
              <img src={Github} alt="Github main page"></img>
            </Link>
            <Link
              href="https://www.linkedin.com/in/olly-marsters/"
              target="_blank"
              rel="noopener"
            >
              <img src={Linkedin} alt="Linkedin main page"></img>
            </Link>
          </Box>
          <Box component="div" className="nav-wrapper">
            <ScrollLink to="about" smooth={true} duration={1500}>
              <Typography variant="h5">about</Typography>
            </ScrollLink>
            <Typography variant="h5">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={1500}
                offset={-300}
              >
                projects
              </ScrollLink>
            </Typography>
            <Typography variant="h5">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1500}
                offset={-100}
              >
                contact
              </ScrollLink>
            </Typography>
            <Link
              href="https://o-marsters-1997.github.io/HTML-CV/"
              target="_blank"
              rel="noopener"
            >
              <Button color="inherit">CV</Button>
            </Link>
          </Box>
          <Hamburger onMobileClick={onMobileClick} />
        </MyToolbar>
      </Box>
    </Box>
  );
};

export default Navbar;
