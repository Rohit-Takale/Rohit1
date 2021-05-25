import {
  Button,
  Card,
  CardActionArea,
  Grid,
  makeStyles,
  Typography,
  CardMedia,
  Container,
} from "@material-ui/core";
import React from 'react';
import logo1 from "../../Images/offer1.jpg";
import * as employeeService from "../../Services/employeeService";
import Controls from "../../Components/controls/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    objectFit: "fill",
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
    color: "#FFFFFF",
    margin: theme.spacing(1),
    height: 30,
    width: 120,
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
  idtext: {
    fontSize: 14,
    color: "#FE3131",
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
  text: {
    fontSize: 14,
    color: "#FE3131",
    fontWeight: "bold",
    margin: theme.spacing(1),
  },
  text2: {
    fontSize: 14,
    color: "#474747",
    margin: theme.spacing(1),
  },
  icon: {
    color: "#fe3131",
  },
  description: {
    fontSize: 14,
    color: "#9D9999",
    margin: theme.spacing(1),
  },
  heading: {
    fontSize: 24,
    color: "#474747",
    fontWeight: "bold",
    margin: theme.spacing(1),
  },
  container2: {
    width: "100%",
    borderRadius: 10,
  },
}));

const initialValues = {
  id: "0",
  categoryId: "",
};

export default function ApprovedTestDetails() {
    const classes = useStyles();
    return (
      <>
        <div>
          <Grid container className={classes.container}>
            <Grid item lg={6}>
              <div style={{ display: "flex" }}>
                <Typography className={classes.heading}>
                  Test Details
                </Typography>
                <Typography
                  style={{ marginTop: 15, marginLeft: 20 }}
                  className={classes.idtext}
                >
                  Test ID: 1234567
                </Typography>
              </div>{" "}
              <div>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      title="Contemplative Reptile"
                      component="img"
                      alt="Test Image"
                      src={logo1}
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div style={{ marginTop: 30 }}>
                <Typography className={classes.text}>
                  Test Name:{" "}
                  <text style={{ color: "#474747" }}>Blood test</text>
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <Typography className={classes.text2}>
                    Normal Range:
                    <br />
                    <text style={{ color: "#FE3131" }}>22-25</text>
                  </Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <Typography className={classes.text2}>
                    Sample size:
                    <text style={{ color: "#FE3131" }}>36</text>
                  </Typography>{" "}
                  <Typography className={classes.text2}>
                    Tube Type:
                    <text style={{ color: "#FE3131" }}>Blue</text>
                  </Typography>
                </div>
              </div>
              <div style={{ marginTop: 40 }}>
                <Typography className={classes.description}>
                  <text style={{ color: "#474747" }}>Description:</text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </Typography>
              </div>
              <div style={{ marginTop: 40 }}>
                <Typography className={classes.description}>
                  <text style={{ color: "#474747" }}>
                    Precaution Description:
                  </text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </Typography>
              </div>
            </Grid>

            <Grid item lg={6}>
              <div>
                <div style={{ display: "flex", float: "right" }}>
                  <Button
                    className={classes.button}
                    style={{ backgroundColor: "#474747" }}
                  >
                    Update
                  </Button>
                  <Button
                    className={classes.button}
                    style={{ backgroundColor: "#FE3131" }}
                  >
                    Print
                  </Button>
                </div>
              </div>
              <div style={{ float: "right" }}>
                <Controls.Select4
                  name="categoryId"
                  label="Add To Package"
                  options={employeeService.getPackageCollection()}
                />{" "}
              </div>
              <div style={{ float: "right" }}>
                <div style={{ marginLeft: 190 }}>
                  <Typography className={classes.heading}>
                    Approved Test
                  </Typography>
                </div>
                <div style={{ marginLeft: 150 }}>
                  <Typography
                    className={classes.heading}
                    style={{ color: "#FE3131" }}
                  >
                    <text style={{ fontSize: 14 }}>Total Amount=</text>
                    Rs 1500/-
                  </Typography>
                </div>
                <div style={{ marginTop: 50 }}>
                  <center>
                    <Container
                      className={classes.container2}
                      style={{ backgroundColor: "#EEEEEE" }}
                    >
                      <div style={{ display: "flex", marginRight: 10 }}>
                        <Typography style={{ fontSize: 14, color: "#9D9999" }}>
                          BloodcellFees
                          <br />
                          <center>
                            <text
                              style={{
                                fontSize: 20,
                                color: "#FE3131",
                                fontWeight: "bold",
                              }}
                            >
                              150
                            </text>
                          </center>
                        </Typography>
                        <Typography
                          style={{
                            fontSize: 14,
                            color: "#9D9999",
                            paddingLeft: 10,
                          }}
                        >
                          SellingPrice
                          <br />
                          <center>
                            <text
                              style={{
                                fontSize: 20,
                                color: "#FE3131",
                                fontWeight: "bold",
                              }}
                            >
                              1250
                            </text>
                          </center>
                        </Typography>
                        <Typography
                          style={{
                            fontSize: 14,
                            color: "#9D9999",
                            paddingLeft: 10,
                          }}
                        >
                        ServiceCharges
                          <br />
                          <center>
                            <text
                              style={{
                                fontSize: 20,
                                color: "#FE3131",
                                fontWeight: "bold",
                              }}
                            >
                              150
                            </text>
                          </center>
                        </Typography>
                      </div>
                    </Container>
                  </center>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </>
    );
}
