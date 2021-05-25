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


const useStyles = makeStyles({
  table: {
    minWidth: 300,
    maxHeight: 300,
  },
  customTableContainer: {},
});

function createData(Slno,Test, Date) {
  return {Slno ,Test, Date };
}

const rows = [
  createData(1, "Blood Test", 300),
  createData(2, "Ice cream sandwich", 300),
  createData(3, "Eclair", 300),
  createData(4, "Cupcake", 300),
  createData(5, "Gingerbread", 300),
  createData(6, "Gingerbread", 300),
];

export default function SummaryTable() {
  const classes = useStyles();

  return (
    <TableContainer style={{ border: "0.5px solid  #474747",borderRadius:5}}>
      <Table
        className={(classes.table, classes.customTableContainer)}
        aria-label="simple table"
      >
        <Typography variant="h6" style={{ paddingBottom: 20,paddingTop:10}}>
          All Tests
        </Typography>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Slno}>
              <TableCell>{row.Slno}</TableCell>
              <TableCell>{row.Test}</TableCell>
              <TableCell style={{ color: "#FE3131", fontWeight: "bold" }}>
                {row.Date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
