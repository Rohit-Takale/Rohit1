import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import clsx from "clsx";
import closestIndexTo from "date-fns/fp/closestIndexTo/index.js";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    maxHeight: 300,
  },
  heading: {
    fontSize: 10,
    color: "#474747",
    fontWeight: "bold",
  },
  text: {
    fontSize: 8,
    color: "#474747",
  },
  td: {
    borderRight: "solid 1px #9D9999",
    borderLeft: "solid 1px #9D9999",
  },
});

function createData(
  OrderId,
  PaymentId,
  Tests,
  InvoiceId,
 Amount,
  Fees,
  VEarnings,
  VPaymentInHand,
  Mode,
  Date,
  Status
) {
  return {
    OrderId,
    PaymentId,
    Tests,
    InvoiceId,
   Amount,
    Fees,
    VEarnings,
    VPaymentInHand,
    Mode,
    Date,
    Status,
  };
}

const rows = [
  createData(
    "BC011234",
    "PH123456",
    " Liver Test, Blood Test, Thyroid",
    123456,
    3000,
    300,
    1500,
    1800,
    "Cash",
    "09-04-2021",
    " UnPaid Or Paid"
  ),
  createData(
    "BC011234",
    "PH123456",
    " Liver Test, Blood Test, Thyroid",
    123456,
    3000,
    300,
    1500,
    1800,
    "Cash",
    "09-04-2021",
    " UnPaid Or Paid"
  ),
  createData(
    "BC011234",
    "PH123456",
    " Liver Test, Blood Test, Thyroid",
    123456,
    3000,
    300,
    1500,
    1800,
    "Cash",
    "09-04-2021",
    " UnPaid Or Paid"
  ),
  createData(
    "BC011234",
    "PH123456",
    " Liver Test, Blood Test, Thyroid",
    123456,
    3000,
    300,
    1500,
    1800,
    "Cash",
    "09-04-2021",
    " UnPaid Or Paid"
  ),
  createData(
    "BC011234",
    "PH123456",
    " Liver Test, Blood Test, Thyroid",
    123456,
    3000,
    300,
    1500,
    1800,
    "Cash",
    "09-04-2021",
    "UnPaid Or Paid"
  ),
];

export default function V_PaymentTable() {
  const classes = useStyles();

  return (
    <TableContainer style={{ border: "0.5px solid  #474747", borderRadius: 5 }}>
      <Table
        className={(classes.table, classes.customTableContainer)}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              className={classes.heading}
            >
              Order ID
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Payment ID
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF", width: "70px" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Tests
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Invoice ID
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Amount
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Fees
            </TableCell>{" "}
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              V-Earnings
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              V-Payment in Hand
            </TableCell>{" "}
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Mode
            </TableCell>{" "}
            <TableCell
              style={{ backgroundColor: "FFFFFF", width: "70px" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Date
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading)}
            >
              Status
            </TableCell>{" "}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.OrderID}>
              <TableCell align="center" className={clsx(classes.text)}>
                {row.OrderId}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.PaymentId}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Tests}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.InvoiceId}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Amount}
              </TableCell>{" "}
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Fees}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.VEarnings}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.VPaymentInHand}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Mode}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Date}
              </TableCell>
              <TableCell align="center" className={clsx(classes.text)}>
                {row.Status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
