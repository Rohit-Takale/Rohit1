import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Userphoto from "../../Images/account.png";

import { FaCloudDownloadAlt } from "react-icons/fa";
import DocumentsTable from "./DocumentsTable";

const useStyles = makeStyles({
  container: {
    marginTop: "100px",
    marginBottom: "100px",
    marginLeft: 300,
    backgroundColor: "#F8F5F5",
    width: "60%",
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,
    justify: "center",
  },
  btn: {
    fontSize: "0.6rem",
    height: "25px",
    width: "100px",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

const containerStyles = makeStyles((theme) => ({
  container2: {
    width: "100%",
    borderRadius: 10,
  },
}));

export default function VendorDashBoard() {
  const classes = useStyles();
  const ctr = containerStyles();

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item lg={12}>
          <div style={{ float: "right", margin: 10 }}>
            <Button
              className={classes.btn}
              style={{ backgroundColor: "#FE3131", color: "white" }}
            >
              Print
            </Button>
          </div>
        </Grid>
        <Grid item lg={6}>
          <div style={{ display: "flex", marginLeft: 20 }}>
            <div>
              <Typography
                style={{ fontSize: 24, color: "#474747", fontWeight: "bold" }}
              >
                Order Details
              </Typography>
            </div>
            <div style={{ marginLeft: 20, marginTop: 10 }}>
              <Typography
                style={{ fontSize: 14, color: "#FE3131", fontWeight: "bold" }}
              >
                Order No: KA22654321
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item lg={6}>
          <div style={{ display: "flex", float: "right", paddingRight: 10 }}>
            <div style={{ marginRight: 5 }}>
              <Button
                className={classes.btn}
                style={{ backgroundColor: "#9D9999", color: "#FFFFFF" }}
              >
                Assign
              </Button>
            </div>
            <div style={{ marginRight: 5 }}>
              <Button
                className={classes.btn}
                style={{ backgroundColor: "#474747", color: "#FFFFFF" }}
              >
                Send Sms
              </Button>
            </div>
            <div>
              <Button
                className={classes.btn}
                style={{ backgroundColor: "#4DDAF8", color: "#FFFFFF" }}
              >
                Send Email
              </Button>
            </div>
          </div>
        </Grid>

        <Grid item lg={2}>
          <div>
            <img
              src={Userphoto}
              className={classes.image}
              alt="image not present"
            />
          </div>
        </Grid>

        <Grid item lg={10}>
          <div style={{ paddingTop: 20, display: "flex" }}>
            <Typography style={{ color: "#474747", fontSize: 14 }}>
              User ID : 654321
            </Typography>
            <div style={{ paddingLeft: 20 }}>
              <Typography style={{ color: "#474747", fontSize: 14 }}>
                Invoice No: BC12345678
              </Typography>
            </div>
            <div style={{ marginLeft: 280 }}>
              <Typography style={{ color: "#474747", fontSize: 14 }}>
                08 / APR / 2021
              </Typography>
            </div>
          </div>
          <div style={{ paddingTop: 20, display: "flex" }}>
            <div>
              <button style={{ border: "none", color: "#FE3131" }}>
                <FaCloudDownloadAlt size={20} />
              </button>
            </div>
            <Typography style={{ color: "#474747", fontSize: 14 }}>
              Prescription
            </Typography>
            <div style={{ paddingLeft: 30 }}>
              <button
                style={{
                  border: "none",
                  color: "#4DDAF8",
                }}
              >
                <FaCloudDownloadAlt size={20} />
              </button>
            </div>
            <Typography style={{ color: "#474747", fontSize: 14 }}>
              Invoice
            </Typography>
            <div style={{ paddingLeft: 260 }}>
              <Typography style={{ color: "#FE3131", fontSize: 14 }}>
                Total Amount=
                <text style={{ fontWeight: "bold", fontSize: 24 }}>
                  Rs 1500/-
                </text>
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item lg={6}>
          <div>
            <Typography
              style={{
                marginLeft: 20,
                fontSize: 14,
                color: "#FE3131",
                fontWeight: "bold",
              }}
            >
              Sudhir Narayan Patil
            </Typography>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, paddingRight: 0 }}>
                <Typography
                  style={{ marginLeft: "20px", fontSize: 14, color: "#474747" }}
                >
                  DOB: 21-11-1996
                </Typography>
                <Typography
                  style={{
                    paddingLeft: "20px",
                    fontSize: 14,
                    color: "#9D9999",
                  }}
                >
                  +91 1234567890
                </Typography>
                <Typography
                  style={{
                    paddingLeft: "20px",
                    fontSize: 14,
                    color: "#9D9999",
                  }}
                >
                  info@lakeviewhospital.com
                </Typography>
              </div>
              <div style={{ flex: 1 }}>
                <Typography
                  style={{
                    paddingLeft: "20px",
                    fontSize: 14,
                    color: "#474747",
                  }}
                >
                  Age:<text style={{ color: "#FE3131" }}>36</text>
                </Typography>
                <Typography
                  style={{
                    paddingLeft: "20px",
                    fontSize: 14,
                    color: "#474747",
                  }}
                >
                  Gender:<text style={{ color: "#FE3131" }}>Male</text>
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "30px",
                  color: "#474747",
                  fontSize: 14,
                }}
              >
                Billing Address:
                <text style={{ color: "#9D9999" }}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </text>
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  paddingLeft: "20px",
                  paddingTop: "30px",

                  color: "#474747",
                  fontSize: 14,
                }}
              >
                Landmark :
                <text style={{ color: "#9D9999" }}>Above IDBI BANK</text>
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  paddingLeft: "20px",
                  paddingTop: "30px",
                  color: "#474747",
                  fontSize: 14,
                }}
              >
                Shipping Address::
                <text style={{ color: "#9D9999", fontSize: 14 }}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </text>
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  paddingLeft: "20px",
                  paddingTop: "30px",

                  color: "#474747",
                  fontSize: 14,
                }}
              >
                Landmark :
                <text style={{ color: "#9D9999" }}>Above IDBI BANK</text>
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          style={{ marginTop: 30, paddingRight: 10, paddingLeft: 10 }}
        >
          <DocumentsTable />

          <div style={{ marginTop: 50, marginRight: 40 }}>
            <center>
              <Container
                className={ctr.container2}
                style={{ backgroundColor: "#EEEEEE" }}
              >
                <div style={{ display: "flex", marginRight: 10 }}>
                  <Typography style={{ fontSize: 14, color: "#9D9999" }}>
                    BloodcellFees
                    <br />
                    <center>
                      <text
                        style={{
                          fontSize: 24,
                          color: "#FE3131",
                          fontWeight: "bold",
                        }}
                      >
                        150
                      </text>
                    </center>
                  </Typography>
                  <Typography
                    style={{ fontSize: 14, color: "#9D9999", paddingLeft: 10 }}
                  >
                    VendorEarning
                    <br />
                    <center>
                      <text
                        style={{
                          fontSize: 24,
                          color: "#FE3131",
                          fontWeight: "bold",
                        }}
                      >
                        1250
                      </text>
                    </center>
                  </Typography>
                  <Typography
                    style={{ fontSize: 14, color: "#9D9999", paddingLeft: 10 }}
                  >
                    DeliveryCharges
                    <br />
                    <center>
                      <text
                        style={{
                          fontSize: 24,
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

          <div style={{ paddingTop: 20 }}>
            <div style={{ paddingLeft: 30 }}>
              <Typography
                style={{ color: "#FE3131", fontWeight: "bold", fontSize: 14 }}
              >
                Vendor
              </Typography>
            </div>
            <div style={{ marginTop: 10, paddingLeft: 30 }}>
              <img
                src={Userphoto}
                className={classes.image}
                alt="image not present"
              />
            </div>
          </div>
          <div style={{ paddingLeft: 20 }}>
            <Typography style={{ color: "#474747", fontSize: 14 }}>
              Sudhir Narayan Patil
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
