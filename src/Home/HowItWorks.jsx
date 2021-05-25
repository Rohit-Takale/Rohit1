import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo1 from "../Images/Group 1601.svg";
import logo2 from "../Images/Group 1602.svg";

import "../App/App.css";
import { Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";

const cardStyles = makeStyles({
  gridContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: "white",
    paddingBottom: 20,
  },
  imageprop: {
    paddingTop: 30,
    width: "100%",
    height: "100%",
    paddingBottom: 30,
    objectFit: "fill",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 200,
    margin: theme.spacing(1),
  
  },
  headingStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FE3131",
  },
}));

export default function HowItWorks() {
  const classes = useStyles();
  const crd = cardStyles();
  return (
    <>
      <Grid
        container
        justify="center"
        className={crd.gridContainer}
        spacing={1}
      >
        <Grid item xs={12} lg={12} sm={12} md={12}>
          <div>
            <center>
              <Typography className={classes.headingStyle}>
                HOW IT WORKS
              </Typography>
            </center>
          </div>
        </Grid>
        <Grid item className={classes.root} xs={12} md={4} lg={4} sm={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={crd.imageprop}
                component="video"
                style={{ backgroundColor: "#9D9999" }}
                alt="Contemplative Reptile"
                image={logo2}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item className={classes.root} xs={12} md={4} lg={4} sm={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={crd.imageprop}
                component="video"
                style={{ backgroundColor: "#9D9999" }}
                alt="Contemplative Reptile"
                image={logo2}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item className={classes.root} xs={12} md={4} lg={4} sm={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={crd.imageprop}
                component="video"
                style={{ backgroundColor: "#9D9999" }}
                alt="Contemplative Reptile"
                image={logo2}
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
