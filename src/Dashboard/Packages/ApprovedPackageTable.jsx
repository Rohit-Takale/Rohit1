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
import { ThemeConsumer } from "styled-components";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 350,
    maxHeight: 300,
  },
  heading: {
    fontSize: 12,
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
  button: {
    color: "#FFFFFF",
    width: 40,
    fontSize: 8,
  },
}));

function createData(
  PackageId,
  Packagecategory,
  Packagename,
  PackageDescription,
  Nooftests,
  Type
) {
  return {
    PackageId,
    Packagecategory,
    Packagename,
    PackageDescription,
    Nooftests,
    Type,
  };
}

const rows = [
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test PackageDescription",
    "5-7"
  ),
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test PackageDescription",
    "5-7"
  ),
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test PackageDescription",
    "5-7"
  ),
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test PackageDescription",
    "5-7"
  ),
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test PackageDescription",
    "5-7"
  ),
];

export default function ApprovedPackageTable() {
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
              PackageID
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              PackageCategory
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              PackageName
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF", width: 150 }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              PackageDescription
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF", width: 50 }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              No.Of.Tests
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
            <TableRow key={row.PackageId}>
              <TableCell align="center" className={clsx(classes.text)}>
                {row.PackageId}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Packagecategory}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.Packagename}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.PackageDescription}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.Nooftests}
              </TableCell>{" "}
              <TableCell
                style={{ width: 50 }}
                align="center"
                className={clsx(classes.text)}
              >
                <div>
                  <Button
                    className={classes.button}
                    style={{ backgroundColor: "#474747" }}
                  >
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
