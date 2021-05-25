import styled from "styled-components";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
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
import { TestForm, Form } from "./TestForm";
import * as employeeService from "../../Services/employeeService";
import Controls from "../../Components/controls/Controls";
import MultilineInput from "../../Components/controls/MultilineInput";
import { useHistory } from "react-router";
import VendorAllTestTable from "./VendorAllTestTable";
import { fade, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F8F5F5",
    marginTop: 10,
    marginBottom: 10,
    width: "60%",
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    minWidth:340
  },
  heading: {
    color: "#FE3131",
    fontSize: 24,
    fontWeight: "bold",
  },
  spacing: {
    margin: theme.spacing(1),
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
  text: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#474747",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 3),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  inputRoot: {
    color: "#black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    border: "1px solid black",
    borderRadius: 5,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Button2 = styled.button`
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  width: 90px;
  height: 25px;
  cursor: pointer;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
`;

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}))(InputBase);

export default function VendorAllTests() {
  const { push } = useHistory();
  const classes = useStyles();
  return (
    <>
      <center>
        <div>
          <Grid container className={classes.container}>
            <Grid item lg={4} xs={12} justify="center" alignItems="center">
              <div className={classes.spacing}>
                {" "}
                <Typography
                  style={{
                    fontSize: 24,
                    color: "#FE3131",
                    fontWeight: "bold",
                  }}
                >
                  Test Management
                </Typography>
              </div>
            </Grid>
            <Grid item lg={8} xs={12}>
              <div className={classes.spacing}>
                <Button2
                  className={classes.spacing}
                  style={{ backgroundColor: "#4DDAF8" }}
                  type="button"
                  onClick={() => push("/VendorApprovedTest")}
                >
                  Accepted
                </Button2>
                <Button2
                  className={classes.spacing}
                  style={{ backgroundColor: "#474747" }}
                  type="button"
                  onClick={() => push("/VendorRejectedTests")}
                >
                  Rejected
                </Button2>
                <Button2
                  type="button"
                  onClick={() => push("/VendorAddTest")}
                  className={classes.spacing}
                  style={{ backgroundColor: "#FE3131" }}
                >
                  New Test
                </Button2>
                <Button2
                  type="button"
                  onClick={() => push("/VendorAllTests")}
                  className={classes.spacing}
                  style={{ backgroundColor: "#9D9999" }}
                >
                  Existing Tests
                </Button2>
                <Button2
                  type="button"
                  onClick={() => push("/V_AddToCenter")}
                  className={classes.button22}
                  style={{ backgroundColor: "#FE3131" }}
                >
                  Add to center
                </Button2>
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
            <Container>
              <Grid item lg={12}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  className={classes.spacing}
                >
                  <div className={classes.spacing}>
                    <Typography className={classes.heading}>
                      All Tests
                    </Typography>
                  </div>

                  <div className={clsx(classes.search)}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
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
                  <Controls.Select3
                    name="categoryId"
                    label="Category"
                    options={employeeService.getTestCatagoryCollection()}
                  />
                  <Button2
                    style={{
                      backgroundColor: "#FE3131",
                      height: 35,
                      width: 150,
                    }}
                  >
                    Search
                  </Button2>
                </Grid>
              </Grid>{" "}
            </Container>
            <Grid item lg={12} xs={12}>
              <Container>
                <VendorAllTestTable />
              </Container>
            </Grid>
          </Grid>
        </div>
      </center>
    </>
  );
}
