import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIncons from "react-icons/fi";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { PackageForm, Form } from "./PackageForm";
import * as employeeService from "../../Services/employeeService";
import Controls from "../../Components/controls/Controls";
import MultilineInput from "../../Components/controls/MultilineInput";
import { useHistory } from "react-router";

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
  button: {
    margin: theme.spacing(1),
    fontSize: 10,
    color: "#474747",
    fontWeight: "bold",
    height: 35,
  },
  button2: {
    width: 100,
    fontSize: 10,
    color: "#FFFFFF",
    margin: theme.spacing(1),
    height: 25,
  },
  container: {
    width: "60%",
    marginLeft: 300,
    backgroundColor: "#F8F5F5",
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    minWidth: 700,
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FE3131",
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
}));

const initialValues = {
  id: "0",
  packagename: "",
  packagealtername: "",
  testinpackage: "",
  packagedescription: "",
  packageId: "",
  sellingprice: "",
  fees: "",
  savingcharge: "",
  paidamount: "",
};

export default function AddPackage() {
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("packagename" in fieldValues)
      temp.packagename = fieldValues.packagename ? "" : "Empty";
    if ("packagealtername" in fieldValues)
      temp.packagealtername = fieldValues.packagealtername ? "" : "Empty";

    if ("testinpackage" in fieldValues)
      temp.testinpackage = fieldValues.testinpackage ? "" : "Empty";

    if ("packagedescription" in fieldValues)
      temp.packagedescription = fieldValues.packagedescription ? "" : "Mandatory";

  
    if ("packageId" in fieldValues)
      temp.packageId = fieldValues.packageId ? "" : "Mandatory";
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

  const {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
  } = PackageForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("successfull");
    } else {
      window.alert("fill all details");
    }
  };

  return (
    <>
      <div>
        <Grid container className={classes.container}>
          <Grid item lg={12}>
            <div style={{ display: "flex" }}>
              {" "}
              <Typography
                style={{ fontSize: 20, color: "#FE3131", fontWeight: "bold" }}
              >
                Package Management
              </Typography>
              <div style={{ marginLeft: 100 }}>
                <Button
                  className={classes.button2}
                  style={{ backgroundColor: "#4DDAF8" }}
                >
                  Accepted
                </Button>
                <Button
                  className={classes.button2}
                  style={{ backgroundColor: "#474747" }}
                >
                  Rejected
                </Button>
                <Button
                  className={classes.button2}
                  style={{ backgroundColor: "#FE3131" }}
                >
                  New Test
                </Button>
                <Button
                  className={classes.button2}
                  style={{ backgroundColor: "#9D9999" }}
                >
                  Existing Tests
                </Button>
              </div>
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
                  Total Packages
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
                  Packages Under Approval
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
                  Accepted Packages
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
                  Rejected Packages
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div>
          <Grid container className={classes.container}>
            <Grid item lg={12} xs={12} md={12}>
              <Typography style={{ fontSize: 14, color: "#474747" }}>
                Package ID:<text>12345</text>
              </Typography>
            </Grid>
            <Form onSubmit={handleSubmit}>
              <Grid item lg={12}>
                <div style={{ display: "flex" }}>
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
                    onChange={handleInputChange}
                    error={errors.packagealtername}
                  />
                  <div style={{ marginTop: 5 }}>
                    <Button
                      variant="contained"
                      component="label"
                      className={classes.button}
                      startIcon={<CloudUploadIcon />}
                    >
                      <input type="file" hidden />
                      Upload image
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={12}>
                <div>
                  <Controls.Select3
                    name="packageId"
                    label="Add To Package"
                    options={employeeService.getPackageCollection()}
                    value={values.packageId}
                    onChange={handleInputChange}
                    error={errors.packageId}
                  />{" "}
                </div>
              </Grid>
              <Grid item xs={12} lg={12}></Grid>
              <Grid item lg={12}>
                <div style={{ display: "flex" }}>
                  <div style={{ paddingTop: 15 }}>
                    <Typography style={{ color: "#474747", fontSize: 14 }}>
                      Test In Packages
                    </Typography>
                  </div>
                  <div style={{ paddingLeft: 50 }}>
                    <MultilineInput
                      name="testinpackage"
                      placeholder="Enter the test names separated by coma"
                      value={values.testinpackage}
                      onChange={handleInputChange}
                      error={errors.testinpackage}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item lg={12}>
                <div style={{ display: "flex" }}>
                  <div style={{ paddingTop: 15 }}>
                    <Typography style={{ color: "#474747", fontSize: 14 }}>
                      Package Description
                    </Typography>
                  </div>
                  <div style={{ paddingLeft: 25 }}>
                    <MultilineInput
                      name="packagedescription"
                      placeholder="Package Description"
                      value={values.packagedescription}
                      onChange={handleInputChange}
                      error={errors.packagedescription}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item lg={10}>
                <div style={{ display: "flex" }}>
                  <div style={{ marginTop: 20 }}>
                    <Typography style={{ fontSize: 14, color: "#474747" }}>
                      PackageID:<text>12345</text>
                    </Typography>
                  </div>
                  <div style={{ flex: 0, marginLeft: 35 }}>
                    <Controls.Input3
                      name="sellingprice"
                      label="Selling Price"
                      value={values.sellingprice}
                      onChange={handleInputChange}
                      error={errors.sellingprice}
                    />
                  </div>{" "}
                  <div style={{ flex: 0 }}>
                    <Controls.Input3
                      name="fees"
                      label="Fees"
                      value={values.fees}
                      onChange={handleInputChange}
                      error={errors.fees}
                    />
                  </div>{" "}
                  <div style={{ flex: 0 }}>
                    <Controls.Input3
                      name="savingcharge"
                      label="Saving Charge"
                      value={values.savingcharge}
                      onChange={handleInputChange}
                      error={errors.savingcharge}
                    />
                  </div>{" "}
                  <div style={{ flex: 0 }}>
                    <Controls.Input3
                      name="paidamount"
                      label="Paid Amount"
                      value={values.paidamount}
                      onChange={handleInputChange}
                      error={errors.paidamount}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item lg={12}>
                <Button
                  onclick={handleSubmit}
                  type={"submit"}
                  style={{
                    backgroundColor: "#FE3131",
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}
                >
                  SUBMITION FOR REVIEW
                </Button>
              </Grid>
            </Form>
          </Grid>
        </div>
      </div>
    </>
  );
}
