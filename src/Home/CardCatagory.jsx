import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import "../App/App.css";
import logo1 from "../Images/Group 1601.svg";
import logo2 from "../Images/Group 1602.svg";
import logo3 from "../Images/odnoklassniki.svg";
import logo4 from "../Images/Path 1278.svg";
import clsx from "clsx";

const cardStyles = makeStyles({
  gridContainer: {
    width: "80%",
    justify: "center",
    alignItems: "center",
    backgroundColor:"#EEEEEE",
  },
  imageprop: {
    marginTop: 20,
    width: 30,
    height: 30,
    objectFit: "fill",
    justify: "center",
  },

  title: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 210,
    maxWidth: 210,
    maxHeight: 130,
    minHeight: 124,
    paddingBottom: 10,
    margin: theme.spacing(1),
    justify: "center",
  },
  headingStyle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  smallHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headingSpace: {
    paddingTop:20,
    paddingBottom:10
  },
  textStyle: {
    fontSize: 14,
    color: "#9D9999",
    paddingBottom:20
  },
}));

export default function CardCatagory() {
  const classes = useStyles();
  const crd = cardStyles();
  return (
    <>
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <div>
          <center>
            <Typography
              style={{ color: "#FE3131", backgroundColor: "#EEEEEE" }}
              className={clsx(classes.headingSpace, classes.headingStyle)}
            >
              Browse By Category
            </Typography>
          </center>

          <center>
            <div>
              <Typography
                style={{ backgroundColor: "#EEEEEE" }}
                className={clsx(classes.textStyle)}
              >
                Discover different types of tests.
              </Typography>
            </div>
          </center>
        </div>
        <center>
          <Grid
            container
            className={crd.gridContainer}
            justify="center"
            spacing={0}
          >
            <Grid item xs={12} md={4} sm={6} lg={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <center>
                    <CardMedia
                      className={crd.imageprop}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={logo1}
                      title="Health Checkup Packages"
                    />
                  </center>
                  <CardContent>
                    <center>
                      <Typography className={classes.smallHeading}>
                        Health Checkup Packages
                      </Typography>
                    </center>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <center>
                    <CardMedia
                      className={crd.imageprop}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={logo2}
                      title="Contemplative Reptile"
                    />
                  </center>
                  <CardContent>
                    <center>
                      <Typography className={classes.smallHeading}>
                        Health Checkup Catagories
                      </Typography>
                    </center>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <center>
                    <CardMedia
                      className={crd.imageprop}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={logo3}
                      title="Contemplative Reptile"
                    />
                  </center>
                  <CardContent>
                    <center>
                      <Typography
                        style={{ paddingBottom: 20 }}
                        className={classes.smallHeading}
                      >
                        Free Health Checkup Camps
                      </Typography>
                    </center>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <center>
                    <CardMedia
                      className={crd.imageprop}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={logo4}
                      title="Contemplative Reptile"
                    />
                  </center>
                  <CardContent>
                    <center>
                      <Typography
                        style={{ paddingBottom: 20 }}
                        className={classes.smallHeading}
                      >
                        Offers & Services
                      </Typography>
                    </center>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </center>
      </div>
    </>
  );
}
