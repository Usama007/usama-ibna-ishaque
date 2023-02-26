import { Android, Apple, Close, OpenInNew } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import chefonline from "./../assets/images/chefonline.png";
import chefonlinePartner from "./../assets/images/chefonline-partner.png";
import divethruApp from "./../assets/images/divethru-app.png";
import divethruWeb from "./../assets/images/divethru-webpng.png";
import movieLibrary from "./../assets/images/movieLibrary.png";
import aroma from "./../assets/images/aroma.png";

const itemData = [
  {
    img: divethruApp,
    title: "DiveThru Mobile App",
    description:
      "Find therapist who gets access one-on-one, couples or family through app.",
    isApp: true,
    linkIos:
      "https://apps.apple.com/us/app/divethru-mental-health-app/id1383605874",
    linkadroid:
      "https://play.google.com/store/apps/details?id=com.divethru.divethru",
  },
  {
    img: chefonline,
    title: "Chefonline Mobile App",
    description:
      "An online food ordering platform from different restaurants in UK.",
    isApp: true,
    linkIos: "https://apps.apple.com/us/app/id1007229418#?platform=iphone",
    linkadroid:
      "https://play.google.com/store/apps/details?id=com.chefonline.chefonline",
  },
  {
    img: chefonlinePartner,
    title: "ChefOnline Partner Mobile App",
    description: "Manager's app for the owener of different restaurants in UK.",
    isApp: true,
    linkIos:
      "https://apps.apple.com/us/app/chefonline-manager/id1035647794#?platform=iphone",
    linkadroid:
      "https://play.google.com/store/apps/details?id=com.lechef.SRSIT",
  },
  {
    img: aroma,
    title: "Aroma Radlett Mobile App",
    description:
      "An online food ordering app from Aroma Radlett restaurant in UK.",
    isApp: true,
    linkIos:
      "https://apps.apple.com/us/app/aroma-radlett/id1123929095#?platform=iphone",
    linkadroid:
      "https://play.google.com/store/apps/details?id=com.lechef.Radlett",
  },
  {
    img: divethruWeb,
    title: "DiveThru Web App",
    description:
      "An online mental therapy platform. Through in-person studios and online platform connect today’s generation with therapy, community and self-guided resources.",
    col: 6,
    isApp: false,
    link: "https://app.divethru.com/",
  },
  {
    img: movieLibrary,
    title: "Movie Library Sample Web App",
    description:
      "A sample website developed using ReactJs & Material UI. Moreover 'themoviedb.org' is used as API.",
    col: 6,
    isApp: false,
    link: "https://usama007.github.io/movie-library-web/",
  },
];

export default function Projects({ setOpen }) {
  const [loading, setLoading] = useState(true);

  return (
    <Paper sx={{ paddingBottom: 5, bgcolor: "#1f1b1a" }}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              setOpen(false);
            }}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography
            sx={{ ml: 2, flex: 1 }}
            variant="h4"
            color={"#000"}
            fontWeight="500"
            component="div"
          >
            PROJECTS
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={"xl"}>
        <Grid container spacing={3} mt={2} justifyContent="center">
          {itemData.map((item) => (
            <Grid item lg={item?.col ?? 3} key={item.img}>
              <Card sx={{ borderRadius: 5 }} elevation={3}>
                {loading && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 5,
                      paddingBottom: 5,
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                <CardMedia
                  component={"img"}
                  width={400}
                  sx={[{ objectFit: "fill", height: item?.col ? 400 : 530 }]}
                  srcSet={item.img}
                  onLoad={() => {
                    setLoading(true);
                  }}
                />

                <CardContent sx={{ bgcolor: "#656c6d" }}>
                  <Typography
                    variant="h5"
                    textAlign={"center"}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
                  <Typography>{item?.description}</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    bgcolor: "#656c6d",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: 3,
                  }}
                >
                  {item?.isApp ? (
                    <>
                      <Button
                        variant="outlined"
                        size="large"
                        endIcon={<Apple />}
                        target="_blank"
                        href={item?.linkIos}
                      >
                        App store{" "}
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        endIcon={<Android />}
                        target="_blank"
                        href={item?.linkadroid}
                      >
                        Playstore
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="outlined"
                      size="large"
                      endIcon={<OpenInNew />}
                      target="_blank"
                      href={item?.link}
                    >
                      Go To Website
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}
