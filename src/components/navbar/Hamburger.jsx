import React, { useState } from "react";
import { Box } from "@mui/material";

import { styled } from "@mui/system";

const Hamburger = ({ onMobileClick }) => {
  const handleClick = () => {
    onMobileClick();
  };

  const MyHamburger = styled("div")(({ theme }) => ({
    height: "80px",
    width: "80px",
    alignSelf: "center",
    justifySelf: "center",
    position: "relative",
    display: "none",

    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%",
    marginLeft: "auto",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },

    ".hamburger-line-closed": {
      width: "50px",
      height: "6px",
      backgroundColor: theme.palette.text.primary,
      borderRadius: "5px",

      "&::after, ::before": {
        content: "''",
        position: "absolute",
        width: "50px",
        height: "6px",
        backgroundColor: theme.palette.text.primary,
        borderRadius: "5px",
      },

      "&::before": {
        transform: "translateY(-16px)",
      },

      "&:after": {
        transform: "translateY(16px)",
      },
    },
    ".hamburger-line-open": {
      transition: "all .5s ease-in-out",
      width: "50px",
      height: "6px",
      backgroundColor: "transparent",
      borderRadius: "5px",
      transform: "translateX(-30px)",
      "&::after, ::before": {
        content: "''",
        position: "absolute",
        width: "50px",
        height: "6px",
        backgroundColor: theme.palette.text.primary,
        borderRadius: "5px",
      },

      "&::before": {
        transform: "translateX(50px) rotate(-45deg)",
        transition: "all .5s ease-in-out",
      },

      "&:after": {
        transform: "translateX(50px) rotate(45deg)",
        transition: "all .5s ease-in-out",
      },
    },
  }));
  return (
    <MyHamburger
      component="div"
      className="hamburger-wrapper"
      onClick={() => {
        handleClick();
      }}
    >
      <Box
        component="div"
        id="hamburger-line"
        className="hamburger-line-closed"
      ></Box>
    </MyHamburger>
  );
};

export default Hamburger;
