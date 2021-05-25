import React, { useContext } from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export default function Displaydata() {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table
          border="1"
          style={{ width: "70%", justifyContent: "center" }}
          size="small"
          aria-label="caption Table"
        >
          <TableHead>
            <TableRow style={{ background: "burlywood", color: "aliceblue" }}>
              <TableCell>First Name</TableCell>
              <TableCell>Second Name</TableCell>
              <TableCell>Third Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>District</TableCell>
              <TableCell>PinCode</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((data) => (
              <TableRow key={data.email}>
                <TableCell>{data.firstname}</TableCell>
                <TableCell>{data.secondname}</TableCell>
                <TableCell>{data.thirdname}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.country}</TableCell>
                <TableCell>{data.district}</TableCell>
                <TableCell>{data.pincode}</TableCell>
                <TableCell>{data.contact}</TableCell>
                <TableCell>{data.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
