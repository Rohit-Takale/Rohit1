import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { IconButton, TextField, Typography } from "@material-ui/core";
import { FaMinusCircle } from "react-icons/fa";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(0),
    },
    "& .MuiInputBase-input": {
      height: 3,
      fontSize: 15,
      backgroundColor: "#FBF9F9",
    },

    "& .MuiInputLabel-formControl": {
      color: "#9D9999",
      lineHeight: 0,
      fontSize: 10,
    },
    "& .MuiSelect-selectMenu": {
      minHeight: "0.1em",
    },
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#474747",
  },
  text: {
    fontSize: 14,
    color: "#474747",
    
  },
  textfield: {
    width: 100,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
    padding: "0px 0px",
  },
}));

const Button = styled.button`
  background-color: #fe3131;
  color: #fff;
  font-family: "Roboto", sans-serif;
  margin: 5px 5px;
  padding: 0px 0px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  font-size: 0.7rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
  border-color: #fe3131;
`;



function createData(Test, Rate) {
  return { Test, Rate };
}

const rows = [
  createData("Blood Test", 500),
  createData("Blood Test", 500),
  createData("Blood Test", 500),
  createData("Blood Test", 500),
  createData("Blood Test", 500),
  createData("Blood Test", 500),
];

export default function TestCalculationTable() {
    const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.heading}>Test Name</TableCell>
            <TableCell align="left" className={classes.heading}>
              Rate
            </TableCell>
            <TableCell align="center" className={classes.heading}>
              Remove
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Test}>
              <TableCell className={classes.text}>{row.Test}</TableCell>
              <TableCell className={classes.text} style={{ textAlign: "left" }}>
                {row.Rate}
              </TableCell>
              <TableCell align="center">
                <IconButton>
                  <FaMinusCircle size={18} style={{ color: "black" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="right">
              <div style={{ display: "flex" }}>
                <div style={{ marginTop: 5 }}>
                  <TextField
                    className={(classes.textfield, classes.root)}
                    variant="outlined"
                    label="Coupon"
                  ></TextField>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "#FE3131",
                      height: 38,
                      color: "#FFFFFF",
                      fontSize: 10,
                      paddingTop: 5,
                    }}
                  >
                    APPLY
                  </Button>
                </div>
              </div>
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: "bold", fontSize: 14 }}
            >
              Rs 3000
              <Typography
                style={{ color: "#474747", fontSize: 10, fontWeight: "bold" }}
              >
                8 Test Added
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
