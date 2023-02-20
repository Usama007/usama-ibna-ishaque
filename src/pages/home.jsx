import { Card, CardMedia, Grid } from "@mui/material";
import "./homeStyles.css";
import Intro from "../components/Intro";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import usama from "./../assets/images/usama.jpg";


export default function Home() {
  return (
    <Grid
      container
      spacing={5}
      sx={{
        display: "flex",
        height: "100%",
        alignItems: "center",
      }}
   
    >
      <Grid item lg={4} md={4} sm={6} xs={12}>
        <Card sx={{ borderRadius: 5 }}>
          <CardMedia
            component="img"
            sx={{objectFit:'cover'}}
            height={850}
            srcSet={usama}
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item lg={8} md={8} sm={6} xs={12}>
        <Grid container spacing={5} alignSelf="center">
          <Intro />
          <About />
          <Portfolio />
          <Contact />
        </Grid>
      </Grid>
    </Grid>
  );
}
