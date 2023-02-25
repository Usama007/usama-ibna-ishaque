import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Intro() {
  return (
    <Grid item lg={6} md={6} sm={12} xs={12} className="intro" alignSelf={'center'}>
      <Typography variant="h6" textAlign={"center"}>
        HI THERE ! THIS IS
      </Typography>
      <Typography variant="h1" textAlign={"center"} className="name">
        Usama Ibna Ishaque
      </Typography>
      <Typography variant="h5" textAlign={"center"} color={"#00e5ff"}>
        Software Engineer
      </Typography>
    </Grid>
  );
}
