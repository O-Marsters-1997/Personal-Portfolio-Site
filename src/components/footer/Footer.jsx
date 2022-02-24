import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const MyWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.footer,
    color: theme.palette.text.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem 0 1rem 0",
    boxShadow: `0px 0px 30px 0px ${theme.palette.primary.footer}`,
    fontStyle: "italic",

    ".footer-line-wrapper": {
      display: "flex",

      "	.MuiTypography-root": {
        fontSize: ".905rem",
        letterSpacing: ".1em",
        marginRight: ".6rem",
      },
      "&:first-child::before": {
        content: "'\\00A9'",
        verticalAlign: "center",
        justifySelf: "center",
        marginRight: ".35rem",
        fontSize: "1.2em",
        transform: "translateY(-2.5px)",
        fontStyle: "normal",
      },

      "	.github-icon": {
        cursor: "pointer",
        color: theme.palette.text.primary,
        transition: "all .25s ease-out",
        "&:hover": {
          color: theme.palette.text.accent,
        },
      },
    },
  }));
  return (
    <MyWrapper>
      <Box component="div" className="footer-line-wrapper">
        <Typography variant="subtitle2">
          Developed by Olly Marsters, 2022
        </Typography>
      </Box>
      <Box component="div" className="footer-line-wrapper">
        <Typography
          variant="subtitle2"
          className="footer-line-wrapper-pre-github"
        >
          See the source code for this project here{" "}
        </Typography>
        <Link
          href="https://github.com/O-Marsters-1997/Personal-Portfolio-Site"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon className="github-icon" />
        </Link>
      </Box>
    </MyWrapper>
  );
};

export default Footer;
