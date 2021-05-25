import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
} from "@material-ui/core";
import "./styles.css";

const useStyles = makeStyles({
  customTableContainer: {
    maxHeight: 300,
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <TableContainer classes={{ root: classes.customTableContainer }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        {Array(10)
          .fill("Test")
          .map((e) => (
            <TableRow>
              <TableCell>{e}</TableCell>
            </TableRow>
          ))}
      </Table>
    </TableContainer>
  );
}
