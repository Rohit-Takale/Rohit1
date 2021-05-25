import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIncons from "react-icons/fi";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import * as employeeService from "../../Services/employeeService";
import Controls from "../../Components/controls/Controls";

import { useHistory } from "react-router";
import ApprovedPackageTable from "./ApprovedPackageTable";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(0),
    },
    "& .MuiInputBase-input": {
      height: 3,
      fontSize: 15,
      backgroundColor: "#FBF9F9",
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
    width: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 10,
    color: "#474747",
    fontWeight: "bold",
    height: 35,
  },
  button2: {
    width: 100,
    fontSize: 10,
    color: "#FFFFFF",
    margin: theme.spacing(1),
    height: 25,
  },
  container: {
    width: "60%",
    marginLeft: 300,
    backgroundColor: "#F8F5F5",
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    minWidth: 700,
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
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

const multilineInputStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiInputBase-input": {
      height: 2,
      fontSize: 15,
      backgroundColor: "#FBF9F9",
    },
  },
  textfield: {
    marginTop: "12px",
    marginBottom: "12px",
    width: 570,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
}));
const initialValues = {
  id: "0",
  categoryId: "",
};

export default function ApprovedPackages() {
  const classes = useStyles();
  const classes2 = multilineInputStyles();
  return (
    <>
      <div>
        <Grid container className={classes.container}>
          <Grid item lg={12}>
            <div style={{ display: "flex" }}>
              {" "}
              <Typography
                style={{ fontSize: 20, color: "#FE3131", fontWeight: "bold" }}
              >
                Package Management
              </Typography>
              <div style={{ marginLeft: 100 }}>
                <Button
                  className={classes.button2}
                  style={{ backgroundColor: "#4DDAF8" }}
                >
                  Accepted
                </Button>
                <Button
                  className={classes.button2}
                  style={{ backgroundColor: "#474747" }}
                >
                  Rejected
                </Button>
                <Button
                  className={classes.button2}
                  style={{ backgroundColor: "#FE3131" }}
                >
                  New Test
                </Button>
                <Button
                  className={classes.button2}
                  style={{ backgroundColor: "#9D9999" }}
                >
                  Existing Tests
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
      </div>
      <div>
        <Grid container className={classes.container}>
          <Grid item lg={12}>
            <div style={{ display: "flex" }}>
              <Typography
                style={{ fontSize: 20, color: "#FE3131", fontWeight: "bold" }}
              >
                Approved
              </Typography>
              <div style={{ marginLeft:110,margintTop:10}}>
                <Typography
                  style={{ fontSize: 14, color: "#474747", fontWeight: "bold" }}
                >
                  No of Tests: 70
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} md={6}>
            <div style={{ marginTop: 20 }}>
              <Typography style={{ color: "#474747", fontSize: 14 }}>
                Package ID: 123456
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <div className={classes.search} style={{ marginTop: 13 }}>
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
            <Controls.Select3
              name="categoryId"
              label="Category"
              options={employeeService.getTestCatagoryCollection()}
            />
          </Grid>{" "}
          <Grid item lg={2} sm={6} xs={12} md={6}>
            <div style={{ marginTop: 15 }}>
              <Button
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#FE3131",
                  width: 120,
                  height: 30,
                  fontSize: 10,
                }}
              >
                Search
              </Button>
            </div>
          </Grid>
          <Grid item lg={12}>
            <div style={{ marginLeft: 190 }}>
              <TextField
                className={(classes2.root, classes2.textfield)}
                id="outlined-multiline-static"
                placeholder="Package Description"
                multiline
                rows={2}
                variant="outlined"
              />
            </div>
          </Grid>
          <Grid item lg={12}>
            <ApprovedPackageTable />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
