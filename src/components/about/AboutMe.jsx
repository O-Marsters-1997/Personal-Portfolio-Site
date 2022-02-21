import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import PersonalProfileImage from "../../assets/images/PersonalProfileImage.jpg";

const AboutMe = () => {
  const MyWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,

    ".MuiGrid-container": {
      width: "clamp(250px, 75vw, 1850px)",
      margin: "0 auto",
    },
    ".MuiTypography-h3": {
      width: "fit-content",
      margin: "0 auto",
    },

    ".hello": {},

    ".profile-image-wrapper": {
      width: "100%",
      position: "relative",

      img: {
        width: "80%",
        height: "100%",
        borderRadius: "10px",
      },

      ".profile-image-overlay": {
        zIndex: "100",
        position: "absolute",
        top: 0,
        width: "80%",
        height: "100%",
        borderRadius: "10px",
        backgroundColor: theme.palette.primary.overlay,
        transition: "background-color .5s ease-in",

        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  }));
  return (
    <MyWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">About</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            rem aliquid quae voluptatibus at omnis natus? Quidem ducimus
            pariatur adipisci voluptatum necessitatibus minima beatae facere
            error, voluptatem libero unde sequi vero accusamus? Corporis ipsa
            eius repellat nulla at quam voluptates laboriosam, officia eveniet
            illum, corrupti quisquam optio. Officia error aspernatur dolorum!
            Vitae error officiis nesciunt repellat perferendis asperiores
            eligendi, voluptatibus sunt nam laboriosam ipsum cum temporibus
            nihil reiciendis recusandae possimus? Ex, obcaecati dolor?
            Voluptates cumque omnis sequi consequuntur amet eveniet quod
            tempora, consectetur nostrum magnam, in modi debitis ullam? Deleniti
            maxime unde eveniet veniam magnam hic, deserunt officia cumque
            beatae?
          </Typography>
        </Grid>
        <Grid item xs={12} className="hello">
          <Box component="div" className="profile-image-container">
            <Box component="div" className="profile-image-wrapper">
              <img src={PersonalProfileImage}></img>
              <Box component="div" className="profile-image-overlay"></Box>
              <Box component="div" className="profile-image-outline"></Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MyWrapper>
  );
};

export default AboutMe;
