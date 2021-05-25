import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  makeStyles,
  Typography 
} from "@material-ui/core";
import React from "react";
import "../App/App.css";
import logo1 from "../Images/offer1.jpg";
import logo2 from "../Images/offer2.jpg";
import logo3 from "../Images/offer13.jpg";
import logo4 from "../Images/offer4.jpg";
import { Link } from "react-router-dom";


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
  gridContainer: {
    width: "80%",
    justify: "center",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  imageprop: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
  headingStyles: {
    padding: 20,
    fontSize: 24,
    color: "#FE3131",
    fontWeight: "bold",
    paddingBottom: 10,
  },
}));

export default function OffersOnGO() {
  const classes = useStyles();
  return (
    <>
      <div>
        <center>
          <Grid
            container
            className={classes.gridContainer}
            justify="center"
            spacing={0}
            style={{ backgroundColor: "#fff", paddingBottom: "80px" }}
          >
            <Grid lg={12} md={12} sm={12} xs={12}>
              <center>
                <Typography className={classes.headingStyles}>
                  OFFERS ON THE GO{" "}
                </Typography>
              </center>
            </Grid>
            <Grid className={classes.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea component={Link} to="/FreeSugarCheckUP">
                  <CardMedia
                    className={classes.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo1}
                    title="Health Checkup Packages"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={classes.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea component={Link} to="/FreeHealthCheckUp">
                  <CardMedia
                    className={classes.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo2}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={classes.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo3}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={classes.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo4}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </center>
      </div>
    </>
  );
}
