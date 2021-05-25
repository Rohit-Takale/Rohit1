import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Userphoto from "../../Images/account.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import firebase from "../../contexts/firebase";

const useStyles = makeStyles({
  container: {
    marginTop: "100px",
    marginBottom: "100px",
    marginLeft: 300,
    backgroundColor: "#F8F5F5",
    width: "60%",
    borderRadius: 10,
    padding: 20,
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
    borderRadius: 5,
  },
}));

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
}

function createData(Slno, Test, Date) {
  return { Slno, Test, Date };
}

export default function V_AllOrederDetails(props) {
  const classes = useStyles();
  const ctr = containerStyles();
  const [orderDetail, setOrderdetail] = useState([]);
  const [rows, setrows] = useState([]);

  useEffect(() => {
    var vId = props.location.state.vId;
    var tId = props.location.state.tId;
    var orderId = props.location.state.oId;

    getOrderDetail(vId, orderId);
  }, []);

  const getOrderDetail = async (vId, orderId) => {
    var leadsRef = await firebase
      .database()
      .ref("PlacedOrders/" + vId + "/" + orderId);
    await leadsRef.on("value", function (snapshot) {
      setOrderdetail(snapshot.val());
      let list = [];
      snapshot.child("cartItems").forEach((snap) => {
        list.push(snap.val());
      });

      setrowData(list);
    });
  };

  const setrowData = async (list) => {
    await Object.keys(list).forEach(function (jB) {
      var arr = list[jB];
      let count = parseInt(jB) + 1;

      setrows((i) => [
        ...i,
        createData(count, arr.test_name, arr.test_sellingPrice),
      ]);
      // console.log(arr); //will print the array belongs to each property.
    });
  };

  return (
    <>
      {orderDetail ? (
        <Grid container className={classes.container}>
          <Grid item lg={12}>
            <div style={{ float: "right", margin: 10 }}>
              <button
                className={classes.btn}
                style={{
                  backgroundColor: "#FE3131",
                  color: "white",
                  fontSize: 14,
                  borderWidth: 0,
                  borderRadius: 5,
                }}
              >
                Print
              </button>
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
                  Order No: {props.location.state.oId}
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div style={{ display: "flex", float: "right", paddingRight: 10 }}>
              <div style={{ marginRight: 5 }}>
                <button
                  className={classes.btn}
                  style={{
                    backgroundColor: "#9D9999",
                    color: "#FFFFFF",
                    fontSize: 14,
                    borderWidth: 0,
                    borderRadius: 5,
                  }}
                >
                  Assign
                </button>
              </div>
              <div style={{ marginRight: 5 }}>
                <button
                  className={classes.btn}
                  style={{
                    backgroundColor: "#474747",
                    color: "#FFFFFF",
                    borderWidth: 0,
                    borderRadius: 5,
                    fontSize: 14,
                  }}
                >
                  Send Sms
                </button>
              </div>
              <div>
                <button
                  className={classes.btn}
                  style={{
                    backgroundColor: "#4DDAF8",
                    color: "#FFFFFF",
                    borderWidth: 0,
                    borderRadius: 5,
                    fontSize: 14,
                  }}
                >
                  Send Email
                </button>
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
              <div style={{ marginLeft: 220 }}>
                <Typography style={{ color: "#474747", fontSize: 14 }}>
                  {formatDate(orderDetail.date)}
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
              <div style={{ paddingLeft: 200 }}>
                <Typography style={{ color: "#FE3131", fontSize: 14 }}>
                  Total Amount
                  <text
                    style={{
                      paddingLeft: 10,
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    Rs {orderDetail.total}/-
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
                {orderDetail.name}
              </Typography>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, paddingRight: 0 }}>
                  <Typography
                    style={{
                      marginLeft: "20px",
                      fontSize: 14,
                      color: "#474747",
                    }}
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
                    {orderDetail.address}
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
                  Shipping Address:
                  <text style={{ color: "#9D9999", fontSize: 14 }}>
                    {orderDetail.address}
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
            style={{
              marginTop: 30,
              paddingRight: 10,
              paddingLeft: 10,
            }}
          >
            {/* <OrderDetailTable order={orderDetail.cartItems} /> */}

            <TableContainer
              style={{
                minWidth: 30,
                maxWidth: 320,
                maxHeight: 300,
                padding: 10,
              }}
            >
              <Table
                className={(classes.table, classes.customTableContainer)}
                aria-label="simple table"
              >
                <Typography
                  variant="h6"
                  style={{ paddingBottom: 20, paddingTop: 10 }}
                >
                  All Tests
                </Typography>

                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.Slno}>
                      <TableCell>{row.Slno}</TableCell>
                      <TableCell>{row.Test}</TableCell>
                      <TableCell
                        style={{ color: "#FE3131", fontWeight: "bold" }}
                      >
                        {row.Date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div style={{ marginTop: 50, marginRight: 20, width: "100%" }}>
              <center>
                <Container
                  className={ctr.container2}
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  <div
                    style={{
                      display: "flex",
                      margin: 10,
                      padding: 5,
                    }}
                  >
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
                      style={{
                        fontSize: 14,
                        color: "#9D9999",
                        paddingLeft: 10,
                      }}
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
                      style={{
                        fontSize: 14,
                        color: "#9D9999",
                        paddingLeft: 10,
                      }}
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
      ) : null}
    </>
  );
}
