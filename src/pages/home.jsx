import {
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Grid,
  Skeleton,
} from "@mui/material";
import "./homeStyles.css";
import Intro from "../components/Intro";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import usama from "./../assets/images/usama.jpg";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

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
          {/* <p>{window.innerWidth }</p> */}
          {loading && (
            <Skeleton height={window.innerWidth < 500 ? 500 : 875} />
          )}
          <CardMedia
            component={"img"}
            height={875}
            sx={[{ objectFit: "contain", backgroundColor: "#1f1b1a" }]}
            srcSet={usama}
            onLoad={() => {
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
            className="profilePic"
            style={{ display: loading ? "none" : "block" }}
          />

          {/* <CardMedia
            component="img"
            sx={{ objectFit: "contain", backgroundColor: "#1f1b1a" }}
            height={850}
            srcSet={usama}
            alt="usama"
            className="profilePic"
          /> */}
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
