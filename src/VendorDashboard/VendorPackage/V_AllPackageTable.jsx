import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Typography } from "@material-ui/core";
import clsx from "clsx";
import styled from "styled-components";
import firebase from "../../contexts/firebase";

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
}));

const Button2 = styled.button`
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  width: 100px;
  height: 25px;
  cursor: pointer;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
`;

// function createData(
//   PackageId,
//   Packagecategory,
//   Packagename,
//   PackageDescription,
//   Nooftests,
//   Type
// ) {
//   return {
//     PackageId,
//     Packagecategory,
//     Packagename,
//     PackageDescription,
//     Nooftests,
//     Type,
//   };
// }

// const rows = [
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test PackageDescription",
//     "5-7"
//   ),
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test PackageDescription",
//     "5-7"
//   ),
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test PackageDescription",
//     "5-7"
//   ),
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test PackageDescription",
//     "5-7"
//   ),
//   createData(
//     "BC011234",
//     "Blood Test",
//     "Blood Test",
//     "Test PackageDescription",
//     "5-7"
//   ),
// ];

export default function V_AllPackageTable() {
  const classes = useStyles();
    const [rows, setrows] = useState([]);
    const [allPackage, setAllPackage] = useState([]);

  
  useEffect(() => {
    getAllPackages();
  }, []);
  
const createData = ( PackageId, PackageCategory, Packagename, PackageDescription, NoOfTest,Status) => {
    return { PackageId, PackageCategory, Packagename, PackageDescription, NoOfTest,Status};
  }

  const setrowData = async (list, vendorid, totalTest, status, pkgstatus) => {
    await Object.keys(list).forEach(function (jB) {
      var arr = list[jB];

      setrows((i) => [
        ...i,
        createData(
          arr.package_id,
          arr.package_alertName,
          arr.package_name,
          arr.package_description,
          totalTest,
          pkgstatus
        ),
      ]);
      // console.log(arr); //will print the array belongs to each property.
    });
  };

  const getAllPackages = async () => {
    let id = "";
    var leadsRef = await firebase
      .database()
      .ref("ApprovedVendors/");
    await leadsRef.on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        // setaprovedTest(childSnapshot.val());
        let list = [];
        let totalTest = 0;
        let status = true + " ";
        let pkgstatus = "";

        childSnapshot
          .child("ApprovedPackages")
          .forEach((snap) => {
            id = childSnapshot.key;
            list.push(snap.val());

        
            totalTest = snap.child("package_tests/finalrows").numChildren();
            console.log(totalTest);

            status = snap.child("package_tests/finalrows").exists();
           status = snapshot.hasChild("RequestedPackages/package_id");
            
            console.log(status);
            if(status == true)
            {
              pkgstatus = "UnderAprroval";
            }
            else
            {
                   pkgstatus = "Aprroval";
              }
           
          });
        setAllPackage(list);
        setrowData(list, id, totalTest, status, pkgstatus);
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
              PackageID
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              PackageCategory
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF" }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              PackageName
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF", width: 150 }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              PackageDescription
            </TableCell>
            <TableCell
              style={{ backgroundColor: "FFFFFF", width: 50 }}
              align="center"
              className={clsx(classes.heading, classes.td)}
            >
              No.Of.Tests
            </TableCell>
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
            <TableRow key={row.PackageId}>
              <TableCell align="center" className={clsx(classes.text)}>
                {row.PackageId}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {row.Packagecategory}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.Packagename}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.PackageDescription}
              </TableCell>
              <TableCell
                align="center"
                className={clsx(classes.td, classes.text)}
              >
                {" "}
                {row.NoOfTest}
              </TableCell>{" "}
              <TableCell align="center" className={clsx(classes.text)}>
                <Typography style={{fontWeight:"bold",fontSize:12,color:"#474747"}}>{row.Status + ""}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
