import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIncons from "react-icons/fi";
import Userphoto from "../../Images/account.png";
import V_Profile_Table from "./V_Profile_Table";
import { useHistory } from "react-router";
import firebase from "../../contexts/firebase";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F8F5F5",
    width: "60%",
    borderRadius: 10,
    padding: 10,
    minWidth: 345,
  },
  btn: {
    fontSize: "0.6rem",
    height: "25px",
    width: "100px",
  },
  icon: {
    color: "#fe3131",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  heading: {
    color: "#474747",
    fontWeight: "bold",
    fontSize: 24,
  },
  spacing: {
    margin: theme.spacing(1),
  },
  text: {
    color: "#474747",
    fontSize: 14,
  },
  redtext: {
    color: "#fe3131",
    fontSize: 14,
  },
  conatiner2: {
    backgroundColor: "#EEEEEE",
    padding: 10,
    borderRadius: 10,
  },
  conatiner3: {
    backgroundColor: "#4ddaf8",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    margin: theme.spacing(3),
  },
  conatiner4: {
    backgroundColor: "#474747",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    margin: theme.spacing(3),
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
}));

export default function V_Profile() {
  const classes = useStyles();
  const history = useHistory();
    const [vendorsList, setvendorsList] = useState([]);

 
  useEffect(() => {
    getVendors();
  }, []);

   const getVendors = async () => {
     const snapshot = await firebase
       .firestore()
       .collection("ApprovedVendors")
       .get();

     snapshot.docs.forEach((item) => {
       // getVendorImage(item.id)
       const vId = item.id;
       setvendorsList((i) => [...i, item.data()]);
     });
   };
     console.log(vendorsList);
  return (
    <center>
      <div style={{ marginTop: 20 }} className={classes.sectionMobile}></div>
      <Grid container className={classes.container}>
        <Grid item lg={6} xs={12}>
          <Grid container className={classes.spacing}>
            <Typography className={classes.heading}>Profile</Typography>
          </Grid>
          <Grid container>
            <Grid item lg={4} xs={6}>
              <Grid container className={classes.spacing}>
                <div>
                  <img
                    src={Userphoto}
                    className={classes.image}
                    alt="image not present"
                  />
                </div>
              </Grid>
            </Grid>
            {/* Use Info Section */}
            <Grid item lg={6} xs={6}>
              <Grid container className={classes.spacing}>
                <div style={{ paddingTop: 40 }}>
                  <Typography className={classes.text}>
                    VendorID:1234567890
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <Grid container className={classes.spacing}>
                <Typography
                  className={classes.redtext}
                  style={{ fontWeight: "bold" }}
                >
                  Lakeview Hospital and Diagnostic Center
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={12} className={classes.spacing}>
              <Grid container>
                <Typography className={classes.text}>
                  Mr. Sandeep Kaushal, Owner, Designation
                </Typography>
              </Grid>
              <Grid container>
                <Typography className={classes.text}>
                  +91 8660080070/1234567890
                </Typography>
              </Grid>
              <Grid container>
                <Typography className={classes.text}>
                  owneremail@gmail.com/noemail@gmail.com
                </Typography>
              </Grid>
            </Grid>
            {/* User info ends */}
            {/* User Adrees */}
            <Grid item lg={10} className={classes.spacing}>
              <Grid container>
                <Typography
                  className={classes.text}
                  style={{ textAlign: "left" }}
                >
                  Address : Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna.
                </Typography>
              </Grid>
            </Grid>
            {/* User Adrees Ends */}
            {/* User Location */}
            <Grid item lg={12} className={classes.spacing}>
              <Grid container>
                <Typography className={classes.text}>
                  State : Uttar Pradesh
                </Typography>
              </Grid>
              <Grid container>
                <Typography className={classes.text}>City : Bihar</Typography>
              </Grid>
              <Grid container>
                <Typography className={classes.text}>
                  PinCode : 590003
                </Typography>
              </Grid>
            </Grid>
            {/* Location */}
            {/* Type of tests */}
            <Grid item lg={12} className={classes.spacing}>
              <Grid container>
                <V_Profile_Table />
              </Grid>
            </Grid>
            {/* Type of tests */}
            <Grid item lg={12} className={classes.spacing}>
              <Grid container>
                <Typography
                  className={classes.text}
                  style={{ color: "#9D9999" }}
                >
                  Type of Tests : Blood Test, Urine Test, Sugar Test
                </Typography>
              </Grid>
            </Grid>
            {/* Type of tests ends */}
            {/* Bank Details */}
            <Grid item lg={10} xs={12} className={classes.spacing}>
              <Container className={classes.conatiner2}>
                <Grid container>
                  <Typography className={classes.text}>
                    Account Holder Name:Sandeep Kaushal
                  </Typography>
                </Grid>{" "}
                <Grid container>
                  <Typography className={classes.text}>
                    Bank Name: Kotak Mahindra Bank
                  </Typography>{" "}
                </Grid>
                <Grid container>
                  <Typography className={classes.text}>
                    Account No: ABCD123456789012346789
                  </Typography>{" "}
                </Grid>
                <Grid container>
                  <Typography className={classes.text}>
                    IFSC Code: ABCD1234567
                  </Typography>
                </Grid>
              </Container>
            </Grid>
            {/*  Bank Details  ends */}
          </Grid>
        </Grid>

        {/* Right side Section */}
        <Grid item lg={6} xs={12}>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.sectionDesktop}
          >
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
                  Orders Under Delivery
                </Typography>
              </CardContent>
            </Card>
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
          <Container className={classes.conatiner3}>
            <Grid container>
              <Typography style={{ color: "#FFFFFF" }} className={classes.text}>
                Performance so far
              </Typography>
            </Grid>
            <hr
              style={{
                border: "0.3px solid #FFFFFF",
                backgroundColor: "#FFFFFF",
              }}
            />{" "}
            <Grid container>
              <Grid item lg={6} xs={6}>
                <Typography style={{ color: "#FFFFFF", fontSize: 24 }}>
                  ₹18500/-
                </Typography>
              </Grid>

              <Grid item lg={6} xs={6} style={{ paddingTop: 8 }}>
                <Typography style={{ color: "#FFFFFF", fontSize: 14 }}>
                  Total Sales
                </Typography>
              </Grid>
              <Grid item lg={6} xs={6}>
                <Typography style={{ color: "#FFFFFF", fontSize: 24 }}>
                  ₹18500/-
                </Typography>
              </Grid>

              <Grid item lg={6} xs={6} style={{ paddingTop: 8 }}>
                <Typography style={{ color: "#FFFFFF", fontSize: 14 }}>
                  Commission
                </Typography>
              </Grid>
              <Grid item lg={6} xs={6}>
                <Typography style={{ color: "#FFFFFF", fontSize: 24 }}>
                  ₹18500/-
                </Typography>
              </Grid>

              <Grid item lg={6} xs={6} style={{ paddingTop: 8 }}>
                <Typography style={{ color: "#FFFFFF", fontSize: 14 }}>
                  Payout
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Container className={classes.conatiner4}>
            <Grid container>
              <Typography style={{ color: "#FFFFFF" }} className={classes.text}>
                Payout this month
              </Typography>
            </Grid>
            <hr
              style={{
                border: "0.3px solid #FFFFFF",
                backgroundColor: "#FFFFFF",
              }}
            />{" "}
            <Grid container>
              <Grid item lg={6} xs={6}>
                <Typography style={{ color: "#FFFFFF", fontSize: 24 }}>
                  ₹18500/-
                </Typography>
              </Grid>

              <Grid item lg={6} xs={6} style={{ paddingTop: 8 }}>
                <Typography style={{ color: "#FFFFFF", fontSize: 14 }}>
                  Total Sales
                </Typography>
              </Grid>
              <Grid item lg={6} xs={6}>
                <Typography style={{ color: "#FFFFFF", fontSize: 24 }}>
                  ₹18500/-
                </Typography>
              </Grid>

              <Grid item lg={6} xs={6} style={{ paddingTop: 8 }}>
                <Typography style={{ color: "#FFFFFF", fontSize: 14 }}>
                  Commission
                </Typography>
              </Grid>
              <Grid item lg={6} xs={6}>
                <Typography style={{ color: "#FFFFFF", fontSize: 24 }}>
                  ₹18500/-
                </Typography>
              </Grid>

              <Grid item lg={6} xs={6} style={{ paddingTop: 8 }}>
                <Typography style={{ color: "#FFFFFF", fontSize: 14 }}>
                  Payout
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        {/* Right side Section Ends */}
      </Grid>
    </center>
  );
}
