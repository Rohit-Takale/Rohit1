import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  fade,
  Grid,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIncons from "react-icons/fi";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import PhelboPaymentTable from "./PhelboPaymentTable";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(0),
    },
    "& .MuiInputBase-input": {
      height: "0.1em",
      fontSize: 15,
      backgroundColor: "#FFFFFF",
    },

    "& .MuiInputLabel-formControl": {
      color: "#9D9999",
      lineHeight: 0,
      fontSize: 10,
    },
    "& .MuiSelect-selectMenu": {
      minHeight: "0.1em",
    },
  },
  textfield: {
    margin: 5,
    width: 180,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  container: {
    width: "60%",
    marginLeft: 300,
    backgroundColor: "#F8F5F5",
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FE3131",
  },
  card1: {
    width: 150,
    height: 120,
    borderRadius: 10,
    alignItems: "center",
    margin: theme.spacing(1),
  },
  cardHeading: {
    fontWeight: "bold",
    color: "#474747",
    fontSize: 18,
    textAlign: "center",
  },
  cardtext: {
    fontSize: 10,
    color: "#9D9999",
    textAlign: "center",
  },
  icon: {
    color: "#fe3131",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FFFFFF",
    marginLeft: 0,
    width: 250,
    border: "1px solid #474747",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),

    width: "100%",
  },
}));

export default function PhelboPayment() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Grid container className={classes.container}>
          <Grid item lg={6} sm={12} md={12} xs={12} justify="center">
            <Typography className={classes.heading}>
              Payment Management
            </Typography>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12} justify="center">
            <div style={{ display: "flex", float: "right" }}>
              <div style={{ marginRight: 10 }}>
                <Button
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#FE3131",
                    fontSize: 10,
                    width: 100,
                    height: 25,
                  }}
                >
                  New Coupon
                </Button>
              </div>
              <div>
                <Button
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#9D9999",
                    fontSize: 10,
                    width: 100,
                    height: 25,
                  }}
                >
                  EDIT EXISTING
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} md={6}>
            <Card className={classes.card1}>
              <center>
                <FiIncons.FiClock
                  style={{ paddingTop: 15 }}
                  className={classes.icon}
                  size={30}
                />
              </center>
              <CardContent>
                <Typography className={classes.cardHeading}>150</Typography>
                <Typography className={classes.cardtext}>
                  Orders under approval
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} md={6} justify="center">
            <Card className={classes.card1}>
              <center>
                <MdIcons.MdMotorcycle
                  style={{ paddingTop: 15 }}
                  className={classes.icon}
                  size={30}
                />
              </center>
              <CardContent>
                <Typography className={classes.cardHeading}>70</Typography>
                <Typography className={classes.cardtext}>
                  No of Coupons used
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} md={6} justify="center">
            <Card className={classes.card1}>
              <center>
                <IoIcons.IoMdCheckboxOutline
                  style={{ paddingTop: 15 }}
                  className={classes.icon}
                  size={30}
                />
              </center>
              <CardContent>
                <Typography className={classes.cardHeading}>30</Typography>
                <Typography className={classes.cardtext}>
                  Coupons Online
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} md={6} justify="center">

            <Card className={classes.card1}>
              <center>
                <IoIcons.IoMdClose
                  style={{ paddingTop: 15 }}
                  className={classes.icon}
                  size={30}
                />
              </center>
              <CardContent>
                <Typography className={classes.cardHeading}>10</Typography>
                <Typography className={classes.cardtext}>
                  Expired Coupons
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div>
          <Grid container className={classes.container}>
            <Grid item lg={2} sm={6} xs={12} md={6}>
              <Typography
                className={classes.heading}
                style={{ color: "#474747" }}
              >
                Phelbotomist
              </Typography>
            </Grid>
            <Grid item lg={4} sm={6} xs={12} md={6}>
              <div className={classes.search} style={{ marginTop: 7 }}>
                <div className={classes.searchIcon}>
                  <SearchIcon style={{ color: "black" }} />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
            <Grid item lg={3} sm={6} xs={12} md={6}>
              <div>
                <TextField
                  className={clsx(classes.textfield, classes.root)}
                  variant="outlined"
                  label="choose state"
                  select
                />
              </div>
            </Grid>
            <Grid item lg={3} sm={6} xs={12} md={6}>
              {" "}
              <TextField
                className={clsx(classes.textfield, classes.root)}
                variant="outlined"
                label="choose state"
                select
              />
            </Grid>
            <div
              style={{ display: "flex", paddingLeft: 120, paddingRight: 100 }}
            >
              <Grid item lg={6} sm={6} xs={12} md={6}>
                <TextField
                  className={clsx(classes.textfield, classes.root)}
                  variant="outlined"
                  label="choose state"
                  select
                />
              </Grid>
              <Grid item lg={6} sm={6} xs={12} md={6}>
                <div style={{ marginTop: 10, marginLeft: 25 }}>
                  <Button
                    variant="outlined"
                    style={{
                      width: 130,
                      color: "#FFFFFF",
                      backgroundColor: "#FE3131",
                      fontSize: 10,
                      height: 30,
                    }}
                  >
                    Search
                  </Button>
                </div>
              </Grid>
            </div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
              <PhelboPaymentTable/>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
