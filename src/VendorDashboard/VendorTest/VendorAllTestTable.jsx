import React, { useEffect, useState, useRef } from "react";

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
import styled from "styled-components";
import firebase from "../../contexts/firebase";
import { useHistory } from "react-router";

const Button2 = styled.button`
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  width: 60px;
  height: 25px;
  cursor: pointer;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
`;

const useStyles = makeStyles((theme) => ({
  table: {
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
    margin: theme.spacing(1),
  },
}));

// function createData(TestId, catagory, Testname, Description, Range, Type) {
//   return { TestId, catagory, Testname, Description, Range, Type };
// }

// const rows = [
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test Description",
//     "5-7",
//     "patho"
//   ),
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test Description",
//     "5-7",
//     "patho"
//   ),
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test Description",
//     "5-7",
//     "patho"
//   ),
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test Description",
//     "5-7",
//     "patho"
//   ),
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test Description",
//     "5-7",
//     "patho"
//   ),
// ];

export default function VendorAllTestTable() {
  const classes = useStyles();
   const history = useHistory();
  const [rows, setrows] = useState([]);
  const [alltests, setAlltests] = useState([]);

  useEffect(() => {
    getAllTests();
  }, []);

   const createData = (
     VendorId,
     TestId,
     SampleType,
     Testname,
     Description,
     SampleML,
     TestContainer,
     Type,
     TestAmount
   ) => {
     return {
       VendorId,
       TestId,
       SampleType,
       Testname,
       Description,
       SampleML,
       TestContainer,
       Type,
       TestAmount,
     };
   };

  const setrowData = async (list,id) => {
    await Object.keys(list).forEach(function (jB) {
      var arr = list[jB];

      setrows((i) => [
        ...i,
        createData(
          id,
          arr.test_id,
          arr.test_sampleType,
          arr.test_name,
          arr.test_description,
          arr.test_sampleSize,
          arr.test_tubeId,
          "Pathology",
          arr.test_paidAmount
        ),
      ]);
      // console.log(arr); //will print the array belongs to each property.
    });
  };

  

const getAllTests = async () => {
  let id = "";
  var leadsRef = await firebase.database().ref("ApprovedVendors");
  await leadsRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      // setaprovedTest(childSnapshot.val());
      let list = [];
      let totalTest = 0;

      childSnapshot.child("ApprovedTests").forEach((snap) => {
        id = childSnapshot.key;
        list.push(snap.val());
      });
      setAlltests(list);
      setrowData(list, id);
    });
  });
};
  

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
              Vendor ID
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              className={clsx(classes.heading, classes.td)}
            >
              Test ID
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Sample Type
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
              Sample ML
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Test Tube Type
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Type
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              Test Amount
            </TableCell>{" "}
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading)}
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.TestId}>
              <TableCell align="center" className={clsx(classes.text)}>
                {row.VendorId}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.TestId}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.SampleType}
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
                {row.SampleML}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.TestContainer}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Type}
              </TableCell>{" "}
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.TestAmount}
              </TableCell>
              <TableCell align="center" className={clsx(classes.text)}>
                {row.Status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
