import {
  Card,
  CardActionArea,
  Grid,
  makeStyles,
  Typography,
  CardMedia,
  Container,
  Box,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import logo1 from "../../Images/offer1.jpg";
import * as employeeService from "../../Services/employeeService";
import Controls from "../../Components/controls/Controls";
import firebase from "../../contexts/firebase";
import styled from "styled-components";
import clsx from "clsx";

const Button = styled.button`
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  width: 100px;
  height: 25px;
  cursor: pointer;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
`;

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: "#F8F5F5",
    width: "60%",
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,
    minWidth: 350,
  },
  idtext: {
    fontSize: 14,
    color: "#FE3131",
    margin: theme.spacing(1),
  },
  card1: {
    width: "80%",
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
    borderRadius: 10,
    width: "100%",
  },
  spacing: {
    margin: theme.spacing(1),
  },
  feesFont: {
    fontSize: 20,
    color: "#FE3131",
    fontWeight: "bold",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const initialValues = {
  id: "0",
  categoryId: "",
};

export default function V_ApprovedTestDetails(props) {
       const classes = useStyles();
    const [testDetail, setTestDetail] = useState([]);

   useEffect(() => {
     var vId = props.location.state.vId;
     var tId = props.location.state.tId;
     getTestDetails(vId, tId);
   }, []);

    const getTestDetails = async (vId, tId) => {
      var leadsRef = await firebase
        .database()
        .ref("ApprovedVendors/" + vId + "/ApprovedTests/" + tId);
      await leadsRef.on("value", function (snapshot) {
        setTestDetail(snapshot.val());
        console.log(snapshot.val());
      });
    };
  console.log(testDetail);

  return (
    <center>
      <Grid container className={classes.container}>
        <Grid item lg={6}>
          <Grid container direction="row">
            <Typography className={classes.heading}>Test Details</Typography>
            <Typography
              style={{ marginTop: 15, marginLeft: 20 }}
              className={classes.idtext}
            >
              Test ID: {testDetail.test_id}
            </Typography>
          </Grid>
          <div>
            <Card className={clsx(classes.spacing, classes.card1)}>
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
        </Grid>
        <Grid item lg={2}></Grid>
        <Grid item lg={4} xs={12}>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.spacing}
          >
            <div className={classes.sectionDesktop}>
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
          </Grid>
          <div className={classes.sectionDesktop}>
            <Controls.Select4
              name="categoryId"
              label="Add To Package"
              options={employeeService.getPackageCollection()}
            />{" "}
          </div>
          <div>
            <div>
              <Typography className={classes.heading}>Approved Test</Typography>
            </div>
            <div className={classes.sectionDesktop}>
              <Typography
                className={classes.heading}
                style={{ color: "#FE3131" }}
              >
                <text style={{ fontSize: 14, margin: 8 }}>Total Amount =</text>
                Rs {testDetail.test_paidAmount}
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item lg={6}>
          {" "}
          <div style={{ marginTop: 20 }}>
            <Grid container className={classes.spacing}>
              <Typography className={classes.text}>
                Test Name:
                <text style={{ color: "#474747", marginLeft: 5 }}>
                  {testDetail.test_name}
                </text>
              </Typography>
            </Grid>
          </div>
          <Grid container className={classes.spacing}>
            <div style={{ display: "flex" }}>
              <div>
                <Typography className={classes.text2}>
                  Normal Range:25-30
                  <br />
                  <text style={{ color: "#FE3131", marginLeft: 5 }}>
                    {testDetail.test_sample}
                  </text>
                </Typography>
              </div>
              <div>
                <Typography className={classes.text2}>
                  Sample size:
                  <text style={{ color: "#FE3131", marginLeft: 5 }}>
                    {testDetail.test_sampleSize}
                  </text>
                </Typography>{" "}
                <Typography className={classes.text2}>
                  Tube Type:
                  <text style={{ color: "#FE3131", marginLeft: 5 }}>
                    {testDetail.test_tubeId}
                  </text>
                </Typography>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <Typography className={classes.description}>
                <text style={{ color: "#474747", marginRight: 8 }}>
                  Description:
                </text>
                {testDetail.test_description}
              </Typography>
            </div>
            <div style={{ marginTop: 20 }}>
              <Typography className={classes.description}>
                <text style={{ color: "#474747", marginRight: 8 }}>
                  Precaution Description:
                </text>
                {testDetail.test_precaution}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={5}>
          <div style={{ marginTop: 10 }}>
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
                      <text className={classes.feesFont}>
                        {testDetail.test_fees}
                      </text>
                    </center>
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#9D9999",
                      paddingLeft: 15,
                    }}
                  >
                    SellingPrice
                    <br />
                    <center>
                      <text className={classes.feesFont}>
                        {testDetail.test_fees}
                      </text>
                    </center>
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#9D9999",
                      paddingLeft: 15,
                    }}
                  >
                    ServiceCharges
                    <br />
                    <center>
                      <text className={classes.feesFont}>
                        {testDetail.test_fees}
                      </text>
                    </center>
                  </Typography>
                </div>
              </Container>
                  <div className={classes.sectionMobile}>
              <Typography
                className={classes.heading}
                style={{ color: "#FE3131" }}
              >
                <text style={{ fontSize: 14, margin: 8 }}>Total Amount =</text>
                Rs {testDetail.test_paidAmount} /-50000
              </Typography>
            </div>
            </center>
          </div>
        </Grid>
      </Grid>
    </center>
  );
}
