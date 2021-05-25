import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import FormLogo from "../Images/FormLogo.svg";
import { UseForm, Form } from "../Components/UseForm";
import * as employeeService from "../Services/employeeService";
import Controls from "../Components/controls/Controls";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
  },

  logo: {
    paddingLeft: 10,
    width: 100,
    height: 100,
  },
});

const initialUserVerifyValues = {
  id: "0",
  username: "",
  usermobile: "",
  useremail: "",
  userage: "",
  usergenderId: "",
  useraddress: "",
  userlandmark: "",
  userstateId: "",
  userpincode: "",
  usercityId: "",
  doctorname:"",
};


export default function PatientDetails() {

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("username" in fieldValues)
      temp.username = fieldValues.username ? "" : "Please Enter Your Name";
    if ("userage" in fieldValues)
      temp.userage = fieldValues.userage ? "" : "Mandatory";
    if ("userlandmark" in fieldValues)
      temp.userlandmark = fieldValues.userlandmark
        ? ""
        : "This field is required ";
    if ("useraddress" in fieldValues)
      temp.useraddress = fieldValues.useraddress
        ? ""
        : "This field is required ";
    if ("useremail" in fieldValues)
      temp.useremail = /$^|.+@.+..+/.test(fieldValues.useremail)
        ? ""
        : "Invalid Email Adress";
    if ("usermobile" in fieldValues)
      temp.usermobile = /^[0-9\b]+$/.test(fieldValues.usermobile)
        ? ""
        : "Invalid Phone Number ";
    if ("usergenderId" in fieldValues)
      temp.usergenderId =
        fieldValues.usergenderId.length != 0 ? "" : "This field is required ";
    if ("userstateId" in fieldValues)
      temp.userstateId =
        fieldValues.userstateId.length != 0 ? "" : "This field is required ";
    if ("userpincodeId" in fieldValues)
      temp.userpincodeId =
        fieldValues.userpincodeId.length != 0 ? "" : "This field is required ";
    if ("usercityId" in fieldValues)
      temp.usercityId =
        fieldValues.usercityId.length != 0 ? "" : "This field is required ";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };


  const { values, setValues, handleInputChange, errors, setErrors } = UseForm(
    initialUserVerifyValues,
    true,
    validate
  );

    const history = useHistory();
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate())
      window.alert("validation successFul")
  }

  const classes = useStyles();
  return (
    <>
      <center>
        <div
          style={{
            backgroundColor: "#FE3131",
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <Container maxWidth="sm">
            <Grid container className={classes.container} justify="center">
              <Grid item lg={6} xs={6}>
                <img
                  src={FormLogo}
                  className={classes.logo}
                  alt="logo absent"
                />
              </Grid>
              <Grid item lg={6} xs={6}>
                <div style={{ paddingRight: 30, paddingTop: 25 }}>
                  <text style={{ fontSize: 20, float: "right" }}>
                    Hi,Sandeep
                  </text>
                  <button
                    style={{
                      backgroundcolor: "#FE3131",
                      border: "none",
                      float: "right",
                    }}
                  >
                    <HiUserCircle size={30} style={{ color: "#FE3131" }} />
                  </button>
                </div>
              </Grid>

              <Grid
                item
                className={classes.form}
              >
          
                
                    <div>
                      <Typography>New User Registration</Typography>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <div>
                        <Controls.Input2
                          name="username"
                          label="Name"
                          value={values.username}
                          onChange={handleInputChange}
                          error={errors.username}
                        />
                      </div>
                      <div>
                        <Controls.Input2
                          name="usermobile"
                          label="Phone Number"
                          value={values.usermobile}
                          onChange={handleInputChange}
                          error={errors.usermobile}
                        />
                      </div>
                      <div>
                        <Controls.Input2
                          name="useremail"
                          label="Email Adress"
                          value={values.useremail}
                          onChange={handleInputChange}
                          error={errors.useremail}
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 ,paddingLeft:20}}>
                          <Controls.Select
                            name="usergenderId"
                            label="Gender"
                            value={values.usergenderId}
                            onChange={handleInputChange}
                            options={employeeService.getGenderCollection()}
                            error={errors.usergenderId}
                          />
                        </div>
                        <div style={{ flex: 1,paddingRight:20 }}>
                          <Controls.Input
                            name="userage"
                            label="Age"
                            value={values.userage}
                            onChange={handleInputChange}
                            error={errors.userage}
                          />
                        </div>
                      </div>
                      <div>
                        <Controls.Input2
                          name="useraddress"
                          label="Adress"
                          value={values.useraddress}
                          onChange={handleInputChange}
                          error={errors.useraddress}
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 ,marginLeft:20}}>
                          <Controls.Select
                            name="userstateId"
                            label="State"
                            value={values.userstateId}
                            onChange={handleInputChange}
                            options={employeeService.getDepartmentCollection()}
                            error={errors.userstateId}
                          />
                        </div>
                        <div style={{ flex: 1 ,marginRight:20 }}>
                          <Controls.Select
                            name="usercityId"
                            label="City"
                            value={values.usercityId}
                            onChange={handleInputChange}
                            options={employeeService.getCityCollection()}
                            error={errors.usercityId}
                          />
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 ,marginLeft:20}}>
                          <Controls.Input
                            name="userlandmark"
                            label="Landmark"
                            value={values.userlandmark}
                            onChange={handleInputChange}
                            error={errors.userlandmark}
                          />
                        </div>

                        <div style={{ flex: 1,marginRight:20 }}>
                          <Controls.Input
                            name="userpincode"
                            label="Pincode"
                            value={values.userpincode}
                            onChange={handleInputChange}
                            error={errors.userpincode}
                          />
                        </div>
                      </div>
                      <div>
                        <Controls.Input2
                          name="doctorname"
                          label="Doctor Name"
                          value={values.doctorname}
                          onChange={handleInputChange}
                          error={errors.doctorname}
                        />
                      </div>
                      <div
                        style={{ paddingBottom: "20px" }}
                      >
                        <Button
                          variant="filled"
                          component="label"
                          style={{
                            backgroundColor: "#474747",
                            color: "#FFFFFF",
                            height: "60px",
                            width: "300px",
                            borderRadius: "15px",
                          }}
                        >
                          <input type="file" hidden />
                          <text style={{ color: "#FFFFFF", fontSize: 12 }}>
                            Upload the Precription
                          </text>
                        </Button>
                      </div>

                      <div
                        style={{ paddingBottom: "60px" }}
                      >
                        <center>
                          <Button
                            variant="filled"
                            onClick={handleSubmit}
                            style={{
                              backgroundColor: "#FE3131",
                              width: "300px",
                              height: "40px",
                            }}
                          >
                            <AiOutlineArrowRight
                              size={25}
                              style={{ color: "#ffffff" }}
                            />
                          </Button>
                        </center>
                      </div>
                    </Form>
              </Grid>
            </Grid>
          </Container>
        </div>
      </center>
    </>
  );
}
