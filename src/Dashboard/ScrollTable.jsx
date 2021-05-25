import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, Typography } from "@material-ui/core";
import { FiFileText } from "react-icons/fi";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    maxHeight: 300,
  },
  customTableContainer: {},
});

function createData(Test, Date) {
  return { Test, Date };
}

const rows = [
  createData("Blood Test", "21-11-1996"),
  createData("Ice cream sandwich", "21-11-1996"),
  createData("Eclair", "21-11-1996"),
  createData("Cupcake", "21-11-1996"),
  createData("Gingerbread", "21-11-1996"),
  createData("Gingerbread", "21-11-1996"),
];

export default function ScrollTable() {
  const classes = useStyles();

    return (
    
        <TableContainer style={{maxHeight:300}}>
          <Table className={classes.table,classes.customTableContainer} aria-label="simple table">
            <Typography variant="h6" style={{ paddingLeft: "20px" }}>
              All Tests
            </Typography>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Test}>
                  <TableCell>
                    <FiFileText style={{ fontSize: 30, color: "red" }} />
                  </TableCell>
                  <TableCell>{row.Test}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      style={{
                        backgroundColor: "#EEEEEE",
                        color: "#4DDAF8",
                        width: "50%",
                        border: "1px solid #9D9999",
                      }}
                    >
                      VIEW
                    </Button>
                  </TableCell>
                  <TableCell>{row.Date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
   
    );
}
