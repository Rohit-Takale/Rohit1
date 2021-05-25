import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo1 from "../Images/bloodtest.jpg";
import logo2 from "../Images/scans.jpg";
import "../App/App.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import styled from "styled-components";

const ButtonHome = styled.button`
  background-color: #fe3131;
  color: #fff;
  font-family: "Roboto", sans-serif;
  margin: 5px 5px;
  padding: 0px 0px;
  width: 90px;
  height: 25px;
  cursor: pointer;
  font-size: 0.7rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
  border-color: #fe3131;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 375,
    minWidth: 300,
    maxHeight: 200,
    minHeight: 200,
    margin: theme.spacing(1),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    width: 150,
  },
  cover: {
    width: 200,
    objectFit: "fill",
  },
  headingStyles: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FE3131",
  },
  gridContainer: {
    width: "80%",
    justify: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 50,
  },
  imageprop: {
    width: "50%",
    height: "50%",
    objectFit: "fill",
    borderRadius: 10,
  },
  cardtext: {
    fontSize: 14,
    color: "#474747",
    margin: 5,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#474747",
  },
}));

export default function TopTestsScans() {
  const classes = useStyles();
  return (
    <>
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <center>
          <Grid
            container
            justify="center"
            className={classes.gridContainer}
            style={{ backgroundColor: "#EEEEEE" }}
            spacing={1}
          >
            <Grid lg={12} md={12} sm={12} xs={12}>
              <center>
                <div>
                  <Typography
                    className={classes.headingStyles}
                    style={{ paddingBottom: 10 }}
                  >
                    TOP TESTS & SCANS
                  </Typography>
                  <Typography
                    className={classes.cardtext}
                    style={{ fontWeight: "bold" }}
                  >
                    Most Frequently used tests
                  </Typography>
                </div>
              </center>
            </Grid>

            <Grid item className={classes.root} xs={12} md={6} lg={6} sm={6}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography className={classes.cardHeading}>
                      Blood Tests
                    </Typography>
                    <div>
                      <Typography className={classes.cardtext}>
                        - Mac Miller
                      </Typography>
                      <Typography className={classes.cardtext}>
                        - Mac Miller
                      </Typography>
                      <Typography className={classes.cardtext}>
                        - Mac Miller
                      </Typography>
                      <Typography className={classes.cardtext}>
                        - Mac Miller
                      </Typography>
                    </div>
                  </CardContent>
                  <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
                    <ButtonHome
                     
                      style={{
                
                        width: 80,
                        
                      }}
                    >
                      Visit
                    </ButtonHome>
                  </div>
                </div>
                <CardMedia
                  className={classes.cover}
                  image={logo1}
                  title="Live from space album cover"
                />
              </Card>
            </Grid>
            <Grid item className={classes.root} xs={12} md={6} lg={6} sm={6}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography className={classes.cardHeading}>
                      Scans
                    </Typography>
                    <div>
                      <Typography className={classes.cardtext}>
                        - Mac Miller
                      </Typography>
                      <Typography className={classes.cardtext}>
                        - Mac Miller
                      </Typography>
                      <Typography className={classes.cardtext}>
                        - Mac Miller
                      </Typography>
                      <Typography className={classes.cardtext}>
                        - Mac Miller
                      </Typography>
                    </div>
                  </CardContent>
                  <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
                    <ButtonHome
                    >
                      Visit
                    </ButtonHome>
                  </div>
                </div>
                <CardMedia
                  className={classes.cover}
                  image={logo2}
                  title="Live from space album cover"
                />
              </Card>
            </Grid>
          </Grid>
        </center>
      </div>
    </>
  );
}
