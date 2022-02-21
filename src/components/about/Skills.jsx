import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import HTML from "../../assets/images/html-white.svg";
import CSS from "../../assets/images/css-white.svg";
import JS from "../../assets/images/javascript-white.svg";
import SASS from "../../assets/images/sass-white.svg";
import RE from "../../assets/images/react-white.svg";

const Skills = () => {
  const MySkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    paddingTop: "8.5rem",

    ".MuiTypography-h3": {
      textTransform: "uppercase",
      margin: "0 auto",
      width: "fit-content",

      ".underline": {
        width: "60%",
        margin: "1.8rem auto 2.2rem auto",
        height: "4px",
        backgroundColor: theme.palette.text.primary,
        borderRadius: "5px",
      },
    },
  }));
  return (
    <MySkills component="div">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Skills
            <Box component="div" className="underline"></Box>
          </Typography>
          <Grid container spacing={2} className="inner-skills-grid">
            <Grid item xs={6}>
              <img src={HTML}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={CSS}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={JS}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={SASS}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={RE}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={HTML}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={HTML}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={HTML}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={HTML}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={HTML}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={HTML}></img>
            </Grid>
            <Grid item xs={6}>
              <img src={HTML}></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MySkills>
  );
};

export default Skills;
