import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import clsx from "clsx";
import firebase from "../../contexts/firebase";

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
  },
}));

export default function V_RejectedPackageDetailTable(props) {
  const classes = useStyles();
  const [rows, setrows] = useState([]);

  useEffect(() => {
    const vId = props.vId;
    const pId = props.pId;
    getPackageDetail(vId, pId);
  }, []);

  const createData = (
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

  const setrowData = async (list) => {
    await Object.keys(list).forEach(function (jB) {
      var arr = list[jB];

      setrows((i) => [
        ...i,
        createData(
          arr.TestId,
          arr.SampleType,
          arr.Testname,
          arr.Description,
          arr.SampleML,
          arr.TestContainer,
          arr.Type,
          arr.TestAmount
        ),
      ]);
      // console.log(arr); //will print the array belongs to each property.
    });
  };

  const getPackageDetail = async (vId, pId) => {
    var leadsRef = await firebase
      .database()
      .ref("ApprovedVendors/" + vId + "/RejectedPackages/" + pId);
    await leadsRef.on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let list = [];

        childSnapshot.child("finalrows").forEach((snap) => {
          console.log(snap.val());
          list.push(snap.val());
        });
        setrowData(list);
      });
    });
  };

  return (
    <TableContainer style={{ border: "0.5px solid  #474747", borderRadius: 5 }}>
      <Table className={classes.customTableContainer} aria-label="simple table">
        <TableHead>
          {console.log(rows)}
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
              Test Ammount
            </TableCell>{" "}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.TestId}
              // onClick={()=>{
              //   history.push({
              //     pathname: '/aprv_packages_details',
              //     state: {tId: row.TestId}})
              // }}
            >
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
