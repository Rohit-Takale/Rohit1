import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CoverPhoto from "../Images/FreeHealthCheckUp.jpg";
import logo1 from "../Images/offer1.jpg";
import logo2 from "../Images/offer2.jpg";
import logo3 from "../Images/offer13.jpg";
import logo4 from "../Images/offer4.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  image: {
    width: "100%",
  },
  grid: {
    backgroundImage: `url(${CoverPhoto})`,
    backgroundSize: "1700px",
    width: "80%",
    height: "300px",
    marginLeft: "200px",
    marginRight: "200px",
  },
  griditem: {
    paddingTop: "20px",
    paddingLeft: "100px",
  },
  griditem2: {
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "30px",
    paddingRight: "30px",
    width: "80%",
  },
  grid2: {
    width: "80%",
    marginLeft: "200px",
    marginRight: "200px",
    backgroundColor: "#EEEEEE",
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

const buttonStyles = makeStyles({
  btn: {
    fontSize: "0.7rem",
    fontWeight: "bold",
    height: "30px",
    width: "150px",
  },
});

const cardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    maxHeight: 200,
    margin: theme.spacing(3),
    paddingTop: "20px",
  },
  gridContainer: {
    paddingLeft: "150px",
    paddingRight: "150px",
  },
  imageprop: {
    width: 350,
    height: 200,
    objectFit: "fill",
  },
}));

export default function FreeSugarCheckUP() {
  const classes = useStyles();
  const btn2 = buttonStyles();
  const crd = cardStyles();
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Grid Container style={{ paddingTop: "30px" }} className={classes.grid}>
          <Grid
            item
            className={classes.griditem}
            xs={12}
            lg={12}
            sm={12}
            md={12}
          >
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", color: "#FE3131" }}
            >
              Free Sugar Test
            </Typography>
            <Typography
              variant="h5"
              style={{
                paddingTop: "20px",
                color: "#474747",
                fontWeight: "bold",
              }}
            >
              Get free sugar today
            </Typography>
            <Typography
              variant="h6"
              style={{
                paddingTop: "30px",
                color: "#474747",
                fontWeight: "bold",
              }}
            >
              Offering Vendor Name
            </Typography>
            <div style={{ paddingTop: "20px" }}>
              <Button
                variant="contained "
                component={Link}
                to="/TestDetails"
                className={btn2.btn}
                style={{
                  backgroundColor: "#4DDAF8",
                  border: "2px solid #4DDAF8",
                  color: "white",
                  fontWeight: "normal",
                  borderRadius: "10px",
                }}
              >
                Know More
              </Button>
              <span style={{ paddingLeft: "15px" }}>
                <Button
                  variant="contained "
                  style={{
                    backgroundColor: "red",
                    border: "2px solid red",
                    color: "white",
                    fontWeight: "normal",
                    borderRadius: "10px",
                  }}
                  className={btn2.btn}
                >
                  Register
                </Button>
              </span>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.grid2}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            className={classes.griditem2}
          >
            <Typography
              style={{ color: "#FE3131", fontWeight: "bold", fontSize: "25px" }}
            >
              NAME OF FREE HEALTH CHECKUP CAMP
            </Typography>
            <Typography
              variant="h6"
              style={{
                color: "#474747",
                fontWeight: "bold",
                paddingTop: "30px",
              }}
            >
              Description:
            </Typography>
            <Typography style={{ color: "#474747" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco poriti
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in uienply voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              norin proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            className={classes.griditem2}
          >
            <Card style={{ minWidth: "350px" }}>
              <CardContent>
                <div style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                  <Typography className={classes.title} gutterBottom>
                    On 14th Feb, At 9AM Onwards
                  </Typography>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <Typography>ADDRESS:</Typography>
                  </div>
                  <div style={{ flex: 1, float: "left" }}>
                    <Typography className={classes.pos} color="textSecondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      tempor incididunt ut ero labore et dolore magna aliqua.
                    </Typography>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <Typography>CONTACT:</Typography>
                  </div>
                  <div style={{ flex: 1, float: "left" }}>
                    <Typography className={classes.pos} color="textSecondary">
                      +91 9876543210 / +91 9123456789 / +91 9517538520
                    </Typography>
                  </div>
                </div>
              </CardContent>

              <CardActions>
                <div style={{ paddingLeft: "340px" }}>
                  <Button
                    variant="contained "
                    className={btn2.btn}
                    style={{
                      backgroundColor: "#FE3131",
                      border: "2px solid #FE3131",
                      color: "white",
                      fontWeight: "normal",
                      borderRadius: "10px",
                    }}
                  >
                    Register
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <div>
          <Grid
            container
            className={crd.gridContainer}
            justify="center"
            spacing={0}
            style={{
              backgroundColor: "#fff",
              paddingBottom: "20px",
              paddingTop: "20px",
            }}
          >
            <Grid lg={12} md={12} sm={12} xs={12}>
              <h1
                justify="center"
                style={{ textAlign: "center", color: "red" }}
              >
                OFFERS ONLINE
              </h1>
            </Grid>
            <Grid className={crd.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={crd.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo1}
                    title="Health Checkup Packages"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={crd.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={crd.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo2}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={crd.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={crd.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo3}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={crd.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={crd.imageprop}
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
        </div>
        <div>
          <Grid
            container
            className={crd.gridContainer}
            justify="center"
            spacing={0}
            style={{
              backgroundColor: "#fff",
              paddingBottom: "80px",
              paddingTop: "30px",
            }}
          >
            <Grid lg={12} md={12} sm={12} xs={12}>
              <h1
                justify="center"
                style={{ textAlign: "center", color: "red" }}
              >
                UPCOMING OFFERS
              </h1>
            </Grid>
            <Grid className={crd.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={crd.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo1}
                    title="Health Checkup Packages"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={crd.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={crd.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo2}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={crd.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={crd.imageprop}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={logo3}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={crd.root} item xs={12} md={4} sm={6} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={crd.imageprop}
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
        </div>
      </div>
    </>
  );
}
