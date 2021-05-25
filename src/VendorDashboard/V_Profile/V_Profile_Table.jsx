import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, IconButton, Typography } from "@material-ui/core";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";


const useStyles = makeStyles({
  table: {},
  customTableContainer: {},
});

function createData(Slno, Test) {
  return { Slno, Test};
}

const rows = [
  createData("Registration Certificate"),
  createData("Waste Management Certificate"),
  createData("Pollution Control Certificate"),
  createData("Shop Act / Corporation Certificate"),
];

export default function V_Profile_Table() {
  const classes = useStyles();

  return (
    <TableContainer
      style={{ minWidth: 30, maxWidth: 320, maxHeight: 300, padding: 10 }}
    >
      <Table
        className={(classes.table, classes.customTableContainer)}
        aria-label="simple table"
      >
        {" "}
        <Typography className={classes.text}>Documents</Typography>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Slno}>
              <TableCell>{row.Slno}</TableCell>
              <TableCell>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <InsertDriveFileIcon style={{ color: "#Fe3131" }} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
