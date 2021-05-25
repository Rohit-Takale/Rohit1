import React, { useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import clsx from "clsx";
import styled from "styled-components";
import firebase from "../../contexts/firebase";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

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
  },
}));


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

const Button = styled.button`
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  width: 50px;
  height: 25px;
  cursor: pointer;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
`;

export default function VendorApprovedTestTable() {
  const classes = useStyles();
    const history = useHistory();
    const [rows, setrows] = useState([]);
  const [alltests, setAlltests] = useState([]);
  
   useEffect(() => {
     getAprovedTests();
   }, []);

   const createData = (
     vendorId,
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
       vendorId,
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

   const setrowData = async (list, vendorid) => {
     await Object.keys(list).forEach(function (jB) {
       var arr = list[jB];

       setrows((i) => [
         ...i,
         createData(
           vendorid,
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

   const getAprovedTests = async () => {
     let id = "";
     var leadsRef = await firebase.database().ref("ApprovedVendors");
     await leadsRef.on("value", function (snapshot) {
       snapshot.forEach(function (childSnapshot) {
         // setaprovedTest(childSnapshot.val());
         let list = [];

         childSnapshot.child("ApprovedTests").forEach((snap) => {
           id = childSnapshot.key;
           list.push(snap.val());
         });
         // setaprovedTest(studentlist);
         setrowData(list, id);
       });
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
              style={{ backgroundColor: "FFFFFF" }}
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
                {row.SampleType}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.Testname}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.Description}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.SampleML}
              </TableCell>{" "}
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.TestContainer}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.Type}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.TestAmount}
              </TableCell>
              <TableCell align="center" className={clsx(classes.text)}>
                <div style={{ display: "flex" }}>
                  <Button
                    className={classes.button}
                    style={{ backgroundColor: "#4ddaf8" }}
                    onClick={() => {
                      history.push({
                        pathname: "/V_ApprovedTestDetails",
                        state: { vId: row.vendorId, tId: row.TestId },
                      });
                    }}
                  >
                  View
                  </Button>
                  <Button
                    className={classes.button}
                    style={{ backgroundColor: "#474747" }}
                  >
                  Update
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
