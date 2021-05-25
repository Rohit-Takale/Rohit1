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
    fontSize: 14,
    color: "#474747",
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    color: "#474747",
  },
  td: {
    borderRight: "solid 1px #9D9999",
    borderLeft: "solid 1px #9D9999",
  },
});

function createData(CouponId, CouponDescription, validity, NoOfCoupon,Used) {
  return { CouponId, CouponDescription, validity, NoOfCoupon, Used };
}

const rows = [
  createData(
    "BC011234",
    "PH123456",
    "5% Dicount on blood Test",
    "07/APR/21",
    300
  ),
  createData(
    "BC011234",
    "PH123456",
    "5% Dicount on blood Test",
    "07/APR/21",
    300
  ),
  createData(
    "BC011234",
    "PH123456",
    "5% Dicount on blood Test",
    "07/APR/21",
    300
  ),
  createData(
    "BC011234",
    "PH123456",
    "5% Dicount on blood Test",
    "07/APR/21",
    300
  ),
  createData(
    "BC011234",
    "PH123456",
    "5% Dicount on blood Test",
    "07/APR/21",
    300
    ),

];

export default function CouponTable() {
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
              CouponId
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              CouponDescription
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              validity
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              NoOfCoupon
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Used
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading)}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.CouponId}>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.CouponId}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.CouponDescription}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.validity}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.NoOfCoupon}
              </TableCell>

              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Used}
              </TableCell>
              <TableCell>
                <Button align="center" style={{backgroundColor:"#9D9999",color:"#FFFFFF",fontSize:8}}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
