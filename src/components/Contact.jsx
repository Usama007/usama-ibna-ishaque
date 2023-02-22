import { ContactMail } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Grid item lg={6} md={6} sm={12} xs={12}>
      <Card className="card" sx={{ borderRadius: 5 }}>
        <CardContent className="cardContent">
          <Typography variant="h2" gutterBottom>
            GET IN TOUCH
          </Typography>
          <Divider sx={{ color: "#fff", paddingBottom: 2 }}>
            <ContactMail className="icon" />
          </Divider>
          <Grid container sx={{maxHeight:280,overflow:'auto'}}>
            <Grid item lg={12}>
              <Grid container>
                <Grid item lg={12}>
                  <Typography textAlign={"left"} variant={"body1"} gutterBottom>
                    Hey, let's code something epic together! If you're looking
                    for a software engineer who knows their stuff and has a
                    great sense of humor, look no further. Let's make some magic
                    happen! 😉
                  </Typography>
                  <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                </Grid>
                <Grid item lg={6} textAlign={"left"}>
                  <Typography gutterBottom className="contactTypo" pb={1}>
                    Cell :{" "}
                    <Link
                      sx={{
                        color: "#00e5ff",
                        textDecoration: "underLine",                       
                      }}
                      href={`tel:${"+8801688709420"}`}
                    >
                  +8801688709420
                    </Link>
                  </Typography>

                  <Typography gutterBottom className="contactTypo" pb={1}>
                   Address : Dhaka, Bangladesh
                  </Typography>

                  <Typography gutterBottom>Date of Birth : 20 March, 1994</Typography>
                </Grid>

                <Grid item lg={6} textAlign={"left"}>
                  <Typography gutterBottom className="contactTypo" pb={1}>
                    Email :{" "}
                    <Link
                      sx={{
                        color: "#00e5ff",
                        textDecoration: "underLine",
                      }}
                      href={`mailto:${"usamacsse53@gmail.com"}`}
                    >
                      usamacsse53@gmail.com
                    </Link>
                  </Typography>
                  <Typography gutterBottom className="contactTypo" pb={1}>
                    Nationality : Bangladeshi
                  </Typography>

                  <Typography gutterBottom className="contactTypo" pb={1}>
                    Languages : Bangla, English
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
