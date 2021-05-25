import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import "../App/App.css";
import logo1 from "../Images/offer1.jpg";
import logo2 from "../Images/offer2.jpg";
import logo3 from "../Images/offer13.jpg";
import logo4 from "../Images/offer4.jpg";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 210,
    maxWidth: 210,
    maxHeight: 130,
    minHeight: 124,
    margin: theme.spacing(4),
    justify: "center",
  
  },
  gridContainer: {
    width:'80%',
    paddingBottom: 30,
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

const Button = styled.button`
  background-color: #FFFFFF;
  color: 'black';
  padding: 0px 0px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  font-size: 0.7rem;
  text-transform: uppercase;
  border-radius: 5px;
  border:'0.5px solid #474747';
`;

export default function TestPackages() {
  const classes = useStyles();
  return (
    <>
      <center>
        <Grid
          container
          className={classes.gridContainer}
          justify="center"
          spacing={0}
        >
          <Grid lg={12} md={12} sm={12} xs={12}>
            <h1
              justify="center"
              style={{
                textAlign: "left",
                paddingLeft: "80px",
                color: "#9D9999",
              }}
            >
              Packages
            </h1>
          </Grid>

          <Grid className={classes.root} item xs={12} md={4} sm={6} lg={3}>
            <Card>
              <CardActionArea>
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
            <div style={{ margin: 10 }}>
              <center>
               
                  <Button variant="outlined">ADD TO CART</Button>
                
              </center>
            </div>
          </Grid>
          <Grid className={classes.root} item xs={12} md={4} sm={6} lg={3}>
            <Card>
              <CardActionArea>
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
            <div style={{ padding: 10 }}>
              <center>
                <Button variant="outlined">ADD TO CART</Button>
              </center>
            </div>
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
            <div style={{ padding: 10 }}>
              <center>
                <Button variant="outlined">ADD TO CART</Button>
              </center>
            </div>
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
            <div style={{ padding: 10 }}>
              <center>
                <Button variant="outlined">ADD TO CART</Button>
              </center>
            </div>
          </Grid>
        </Grid>
      </center>
    </>
  );
}
