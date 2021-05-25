import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import closestIndexTo from "date-fns/fp/closestIndexTo/index.js";
import { ThemeConsumer } from "styled-components";
import Controls from "../../Components/controls/Button3";
import styled from "styled-components";

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
    marginLeft: theme.spacing(1),
    marginBottom:theme.spacing(1),
  },
}));

function createData(TestId, catagory, Testname, Description, Range, Type) {
  return { TestId, catagory, Testname, Description, Range, Type };
}

const rows = [
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test Description",
    "5-7",
    "patho"
  ),
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test Description",
    "5-7",
    "patho"
  ),
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test Description",
    "5-7",
    "patho"
  ),
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test Description",
    "5-7",
    "patho"
  ),
  createData(
    "BC011234",
    "Blood Test",
    "Blood Test",
    "Test Description",
    "5-7",
    "patho"
  ),
];

const Button = styled.button`
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  width: 70px;
  height: 25px;
  cursor: pointer;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
`;

export default function V_AddToCenterTable() {
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
              Test ID
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Catagory
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Test Name
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF", width: 150 }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Description
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Range
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Type
            </TableCell>{" "}
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
            <TableRow key={row.TestId}>
              <TableCell align="center" className={clsx(classes.text)}>
                {row.TestId}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.catagory}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Testname}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Description}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Range}
              </TableCell>{" "}
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Type}
              </TableCell>
              <TableCell align="center" className={clsx(classes.text)}>
                <Button
                  className={classes.button}
                  style={{ backgroundColor: "#FE3131" }}
                >
                  Add Center
                </Button>
                <Button
                  className={classes.button}
                  style={{ backgroundColor: "#4ddaf8" }}
                >
                  Update Test
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
