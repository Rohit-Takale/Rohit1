import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  Button,
  Container,
  TextField
} from "@material-ui/core";
import "./Package.css";
import Popup from "reactjs-popup";
import firebase from "../../contexts/firebase";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIncons from "react-icons/fi";
import Controls from "../../Components/controls/Controls";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import * as employeeService from "../../Services/employeeService";
import { useHistory } from "react-router";
import { PackageForm, Form } from "./PackageForm";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import clsx from "clsx";

const initialValues = {
  id: "0",
  packagename: "",
  packagealtername: "",
  packageId: "",
  packagedescription: "",
  testinpkg: "",

  selling: "",
  fees: "",
  servicecharge: "",
  paidamount: "",
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F8F5F5",
    marginTop: 10,
    marginBottom: 10,
    width: "62%",
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 345,
  },
  heading: {
    color: "#FE3131",
    fontSize: 24,
    fontWeight: "bold",
  },
  spacing: {
    margin: theme.spacing(1),
  },
  card1: {
    width: 150,
    height: 120,
    borderRadius: 10,
    alignItems: "center",
    margin: theme.spacing(1),
  },
  cardHeading: {
    fontWeight: "bold",
    color: "#474747",
    fontSize: 18,
    textAlign: "center",
  },
  cardtext: {
    fontSize: 10,
    color: "#9D9999",
    textAlign: "center",
  },
  icon: {
    color: "#fe3131",
  },
  table: {
    minWidth: 350,
    maxHeight: 300,
  },
  td: {
    borderRight: "solid 1px #9D9999",
    borderLeft: "solid 1px #9D9999",
  },
  tableheading: {
    fontSize: 12,
    color: "#474747",
    fontWeight: "bold",
  },
}));

const Button1 = styled.button`
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

const contentStyle = {
  maxWidth: "600px",
  width: "90%",
  backgroundColor: "#ffffff",
  padding: 20,

  // display: none;
  // position: fixed;
  // z-index: 1;
  // background-color: rgba(0, 0, 0, 0.25);
};
const modalOverlayStyle = {
  backdropFilter: "blur(1px)",
  position: "fixed",
  zIndex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.25)",
};

export default function VendorAddPackage() {
  const classes = useStyles();
  const { push } = useHistory();

  const [randomId, setRandomId] = useState(0);
  const [testImage, setTestImage] = useState(null);

    const [testName, settestName] = useState("");
    const [testSample, settestSample] = useState("");
    const [testDescription, settestDescription] = useState("");
    const [testSampleML, settestSampleML] = useState("");
    const [testTubeType, setTubeType] = useState("");
    const [testType, settestType] = useState("");
    const [testAmount, settestAmount] = useState("");
    const [rows, setrows] = useState([]);
    const [finalrows, setfinalrows] = useState([]);
    const [randomTestId, setrandomTestId] = useState(0);
    const [packageImage, setPackageImage] = useState(null);

  const inputFile = useRef(null);

  useEffect(() => {
    randomNumber();
    getAprovedTests();
  }, []);

 const validate = (fieldValues = values) => {
   let temp = { ...errors };

   if ("packagename" in fieldValues)
     temp.packagename = fieldValues.packagename ? "" : "Empty";

   if ("packagealtername" in fieldValues)
     temp.packagealtername = fieldValues.packagealtername ? "" : "Empty";

   if ("packagedescription" in fieldValues)
     temp.packagedescription = fieldValues.packagedescription ? "" : "Empty";

   if ("fees" in fieldValues)
     temp.fees = fieldValues.fees ? "" : "Mandatory";
   if ("paidamount" in fieldValues)
     temp.paidamount = fieldValues.paidamount ? "" : "Mandatory";
   setErrors({
     ...temp,
   });
   if (fieldValues == values) return Object.values(temp).every((x) => x == "");
 };
  const { values, setValues, handleInputChange, errors, setErrors } =
    PackageForm(initialValues, true, validate);
 
 
  const handleSubmit = (e) => {
   e.preventDefault();
   console.log(packageImage);
   console.log(values.packagename);
   if (validate()) {
     addToApprove();
     window.alert("successfull");
   } else {
     window.alert("fill all details");
   }
  };
  
  const handleNameChange = (e) => {
    let val = e.target.value;
    settestName(val);
  };
  const handleSampleChange = (e) => {
    let val = e.target.value;
    settestSample(val);
  };
  const handledescriptionChange = (e) => {
    let val = e.target.value;
    settestDescription(val);
  };
  const handlesampMLChange = (e) => {
    let val = e.target.value;
    settestSampleML(val);
  };
  const handleTubeTypeChange = (e) => {
    let val = e.target.value;
    setTubeType(val);
  };
  const handleTypeChange = (e) => {
    let val = e.target.value;
    settestType(val);
  };
  const handleAmountChange = (e) => {
    let val = e.target.value;
    settestAmount(val);
  };


  const addToApprove = () =>{
    var testApprove = firebase
      .database()
      .ref(
        "ApprovedVendors/23KBYyqMSLZ1tpEH8YSsWMOCdKY2/ApprovedPackages/" +
          randomId
      );
    testApprove.set({
      package_id: randomId,
      package_name: values.packagename,
      package_alertName: values.packagealtername,
      package_description: values.packagedescription,
      package_tests: {
        // test_id: randomTestId,
        // test_name: testName,
        // test_sampleSize: testSampleML,
        // test_sampleType: testSample,
        // test_tubeId: testTubeType,
        // test_description: testDescription,
        // test_type: testType,
        // test_paidAmount: testAmount,
        finalrows,
      },
      package_fees: values.fees,
      package_paidAmount: values.paidamount,
      package_savingCharge: values.savingcharge,
      package_sellingPrice: values.sellingprice,
    });

    var storageRef = firebase.storage().ref("VendorsDocs");
    var metadata = {
      contentType: "image/jpeg",
    };
    // Upload the file and metadata
    storageRef
      .child(
        "23KBYyqMSLZ1tpEH8YSsWMOCdKY2/documents/" + randomId + "/packageImage"
      )
      .put(packageImage, metadata)
      .then(window.alert("Docoment Uploaded!"));
  }

    const handleFileUpload = (e) => {
      var file1 = document.getElementById("files").files[0];
      console.log(file1);
      setPackageImage(file1);
    };
 
  
  const randomNumber = () => {
    const min = 1;
    const max = 100000;
    const rand = Math.floor(min + Math.random() * (max - min));
    setRandomId("PACKAGE_" + rand);
    setrandomTestId("TEST_" + rand);
  };

    const createData = (TestId, SampleType, Testname, Description, SampleML, TestContainer, Type, TestAmount) => {
    return { TestId, SampleType, Testname, Description, SampleML, TestContainer, Type, TestAmount };
  }

   const setrowData = async (list) =>{
   await Object.keys(list).forEach(function(jB){
      var arr = list[jB];
      
     setrows((i) => [
       ...i,
       createData(
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
    })
  }

  const getAprovedTests = async () => {
    var leadsRef = await firebase.database().ref("ApprovedVendors");
    await leadsRef.on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        // setaprovedTest(childSnapshot.val());
        let list = [];
        childSnapshot.child("ApprovedTests").forEach((snap) => {
          list.push(snap.val());
        });
        // setaprovedTest(studentlist);
        setrowData(list);
      });
    });
  };


  return (
    <>
      <center>
        <Grid container className={classes.container}>
          <Grid item lg={4} xs={12}>
            <Typography className={classes.heading}>
              Package Management
            </Typography>
          </Grid>
          <Grid item lg={8} xs={12}>
            <Button1
              className={classes.spacing}
              style={{ backgroundColor: "#4DDAF8" }}
              type="button"
              onClick={() => push("/V_ApprovedPackage")}
            >
              Accepted
            </Button1>

            <Button1
              className={classes.spacing}
              style={{ backgroundColor: "#474747" }}
              type="button"
              onClick={() => push("/V_RejectedPackages")}
            >
              Rejected Package
            </Button1>

            <Button1
              className={classes.spacing}
              style={{ backgroundColor: "#FE3131" }}
              type="button"
              onClick={() => push("/VendorAddPackage")}
            >
              New Package
            </Button1>
            <Button1
              className={classes.spacing}
              style={{ backgroundColor: "#9D9999" }}
              type="button"
              onClick={() => push("/V_AllPackages")}
            >
              Existing Package
            </Button1>
          </Grid>
          {/* Card Design */}

          <Grid item lg={3} sm={6} xs={12} md={6}>
            <Card className={classes.card1}>
              <center>
                <FiIncons.FiClock
                  style={{ paddingTop: 15 }}
                  className={classes.icon}
                  size={30}
                />
              </center>
              <CardContent>
                <Typography className={classes.cardHeading}>150</Typography>
                <Typography className={classes.cardtext}>
                  Orders under approval
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} md={6} justify="center">
            <Card className={classes.card1}>
              <center>
                <MdIcons.MdMotorcycle
                  style={{ paddingTop: 15 }}
                  className={classes.icon}
                  size={30}
                />
              </center>
              <CardContent>
                <Typography className={classes.cardHeading}>70</Typography>
                <Typography className={classes.cardtext}>
                  No of Coupons used
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} md={6} justify="center">
            <Card className={classes.card1}>
              <center>
                <IoIcons.IoMdCheckboxOutline
                  style={{ paddingTop: 15 }}
                  className={classes.icon}
                  size={30}
                />
              </center>
              <CardContent>
                <Typography className={classes.cardHeading}>30</Typography>
                <Typography className={classes.cardtext}>
                  Coupons Online
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} md={6} justify="center">
            <Card className={classes.card1}>
              <center>
                <IoIcons.IoMdClose
                  style={{ paddingTop: 15 }}
                  className={classes.icon}
                  size={30}
                />
              </center>
              <CardContent>
                <Typography className={classes.cardHeading}>10</Typography>
                <Typography className={classes.cardtext}>
                  Expired Coupons
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item lg={12} sm={12} xs={12} md={12}>
            <div
              style={{ float: "left", marginLeft: 30 }}
              className={classes.spacing}
            >
              <Typography>Package ID:12345</Typography>
            </div>
          </Grid>
          <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Grid item lg={12}>
              <Grid
                container
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.spacing}
              >
                <Controls.Input4
                  name="packagename"
                  label="Package Name"
                  value={values.packagename}
                  onChange={handleInputChange}
                  error={errors.packagename}
                />
                <Controls.Input4
                  name="packagealtername"
                  label="Package Alter Name"
                  value={values.packagealtername}
                  error={errors.packagealtername}
                  onChange={handleInputChange}
                />
                <div className={classes.spacing}>
                  <Button
                    variant="contained"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                  >
                    <input
                      type="file"
                      hidden
                      ref={inputFile}
                      onChange={handleFileUpload}
                      id="files"
                    />
                    Upload image
                  </Button>
                </div>
              </Grid>
              {/*  <Grid item lg={12} sm={12} xs={12} md={12}>
                <Grid container className={classes.spacing}>
                  <Controls.Select3
                    name="packageId"
                    label="Add To Package"
                    value={values.packageId}
                    error={errors.packageId}
                    options={employeeService.getPackageCollection()}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              */}
              <Grid item lg={12}>
                <Typography
                  style={{ color: "#474747", fontSize: 14, fontWeight: "bold" }}
                >
                  Add Existing Tests In Package
                </Typography>
                <Container>
                  <div style={{ paddingTop: 15 }}>
                    <TableContainer
                      style={{
                        border: "0.5px solid  #474747",
                        borderRadius: 5,
                      }}
                    >
                      <Table
                        className={
                          (classes.table, classes.customTableContainer)
                        }
                        aria-label="simple table"
                      >
                        <TableHead>
                          {console.log(rows)}
                          <TableRow>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              className={classes.tableheading}
                            >
                              Test ID
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Sample Type
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Test Name
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF", width: 150 }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Description
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Sample ML
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Test Tube Type
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Type
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Test Ammount
                            </TableCell>{" "}
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading)}
                            >
                              Action
                            </TableCell>
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
                              <TableCell
                                align="center"
                                className={clsx(classes.text)}
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
                              <TableCell
                                align="center"
                                className={clsx(classes.text)}
                              >
                                <Button1
                                  className={classes.button}
                                  style={{ backgroundColor: "#474747" }}
                                  onClick={() => {
                                    setfinalrows((i) => [...i, row]);
                                  }}
                                >
                                  Add To Package
                                </Button1>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </Container>

                {/* <div style={{ paddingLeft: 50 }}>
                    <MultilineInput
                      name="testinpackage"
                      placeholder="Enter the test names separated by coma"
                      value={values.testinpackage}
                      onChange={handleInputChange}
                      error={errors.testinpackage}
                    />
                  </div> */}

                <hr />

                <Typography
                  style={{ color: "#474747", fontSize: 14, fontWeight: "bold" }}
                >
                  Total Tests In Package
                </Typography>
                <Container>
                  <div style={{ paddingTop: 15 }}>
                    <TableContainer
                      style={{
                        border: "0.5px solid  #474747",
                        borderRadius: 5,
                      }}
                    >
                      <Table
                        className={
                          (classes.table, classes.customTableContainer)
                        }
                        aria-label="simple table"
                      >
                        <TableHead>
                          {console.log(rows)}
                          <TableRow>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              className={classes.tableheading}
                            >
                              Test ID
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Sample Type
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Test Name
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF", width: 150 }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Description
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Sample ML
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Test Tube Type
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Type
                            </TableCell>
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading, classes.td)}
                            >
                              Test Amount
                            </TableCell>{" "}
                            <TableCell
                              style={{ backgroundColor: "FFFFFF" }}
                              align="center"
                              className={clsx(classes.tableheading)}
                            >
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {finalrows.map((row) => (
                            <TableRow
                              key={row.TestId}
                              // onClick={()=>{
                              //   history.push({
                              //     pathname: '/aprv_packages_details',
                              //     state: {tId: row.TestId}})
                              // }}
                            >
                              <TableCell
                                align="center"
                                className={clsx(classes.text)}
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
                              <TableCell
                                align="center"
                                className={clsx(classes.text)}
                              >
                                <Button1
                                  className={classes.button}
                                  style={{ backgroundColor: "#474747" }}
                                  onClick={() => {
                                    let newrow = [];
                                    newrow.push(row);
                                    console.log(newrow);
                                  }}
                                >
                                  Delete
                                </Button1>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </Container>
                <hr />

                <Popup
                  trigger={
                    <button type="button" className="button">
                      {" "}
                      ADD NEW TEST{" "}
                    </button>
                  }
                  modal
                  lockScroll={true}
                  contentStyle={contentStyle}
                  nested
                  overlayStyle={modalOverlayStyle}
                >
                  {(close) => (
                    <div className="modal">
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                      <div className="header"> Add New Test in Package </div>
                      <Typography
                        style={{ fontSize: 14, margin: 10, color: "#474747" }}
                      >
                        TestId:
                        <text style={{ marginLeft: 7, fontWeight: "bold" }}>
                          {randomTestId}
                        </text>
                      </Typography>
                      <div className="content">
                        <Typography
                          style={{
                            marginRight: 5,
                            fontSize: 14,
                            color: "#9d9999",
                          }}
                        >
                          Test Name :
                        </Typography>
                        <TextField
                          value={testName}
                          onChange={handleNameChange}
                        ></TextField>
                        <br />
                      </div>
                      <div className="content">
                        <Typography
                          style={{
                            marginRight: 5,
                            fontSize: 14,
                            color: "#9d9999",
                          }}
                        >
                          Test Sample Type :
                        </Typography>
                        <TextField
                          value={testSample}
                          onChange={handleSampleChange}
                        ></TextField>
                        <br />
                      </div>
                      <div className="content">
                        <Typography
                          style={{
                            marginRight: 5,
                            fontSize: 14,
                            color: "#9d9999",
                          }}
                        >
                          Test Description :
                        </Typography>
                        <TextField
                          value={testDescription}
                          onChange={handledescriptionChange}
                        ></TextField>
                        <br />
                      </div>
                      <div className="content">
                        <Typography
                          style={{
                            marginRight: 5,
                            fontSize: 14,
                            color: "#9d9999",
                          }}
                        >
                          Test Sample ML :
                        </Typography>
                        <Controls.Select3
                          name="sampleId"
                          label="Select Sample Size"
                          value={testSampleML}
                          onChange={handlesampMLChange}
                          options={employeeService.getSampleCollection()}
                          error={errors.sampleId}
                        />
                        <br />
                      </div>
                      <div className="content">
                        <Typography
                          style={{
                            marginRight: 5,
                            fontSize: 14,
                            color: "#9d9999",
                          }}
                        >
                          Test Tube Type :
                        </Typography>
                        <Controls.Select3
                          name="testtubeId"
                          label="Test Tube Type"
                          value={testTubeType}
                          onChange={handleTubeTypeChange}
                          options={employeeService.getTestTubeCollection()}
                          error={errors.testtubeId}
                        />
                        <br />
                      </div>
                      <div className="content">
                        <Typography
                          style={{
                            marginRight: 5,
                            fontSize: 14,
                            color: "#9d9999",
                          }}
                        >
                          Test Type :
                        </Typography>
                        <TextField
                          value={testType}
                          onChange={handleTypeChange}
                        ></TextField>
                        <br />
                      </div>
                      <div className="content">
                        <Typography
                          style={{
                            marginRight: 5,
                            fontSize: 14,
                            color: "#9d9999",
                          }}
                        >
                          Test Amount :
                        </Typography>
                        <TextField
                          value={testAmount}
                          onChange={handleAmountChange}
                        ></TextField>
                        <br />
                      </div>
                      <Button1
                        className="button"
                        style={{ margin: 50 }}
                        onClick={() => {
                          let inputrow = {
                            TestId: randomTestId,
                            SampleType: testSample,
                            Testname: testName,
                            Description: testDescription,
                            SampleML: testSampleML,
                            TestContainer: testTubeType,
                            Type: testType,
                            TestAmount: testAmount,
                          };
                          setfinalrows((i) => [...i, inputrow]);
                          close();
                        }}
                      >
                        Submit
                      </Button1>
                    </div>
                  )}
                </Popup>
              </Grid>

              <Grid
                container
                directio="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                className={classes.spacing}
              >
                <Grid item lg={3}>
                  <Typography
                    style={{
                      color: "#474747",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    Package Description
                  </Typography>
                </Grid>
                <Grid item lg={9}>
                  <Container>
                    <Controls.MultilineInput2
                      name="packagedescription"
                      placeholder="Package Description"
                      value={values.packagedescription}
                      onChange={handleInputChange}
                      error={errors.packagedescription}
                    />
                  </Container>
                </Grid>
              </Grid>
              <Grid
                container
                directio="row"
                justifyContent="center"
                alignItems="center"
                className={classes.spacing}
              >
                <div>
                  <Typography style={{ fontSize: 14, color: "#474747" }}>
                    PackageID:
                    <text style={{ marginLeft: 7, fontWeight: "bold" }}>
                      {randomId}
                    </text>
                  </Typography>
                </div>
                <Controls.Input3
                  name="sellingprice"
                  label="Selling Price"
                  value={values.sellingprice}
                  onChange={handleInputChange}
                  error={errors.sellingprice}
                />

                <Controls.Input3
                  name="fees"
                  label="Fees"
                  value={values.fees}
                  onChange={handleInputChange}
                  error={errors.fees}
                />

                <Controls.Input3
                  name="savingcharge"
                  label="Saving Charge"
                  value={values.savingcharge}
                  onChange={handleInputChange}
                  error={errors.savingcharge}
                />

                <Controls.Input3
                  name="paidamount"
                  label="Paid Amount"
                  value={values.paidamount}
                  onChange={handleInputChange}
                  error={errors.paidamount}
                />
              </Grid>
              <Grid item lg={12}>
                <Grid container>
                  <Button1
                    onclick={handleSubmit}
                    type={"submit"}
                    style={{
                      backgroundColor: "#FE3131",
                      color: "#FFFFFF",
                      fontSize: 14,
                      width: 200,
                      height: 40,
                      padding: 10,
                      margin: 10,
                    }}
                  >
                    SUBMITION FOR REVIEW
                  </Button1>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </center>
    </>
  );
}
