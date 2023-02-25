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
      <Grid item lg={4} md={4} sm={12} xs={12} pb={2}>
        <Card sx={{ borderRadius: 5 }} elevation={0}>
          <CardMedia
            component="img"
            sx={{objectFit:'contain',backgroundColor:'#1f1b1a'}}
          
            height={850}
            srcSet={usama}
            alt="usama"
            className="profilePic"
          />
        </Card>
      </Grid>
      <Grid item lg={8} md={8} sm={12} xs={12} pb={2}>
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
