import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import CoverPhoto from "../Images/offer1.jpg";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundImage: `url(${CoverPhoto})`,
    backgroundSize: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'contain',
    height: "auto",
    justify: "center",
  },
  griditem: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  btn: {
    margin: theme.spacing(1),
  },
}));

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
  min-width:90px;
`;

export default function CoverPage() {
  const classes = useStyles();
  return (
    <>
      <Grid Container style={{ paddingTop: "30px" }} className={classes.grid}>
        <Grid
          item
          className={clsx(classes.griditem)}
          xs={12}
          lg={12}
          sm={12}
          md={12}
        >
          <div style={{justify:'center',marginLeft:100}}>
            <Typography
              style={{ fontWeight: "bold", color: "#FFFFFF", fontSize: 24 }}
            >
              BLOODCELLS
            </Typography>
            <Typography
              style={{ paddingTop: 10, fontSize: 32, color: "#FFFFFF" }}
            >
              NOW <text style={{ color: "red" }}>BLOOD </text>TEST
            </Typography>
            <Typography
              style={{ paddingTop: 10, fontSize: 32, color: "#FFFFFF" }}
            >
              AT YOUR HOME
            </Typography>
            <Grid item lg={4}>
             
              </Grid>
            <Grid item lg={8}>
              <div
                style={{ display: "flex" }}
                className={classes.btn}
              >
                <ButtonHome
                  variant="contained"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#4DDAF8",
                    border: "2px solid #4DDAF8",
                  }}
                >
                  MORE
                </ButtonHome>

                <ButtonHome
                  component={Link}
                  to="/Featured"
                  variant="contained "
                  style={{
                    backgroundColor: "red",
                    border: "2px solid red",
                    color: "white",
                    fontWeight: "normal",
                  }}
                >
                  Book Test
                </ButtonHome>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
