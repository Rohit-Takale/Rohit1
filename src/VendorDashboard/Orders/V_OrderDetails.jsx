import React, { useEffect, useState } from "react";
import {
    Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Userphoto from "../../Images/account.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import OrderDetailTable from "../../Dashboard/OrderDetailTable";
import styled from "styled-components";
import { CloudUpload } from "@material-ui/icons";
import firebase from "../../contexts/firebase";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F8F5F5",
    width: "60%",
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,
    justify: "center",
    minWidth: 350,
  },
  spacing: {
    margin: theme.spacing(1),
  },
  image: {
    width: 80,
    height: 80,
    margin: 10,
  },
  container2: {
    borderRadius: 5,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
      alignItems: "center",
    width:'100%'
  },
  text: {
    fontSize: 14,
    color: "#474747",

  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FE3131",
  },
}));

const Button2 = styled.button`
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


export default function V_OrderDetails(props) {
  const classes = useStyles();
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
        <Box display="flex" justifyContent="center" alignItems="center">
          <Grid container className={classes.container}>
            <Grid item lg={6} md={12} xs={12} sm={12}>
              <Grid
                container
                className={classes.spacing}
                direction="row"
                style={{ marginTop: 30 }}
              >
                <Typography
                  style={{ fontSize: 24, color: "#474747", fontWeight: "bold" }}
                >
                  Order Details
                </Typography>
                <div className={classes.spacing}>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#FE3131",
                      fontWeight: "bold",
                    }}
                  >
                    Order No: {props.location.state.oId}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item lg={6} md={12} xs={12} sm={12}>
              <Grid container direction="row" justify="center" align="center">
                <div className={classes.spacing}>
                  <Typography style={{ color: "#474747", fontSize: 14 }}>
                    Assigned PhleboID:123456
                  </Typography>
                </div>

                <Button2
                  style={{ backgroundColor: "#FE3131" }}
                  className={classes.spacing}
                >
                  Print
                </Button2>
              </Grid>
              <Grid container direction="row" justify="center" align="center">
                <div className={classes.spacing}>
                  <Button
                    style={{ width: "280px", border: "2px dotted #fe3131" }}
                    startIcon={<CloudUpload style={{ color: "#FE3131" }} />}
                  >
                    <text style={{ color: "#FE3131", fontSize: 10 }}>
                      Upload Report
                    </text>
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid item lg={2} xs={3}>
              <div>
                <img
                  src={Userphoto}
                  className={classes.image}
                  alt="image not present"
                />
              </div>
              <div className={classes.spacing}>
                <Typography style={{ fontSize: 14 }}>
                  {orderDetail.name}
                </Typography>
              </div>
            </Grid>{" "}
            <Grid item lg={6} xs={9}>
              <Grid
                container
                direction="row"
                alignItems="center"
                style={{ marginTop: 20 }}
              >
                <div className={classes.spacing}>
                  <Typography style={{ color: "#474747", fontSize: 14 }}>
                    User ID : 654321
                  </Typography>
                </div>{" "}
                <div className={classes.spacing}>
                  <Typography style={{ color: "#474747", fontSize: 14 }}>
                    Invoice No: BC12345678
                  </Typography>
                </div>
              </Grid>
              <Grid
                container
                direction="row"
                alignItems="center"
                style={{ marginTop: 20 }}
              >
                <button style={{ border: "none", color: "#FE3131" }}>
                  <FaCloudDownloadAlt size={20} />
                </button>
                <Typography style={{ color: "#474747", fontSize: 14 }}>
                  Prescription
                </Typography>{" "}
                <div style={{ marginLeft: 20 }}>
                  <button style={{ border: "none", color: "#4DDAF8" }}>
                    <FaCloudDownloadAlt size={20} />
                  </button>{" "}
                </div>
                <Typography style={{ color: "#474747", fontSize: 14 }}>
                  Invoice
                </Typography>{" "}
              </Grid>
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              display={{ xs: "none", lg: "block" }}
              component={Box}
            >
              <div className={classes.spacing} style={{ marginLeft: 100 }}>
                <Typography style={{ color: "#474747", fontSize: 14 }}>
                  {formatDate(orderDetail.date)}
                </Typography>
              </div>
              <div className={classes.spacing}>
                <Typography style={{ color: "#FE3131", fontSize: 14 }}>
                  Total Amount=
                  <text style={{ fontWeight: "bold", fontSize: 24 }}>
                    Rs {orderDetail.total}/-
                  </text>
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6}>
              <Grid container>
                <div className={classes.spacing}>
                  <Container>
                    <Typography style={{ fontSize: 14, color: "#474747" }}>
                      DOB: 21-11-1996
                    </Typography>
                    <Typography style={{ fontSize: 14, color: "#474747" }}>
                      +91 8660089070
                    </Typography>
                    <Typography style={{ fontSize: 14, color: "#474747" }}>
                      info@klehospital.com
                    </Typography>
                  </Container>
                </div>
                <div className={classes.spacing}>
                  <Typography style={{ fontSize: 14, color: "#474747" }}>
                    Age: <text style={{ color: "#FE3131" }}>54</text>
                  </Typography>{" "}
                  <Typography style={{ fontSize: 14, color: "#474747" }}>
                    Gender: <text style={{ color: "#FE3131" }}>Male</text>
                  </Typography>
                </div>
              </Grid>

              <Container style={{ padding: 30 }}>
                <Typography
                  style={{
                    color: "#474747",
                    fontSize: 14,
                  }}
                >
                  Billing Address:
                  <text style={{ color: "#9D9999" }}>
                    {orderDetail.address}
                  </text>
                </Typography>
              </Container>

              <Container style={{ padding: 30 }}>
                <Typography
                  style={{
                    color: "#474747",
                    fontSize: 14,
                  }}
                >
                  Shipping Address:
                  <text style={{ color: "#9D9999" }}>
                    {orderDetail.address}
                  </text>
                </Typography>
              </Container>

              <Container style={{ padding: 30 }}>
                <Typography
                  style={{
                    color: "#474747",
                    fontSize: 14,
                  }}
                >
                  Landmark:
                  <text style={{ color: "#9D9999" }}>Above IDBI Bank</text>
                </Typography>
              </Container>
            </Grid>
            <Grid item lg={6}>
              <Container>
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
              </Container>
              <Container
                className={classes.container2}
                style={{ marginTop: 30, marginBottom: 30 }}
              >
                <Grid container>
                  <div className={classes.spacing}>
                    <Typography className={classes.text}>
                      Bloodcell Fees
                    </Typography>
                    <center>
                      <Typography className={classes.heading}>150</Typography>
                    </center>
                  </div>{" "}
                  <div className={classes.spacing}>
                    <Typography className={classes.text}>
                      Bloodcell Fees
                    </Typography>
                    <center>
                      <Typography className={classes.heading}>150</Typography>
                    </center>
                  </div>
                  <div className={classes.spacing}>
                    <Typography className={classes.text}>
                      Bloodcell Fees
                    </Typography>
                    <center>
                      <Typography className={classes.heading}>150</Typography>
                    </center>{" "}
                  </div>
                </Grid>
              </Container>
              <div style={{ marginTop: 10, paddingLeft: 30 }}>
                <img
                  src={Userphoto}
                  className={classes.image}
                  alt="image not present"
                />
              </div>
              <div style={{ paddingLeft: 20 }}>
                <Typography style={{ color: "#474747", fontSize: 14 }}>
                  Sudhir Narayan Patil
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      ) : null}
    </>
  );
}
