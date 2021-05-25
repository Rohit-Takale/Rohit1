import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import firebase from "../../contexts/firebase";
import React, { useEffect, useState, useRef } from "react";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIncons from "react-icons/fi";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import styled from "styled-components";
import { TestForm, Form } from "./TestForm";
import * as employeeService from "../../Services/employeeService";
import Controls from "../../Components/controls/Controls";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(0),
    },
    "& .MuiInputBase-input": {
      height: 3,
      fontSize: 15,
      backgroundColor: "#FBF9F9",
    },

    "& .MuiInputLabel-formControl": {
      color: "#9D9999",
      lineHeight: 0,
      fontSize: 10,
    },
    "& .MuiSelect-selectMenu": {
      minHeight: "0.1em",
    },
  },
  textfield: {
    margin: 5,
    width: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  button2: {
    margin: theme.spacing(1),
    fontSize: 10,
    color: "#474747",
    fontWeight: "bold",
    height: 35,
  },
  button22: {
    width: 100,
    fontSize: 10,
    color: "#FFFFFF",
    margin: theme.spacing(1),
    height: 25,
  },
  container: {
    width: "60%",
    backgroundColor: "#F8F5F5",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    minWidth:340
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FE3131",
  },
  spacing: {
    margin: theme.spacing(1),
  },
  spacing2: {
    margin: theme.spacing(4),
  },
  card1: {
    width: 150,
    height: 120,
    borderRadius: 10,
    alignItems: "center",
    margin: theme.spacing(1),
    minWidth: 75,
    minHeight: 60,
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
}));

const departmentItems = [
  { id: "wholeblood", title: "Whole Blood " },
  { id: "sputum", title: "Sputum" },
  { id: "uren", title: "Uren" },
  { id: "swab", title: "Swab" },
  { id: "Stool", title: "Stool" },
];

const initialValues = {
  id: "",
  testname: "",
  testaltername: "",
  testdescription: "",
  precaution: "",
  testdetails: "",
  sampleId: "",
  sellingprice: "",
  testcontainer: "",
  test: "",
  fees: "",
  savingcharge: "",
  paidamount: "",
  departmentItems: "wholeblood",
  testtubeId: "",
};

const Button2 = styled.button`
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  width: 90px;
  height: 25px;
  cursor: pointer;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
`;

export default function VendorAddTest() {
  const classes = useStyles();

   const [randomId, setRandomId] = useState(0);

  const [testImage, setTestImage] = useState(null);
  
  const inputFile = useRef(null);
  
    useEffect(() => {
      randomNumber();
    }, []);


  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("testname" in fieldValues)
      temp.testname = fieldValues.testname ? "" : "Empty";

    if ("testaltername" in fieldValues)
      temp.testaltername = fieldValues.testaltername ? "" : "Empty";

    if ("testdescription" in fieldValues)
      temp.testdescription = fieldValues.testdescription ? "" : "Empty";

    if ("precaution" in fieldValues)
      temp.precaution = fieldValues.precaution ? "" : "Mandatory";

    if ("testdetails" in fieldValues)
      temp.testdetails = fieldValues.testdetails ? "" : "Mandatory";
    if ("testtubeId" in fieldValues)
      temp.testtubeId = fieldValues.testtubeId ? "" : "Mandatory";
    if ("sampleId" in fieldValues)
      temp.sampleId = fieldValues.sampleId ? "" : "Mandatory";
    if ("sellingprice" in fieldValues)
      temp.sellingprice = fieldValues.sellingprice ? "" : "Mandatory";
    if ("fees" in fieldValues) temp.fees = fieldValues.fees ? "" : "Mandatory";
    if ("savingcharge" in fieldValues)
      temp.savingcharge = fieldValues.savingcharge ? "" : "Mandatory";
    if ("paidamount" in fieldValues)
      temp.paidamount = fieldValues.paidamount ? "" : "Mandatory";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, handleInputChange, errors, setErrors } = TestForm(
    initialValues,
    true,
    validate
  );

const addToApprove = () => {
  var testApprove = firebase
    .database()
    .ref(
      "ApprovedVendors/23KBYyqMSLZ1tpEH8YSsWMOCdKY2/ApprovedTests/" + randomId
    );
  testApprove.set({
    test_id: randomId,
    test_name: values.testname,
    test_alertName: values.testaltername,
    test_sample: values.test,
    test_sampleSize: values.sampleId,
    test_sampleType: values.departmentItems,
    test_fees: values.fees,
    test_paidAmount: values.paidamount,
    test_precaution: values.precaution,
    test_savingCharge: values.savingcharge,
    test_sellingPrice: values.sellingprice,
    test_container: values.testcontainer,
    test_description: values.testdescription,
    test_deatils: values.testdetails,
    test_tubeId: values.testtubeId,
  });

  var storageRef = firebase.storage().ref("VendorsDocs");
  var metadata = {
    contentType: "image/jpeg",
  };

  // Upload the file and metadata
  storageRef
    .child("23KBYyqMSLZ1tpEH8YSsWMOCdKY2/documents/" + randomId + "/testImage")
    .put(testImage, metadata)
    .then(window.alert("Docoment Uploaded!"));
};

const onButtonClick = () => {
  inputFile.current.click();
};

const handleFileUpload = (e) => {
  var file1 = document.getElementById("files").files[0];
  console.log(file1);
  setTestImage(file1);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    addToApprove();
    window.alert("successfull");
  } else {
    window.alert("fill all details");
  }
};

  const { push } = useHistory();


   const randomNumber = () => {
     const min = 1;
     const max = 100000;
     const rand = Math.floor(min + Math.random() * (max - min));
     setRandomId("TEST_" + rand);
   };

  return (
    <>
      <center>
        <div>
          <Grid container className={classes.container}>
            <Grid item lg={4} xs={12} justify="center" alignItems="center">
              <div className={classes.spacing}>
                {" "}
                <Typography
                  style={{
                    fontSize: 24,
                    color: "#FE3131",
                    fontWeight: "bold",
                  }}
                >
                  Test Management
                </Typography>
              </div>
            </Grid>
            <Grid item lg={8} xs={12}>
              <div className={classes.spacing}>
                <Button2
                  className={classes.button22}
                  style={{ backgroundColor: "#4DDAF8" }}
                  type="button"
                  onClick={() => push("/VendorApprovedTest")}
                >
                  Accepted
                </Button2>
                <Button2
                  className={classes.button22}
                  style={{ backgroundColor: "#474747" }}
                  type="button"
                  onClick={() => push("/VendorRejectedTests")}
                >
                  Rejected
                </Button2>
                <Button2
                  type="button"
                  onClick={() => push("/VendorAddTest")}
                  className={classes.button22}
                  style={{ backgroundColor: "#FE3131" }}
                >
                  New Test
                </Button2>
                <Button2
                  type="button"
                  onClick={() => push("/VendorAllTests")}
                  className={classes.button22}
                  style={{ backgroundColor: "#9D9999" }}
                >
                  Existing Tests
                </Button2>{" "}
                <Button2
                  type="button"
                  onClick={() => push("/V_AddToCenter")}
                  className={classes.button22}
                  style={{ backgroundColor: "#FE3131" }}
                >
                  Add to center
                </Button2>
              </div>
            </Grid>

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
          <div>
            <Grid container className={classes.container}>
              <Grid item lg={12} xs={12} md={12}>
                <Grid container className={classes.spacing}>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#474747",
                      fontWeight: "bold",
                    }}
                  >
                    TestId:<text>12345</text>
                  </Typography>
                </Grid>
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
                      name="testname"
                      label="Test Name"
                      value={values.testname}
                      onChange={handleInputChange}
                      error={errors.testname}
                    />
                    <Controls.Input4
                      name="testaltername"
                      label="Test Alter Name"
                      value={values.testaltername}
                      onChange={handleInputChange}
                      error={errors.testaltername}
                    />

                    <Button
                      variant="contained"
                      component="label"
                      className={classes.button2}
                      startIcon={<CloudUploadIcon />}
                      onClick={() => {
                        onButtonClick();
                      }}
                    >
                      <input
                        type="file"
                        hidden
                        ref={inputFile}
                        onChange={handleFileUpload}
                        id="files"
                        name="files[]"
                        multiple
                      />
                      Upload image
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                  <Grid container className={classes.spacing}>
                    <Typography
                      style={{
                        fontSize: 14,
                        color: "#474747",
                        fontWeight: "bold",
                      }}
                    >
                      Sample Type
                    </Typography>
                  </Grid>
                  <center>
                    <hr style={{ border: "0.1px solid #9D9999" }} />
                  </center>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Controls.RadioGroup
                      name="departmentItems"
                      lable="Department"
                      value={values.departmentItems}
                      onChange={handleInputChange}
                      items={departmentItems}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    className={classes.spacing}
                  >
                    <Grid item lg={2} xs={12}>
                      <div style={{ marginTop: 15 }}>
                        <Typography style={{ color: "#474747", fontSize: 14 }}>
                          Sample ML
                        </Typography>
                        <Typography style={{ color: "#4DDAF8", fontSize: 12 }}>
                          2ml to 5ml
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item lg={5} xs={12}>
                      <div className={classes.spacing}>
                        <div>
                          <Controls.Select3
                            name="sampleId"
                            label="Select Sample Size"
                            value={values.sampleId}
                            onChange={handleInputChange}
                            options={employeeService.getSampleCollection()}
                            error={errors.sampleId}
                          />
                          {console.log(values.sampleId)}
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={5} xs={12}></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    className={classes.spacing}
                  >
                    <Grid item lg={2} xs={12}>
                      <div style={{}}>
                        <Typography style={{ color: "#474747", fontSize: 12 }}>
                          Test-Tube Type
                        </Typography>
                        <Typography style={{ color: "#4DDAF8", fontSize: 12 }}>
                          With color code
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item lg={10} xs={12}>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        justify="center"
                      >
                        <div>
                          <Controls.Select3
                            name="testtubeId"
                            label="Test Tube Type"
                            value={values.testtubeId}
                            onChange={handleInputChange}
                            options={employeeService.getTestTubeCollection()}
                            error={errors.testtubeId}
                          />
                        </div>

                        <div>
                          <Typography
                            style={{ fontSize: 12, color: "#474747" }}
                          >
                            Test Container
                          </Typography>
                          <Controls.Input3
                            name="testcontainer"
                            value={values.testcontainer}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Typography
                            style={{ fontSize: 12, color: "#474747" }}
                          >
                            Swab
                          </Typography>
                          <Controls.Input3
                            name="test"
                            value={values.test}
                            onChange={handleInputChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>{" "}
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  justify="center"
                >
                  <Grid item lg={3} xs={12} md={12} sm={12}>
                    <Typography
                      style={{
                        color: "#474747",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      Test Description
                    </Typography>
                  </Grid>
                  <Grid item lg={9} xs={12} md={12} sm={12}>
                    <Container>
                      <Controls.MultilineInput2
                        name="testdescription"
                        placeholder="Pricing"
                        value={values.testdescription}
                        onChange={handleInputChange}
                        error={errors.testdescription}
                      />
                    </Container>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  justify="center"
                >
                  <Grid item lg={3} xs={12} md={12} sm={12}>
                    <div>
                      <Typography
                        style={{
                          color: "#474747",
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        Precaution Description
                      </Typography>
                    </div>
                  </Grid>{" "}
                  <Grid item lg={9} xs={12} md={12} sm={12}>
                    <Container>
                      <Controls.MultilineInput2
                        name="precaution"
                        placeholder="Precaution Description"
                        value={values.precaution}
                        onChange={handleInputChange}
                        error={errors.precaution}
                      />
                    </Container>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  justify="center"
                >
                  <Grid item lg={3} xs={12} md={12} sm={12}>
                    <Typography
                      style={{
                        color: "#474747",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      OtherDetails
                    </Typography>
                  </Grid>

                  <Grid item lg={9} xs={12} md={12} sm={12}>
                    <Container maxWidth="lg">
                      <Controls.MultilineInput2
                        name="testdetails"
                        placeholder="Test Details here"
                        value={values.testdetails}
                        onChange={handleInputChange}
                        error={errors.testdetails}
                      />
                    </Container>
                  </Grid>
                </Grid>
                <div className={classes.spacing}>
                  <Grid container direction="row" spacing={1}>
                    <Grid item lg={2}>
                      <div style={{ marginTop: 20 }}>
                        <text
                          style={{
                            fontSize: 14,
                            color: "#474747",
                            fontWeight: "bold",
                          }}
                        >
                          TestId:12345{" "}
                        </text>
                      </div>
                    </Grid>
                    <Grid item lg={2.5}>
                      {" "}
                      <Controls.Input3
                        name="sellingprice"
                        label="Selling Price"
                        value={values.sellingprice}
                        onChange={handleInputChange}
                        error={errors.sellingprice}
                      />
                    </Grid>
                    <Grid item lg={2.5}>
                      {" "}
                      <Controls.Input3
                        name="fees"
                        label="Fees"
                        value={values.fees}
                        onChange={handleInputChange}
                        error={errors.fees}
                      />
                    </Grid>
                    <Grid item lg={2.5}>
                      {" "}
                      <Controls.Input3
                        name="savingcharge"
                        label="Saving Charge"
                        value={values.savingcharge}
                        onChange={handleInputChange}
                        error={errors.savingcharge}
                      />
                    </Grid>
                    <Grid item lg={2}>
                      {" "}
                      <Controls.Input3
                        name="paidamount"
                        label="Paid Amount"
                        value={values.paidamount}
                        onChange={handleInputChange}
                        error={errors.paidamount}
                      />
                    </Grid>
                  </Grid>
                  <Grid item lg={12}>
                    <div className={classes.spacing2}>
                      <Grid container>
                        <Button2
                          onclick={handleSubmit}
                          type={"submit"}
                          style={{
                            backgroundColor: "#FE3131",
                            color: "#FFFFFF",
                            fontSize: 10,
                            width: 150,
                          }}
                        >
                          SUBMITION FOR REVIEW
                        </Button2>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Form>
            </Grid>
          </div>
        </div>
      </center>
    </>
  );
}
