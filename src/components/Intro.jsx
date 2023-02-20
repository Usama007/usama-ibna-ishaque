import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Intro() {
  return (
    <Grid item lg={6} md={6} sm={12} xs={12} alignSelf={"center"}>
      <Typography variant="h6" textAlign={"center"}>
        HI THERE ! THIS IS
      </Typography>
      <Typography variant="h2" textAlign={"center"}>
        Usama Ibna Ishaque
      </Typography>
      <Typography variant="h5" textAlign={"center"} color={"#00e5ff"}>
        Software Engineer
      </Typography>
    </Grid>
  );
}
