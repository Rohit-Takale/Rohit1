import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import logo1 from "../Images/lakeView.jpg";
import "../App/App.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const ButtonHome = styled.button`
  background-color: #fe3131;
  color: #fff;
  font-family: "Roboto", sans-serif;
  margin: 5px 5px;
  padding: 0px 0px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  font-size: 0.7rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
  border-color: #fe3131;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    minWidth: 250,
    maxHeight: 200,
    maxHeight: 200,
    backgroundColor: "#FBF9F9",
    margin: theme.spacing(1),
    justify: "center",
  },
  media: {
    marginTop: 20,
    width: 120,
    height: 30,
    marginLeft: 60,
    objectFit: "fill",
  },
  text: {
    fontSize: 14,
    color: "#474747",
  },
  headingStyles: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  gridContainer: {
    width: "80%",
    justify: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#FE3131",
  },
  imageprop: {
    paddingTop: 30,
    width: 60,
    height: 60,
    paddingBottom: 30,
    objectFit: "fill",
  },

  title: {
    textAlign: "center",
  },
 
}));


export default function Featured() {
  const classes = useStyles();

  const { push } = useHistory();
  return (
    <>
      <div style={{ backgroundColor: "#FE3131" }}>
        <center>
          <Grid container className={classes.gridContainer} justify="center">
            <Grid lg={12} md={12} sm={12} xs={12}>
              <center>
                <Typography className={classes.headingStyles}>
                  Featured
                </Typography>
              </center>
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={3}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={logo1}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.text}>
                    LakeView Hospital
                    <br />
                    <text>
                      Type of Tests : Blood Test, Urine Test, Sugar Test etc
                    </text>
                  </Typography>
                </CardContent>
                <div>
                  <CardActions>
                    <ButtonHome
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#FE3131",
                      }}
                    >
                      Visit
                    </ButtonHome>
                    <IconButton
                      aria-label="add to favorites"
                      style={{ marginLeft: "auto" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={3}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={logo1}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.text}>
                    LakeView Hospital
                    <br />
                    <text>
                      Type of Tests : Blood Test, Urine Test, Sugar Test etc
                    </text>
                  </Typography>
                </CardContent>
                <div>
                  <CardActions>
                    <ButtonHome
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#FE3131",
                      }}
                    >
                      Visit
                    </ButtonHome>
                    <IconButton
                      aria-label="add to favorites"
                      style={{ marginLeft: "auto" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={3}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={logo1}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.text}>
                    LakeView Hospital
                    <br />
                    <text>
                      Type of Tests : Blood Test, Urine Test, Sugar Test etc
                    </text>
                  </Typography>
                </CardContent>
                <div>
                  <CardActions>
                    <ButtonHome
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#FE3131",
                      }}
                    >
                      Visit
                    </ButtonHome>
                    <IconButton
                      aria-label="add to favorites"
                      style={{ marginLeft: "auto" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={3}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={logo1}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.text}>
                    LakeView Hospital
                    <br />
                    <text>
                      Type of Tests : Blood Test, Urine Test, Sugar Test etc
                    </text>
                  </Typography>
                </CardContent>
                <div>
                  <CardActions>
                    <ButtonHome
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#FE3131",
                      }}
                    >
                      Visit
                    </ButtonHome>
                    <IconButton
                      aria-label="add to favorites"
                      style={{ marginLeft: "auto" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </div>
              </Card>
            </Grid>

            <Grid justify="center" item xs={12} md={4} sm={6} lg={12}>
              <div style={{ paddingTop: 20 }}>
                <center>
                  <ButtonHome
                    type="button"
                    onClick={() => push("/Vendor")}
                    style={{ border: "1px solid white", width: 150 }}
                  >
                    View
                  </ButtonHome>
                </center>
              </div>
            </Grid>
          </Grid>
        </center>
      </div>
    </>
  );
}
