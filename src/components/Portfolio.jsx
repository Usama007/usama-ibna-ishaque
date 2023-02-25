import { AccountTree, Newspaper, OpenInNew, Work } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  Divider,
  Grid,
  Link,
  Slide,
  Typography,
} from "@mui/material";
import myPdf from "./../assets/Resume_Usama_Ibna_Ishaque.pdf";
import React, { forwardRef, useState } from "react";
import { saveAs } from "file-saver";
import Projects from "./Projects";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <Grid item lg={6} md={6} sm={12} xs={12}>
      <Card className="card" sx={{ borderRadius: 5 }}>
        <CardContent className="cardContent">
          <Typography variant="h2" gutterBottom>
            MY PORTFOLIO
          </Typography>
          <Divider sx={{ color: "#fff" }}>
            <Work className="icon" />{" "}
          </Divider>

          <Grid container spacing={1} pb={2} >
            <Grid item lg={12} sx={{justifyContent:'space-between',width:'100%'}}>
              <Grid container pb={2} spacing={2} >
                <Grid item lg={6} sm={6} xs={6} textAlign="left">
                  <Typography variant="body1">Work Experience :</Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={6} textAlign="right">
                  <Typography variant="body1">5 Years</Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={5} textAlign="left">
                  <Typography variant="body1">Current Workplace :</Typography>
                </Grid>
                <Grid
                  item
                  lg={6}
                  sm={6}
                  xs={7}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <Link
                    href="https://techcare.co/"
                    sx={{
                      color: "#00e5ff",
                      textDecoration: "underLine",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    TechCare Inc <OpenInNew />
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={12}>
              <Grid container  spacing={1}>
                <Grid item lg={3}>
                  <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
                    Worked With :
                  </Typography>
                </Grid>
                <Grid item lg={9}>
                  <Grid container spacing={2} >
                    <Grid item>
                      <Chip
                        color="secondary"
                        variant="outlined"
                        label="React Js"
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        color="secondary"
                        variant="outlined"
                        label="React Native"
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        color="secondary"
                        variant="outlined"
                        label="Angular"
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        color="secondary"
                        variant="outlined"
                        label="JavaScript"
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        color="secondary"
                        variant="outlined"
                        label="Ionic Framework"
                      />
                    </Grid>
                    <Grid item>
                      <Chip
                        color="secondary"
                        variant="outlined"
                        label="Native Android Development(Java)"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: 1, marginBottom: 2 }} />

          <Grid container spacing={3}  justifyContent="center">
            <Grid item lg={6}>
              <Button
                variant="outlined"
                size="large"
                sx={{ width: "100%" }}
                onClick={() => {
                  saveAs(myPdf, "Resume_Usama_Ibna_Ishaque.pdf");
                }}
                color={"secondary"}
                endIcon={<Newspaper />}
              >
                Download Resume
              </Button>
            </Grid>
            <Grid item lg={6}>
              <Button
                variant="outlined"
                size="large"
                sx={{ width: "100%" }}
                color={"secondary"}
                onClick={() => {
                  setOpen(true);
                }}
                endIcon={<AccountTree />}
              >
                View Projects
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        TransitionComponent={Transition}
      >
        <Projects setOpen={setOpen} />
      </Dialog>
    </Grid>
  );
}
