import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { IconButton } from "@material-ui/core";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  heading: {
    fontSize: 18,
    color: "#474747",
    fontWeight: "bold"
  },
  text: {
    fontSize: 14,
    color: "#474747",
  }
});

function createData(Test,Description,Rate, Date) {
  return { Test,Description, Date,Rate };
}

const rows = [
  createData("Blood Test", "Blood Test Description", 500, "21-11-1996"),
  createData("Ice cream sandwich", "Blood Test Description", 500, "21-11-1996"),
  createData("Eclair", "Blood Test Description", 500, "21-11-1996"),
  createData("Cupcake", "Blood Test Description", 500, "21-11-1996"),
  createData("Gingerbread", "Blood Test Description", 500, "21-11-1996"),
  createData("Gingerbread", "Blood Test Description", 500, "21-11-1996"),
];

export default function AllTestsTable() {
  const classes = useStyles();

    return (
      <TableContainer>
        <Table
          className={(classes.table)}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.heading}>Test Name</TableCell>
              <TableCell align="left" className={classes.heading}>
                Description
              </TableCell>
              <TableCell align="left" className={classes.heading}>
                Rate
              </TableCell>
              <TableCell align="right" className={classes.heading}>
                Book
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Test}>
                <TableCell
                  className={classes.text}
                  style={{
                    width: 200,
                    fontWeight: "bold",
                  }}
                >
                  {row.Test}
                </TableCell>
                <TableCell
                  className={classes.text}
                  style={{ textAlign: "left" }}
                >
                  {row.Description}
                </TableCell>

                <TableCell style={{ textAlign: "left" }}>{row.Rate}</TableCell>

                <TableCell align="right">
                  <IconButton component={Link} to="/AddTest">
                    <IoIosAddCircle size={30} style={{ color: "black" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
