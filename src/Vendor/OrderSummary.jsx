import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Userphoto from "../Images/account.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IconButton } from "material-ui";
import ScrollTable from "../Dashboard/ScrollTable";
import SummaryTable from "./SummaryTable";

const useStyles = makeStyles({
  container: {
    marginTop: "100px",
    marginBottom: "100px",
    marginLeft: 300,
    backgroundColor: "#EEEEEE",
    width: "60%",
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,
    justify: "center",
  },
  btn: {
    fontSize: "0.7rem",
    height: "30px",
    width: "150px",
  },
  image: {
    width: "100px",
    height: "95px",
  },
});

export default function OrderSummary() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item lg={12}>
          <div style={{ display: "flex", float: "right", paddingRight: 100 }}>
            <div style={{ paddingRight: 100 }}>
              <Typography style={{ color: "#474747", fontWeight: "bold" }}>
                <text style={{ color: "#FE3131" }}>Paid </text> / Cash on
                Delivery
              </Typography>
            </div>
            <div>
              <Button
                className={classes.btn}
                style={{ backgroundColor: "#FE3131", color: "#FFFFFF" }}
              >
                Print
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item lg={12}>
          <div style={{ float: "right", paddingRight: 20, paddingTop: 20 }}>
            <Typography style={{ color: "#FE3131" }}>
              Delivery Charges: Rs 150
            </Typography>
          </div>
        </Grid>
        <Grid item lg={12} style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div style={{ display: "flex" }}>
            <div style={{ paddingRight: 100 }}>
              <Typography variant="h5" style={{ color: "#474747" }}>
                Order Detail
              </Typography>
            </div>
            <div>
              <div style={{ paddingRight: 100 }}>
                <Typography style={{ color: "#FE3131" }}>
                  Order No: KA22654321
                </Typography>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={2}>
          <div style={{ paddingLeft: 20, paddingTop: 20 }}>
            <img
              src={Userphoto}
              className={classes.image}
              alt="image not present"
            />
          </div>
        </Grid>

        <Grid item lg={10}>
          <div style={{ paddingTop: 20, display: "flex" }}>
            <Typography style={{ color: "#474747", fontWeight: "bold" }}>
              User ID: 654321
            </Typography>
            <div style={{ paddingLeft: 20 }}>
              <Typography style={{ color: "#474747", fontWeight: "bold" }}>
                Invoice No: BC12345678
              </Typography>
            </div>
            <div style={{ paddingLeft: 500 }}>
              <Typography style={{ color: "#474747", fontWeight: "bold" }}>
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
            <Typography style={{ color: "#474747" }}>Prescription</Typography>
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
            <Typography style={{ color: "#474747" }}>Invoice</Typography>
            <div style={{ paddingLeft: 430 }}>
              <Typography style={{ color: "#FE3131" }}>
                Total Amount{" "}
                <text style={{ fontWeight: "bold", fontSize: 30 }}>
                  Rs 1500/-
                </text>
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item lg={6}>
          <div style={{ paddingTop: "30px" }}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, paddingRight: 0 }}>
                <Typography style={{ marginLeft: "20px" }}>
                  DOB: 21-11-1996
                </Typography>
                <Typography style={{ paddingLeft: "20px", color: "grey" }}>
                  +91 1234567890
                </Typography>
                <Typography style={{ paddingLeft: "20px", color: "grey" }}>
                  info@lakeviewhospital.com
                </Typography>
              </div>
              <div style={{ flex: 1 }}>
                <Typography style={{ paddingLeft: "20px" }}>
                  Age:<text style={{ color: "red" }}>36</text>
                </Typography>
                <Typography style={{ paddingLeft: "20px" }} g>
                  Gender:<text style={{ color: "red" }}>Male</text>
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "30px",
                }}
              >
                Billing Address:
                <text style={{ color: "grey" }}>
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
                  color: "grey",
                }}
              >
                Landmark :
                <text style={{ color: "black" }}>Above IDBI BANK</text>
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  paddingLeft: "20px",
                  paddingTop: "30px",
                  color: "#474747",
                }}
              >
                Shipping Address::
                <text style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.{" "}
                </text>
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          style={{ paddingLeft: 100, paddingRight: 100, marginTop: 30 }}
        >
          <SummaryTable />
        </Grid>
        <Grid item lg={12}>
          <div style={{ paddingTop: 20 }}>
            <div style={{ paddingLeft: 30 }}>
              <Typography style={{ color: "#FE3131", fontWeight: "bold" }}>
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
          <div style={{ paddingLeft: 20, marginTop: 20 }}>
            <Typography style={{ color: "#474747" }}>
              Sudhir Narayan Patil
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
