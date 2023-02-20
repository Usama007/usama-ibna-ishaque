import { Person } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography,Divider } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Grid item lg={6} md={6} sm={12} xs={12} alignSelf={"center"}>
      <Card className="card" sx={{ borderRadius: 5 }}>
        <CardContent className="cardContent">
          <Typography variant="h2" gutterBottom>
            ABOUT ME
          </Typography>
          <Divider sx={{ color: "#fff" }}>
            <Person className="icon" />
          </Divider>
          <Typography variant="body1" sx={{ textAlign: "left" }}>
            I am a software engineer from Bangladesh. Completed my graduation in
            Computer Science and Software Engineering from American
            International University- Bangladesh. Currently working as a
            software engineer. <br /> <br /> My expertise lies in mobile
            application development and front-end development.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
