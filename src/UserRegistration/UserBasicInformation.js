import React, { useContext } from "react";
import { UseForm, Form } from "../Components/UseForm";
import { Container, Box, Grid } from "@material-ui/core";
import Controls from "../Components/controls/Controls";
import * as employeeService from "../Services/employeeService";
import { multiStepContext } from "../UserRegistration/StepContext";
import "../App/App.css";
import { useHistory } from "react-router-dom";


const initialUserVerifyValues = {
  id: "0",
  username: "",
  useremail: "",
  usermobile: "",
  userage: "",
  usergenderId: "",
  useraddress: "",
  userlandmark: "",
  userstateId: "",
  userpincode: "",
  usercityId: "",
};

export default function UserBasicInformation() {
  const { setStep, userData, setUserData,submitData } = useContext(multiStepContext);

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
         temp.usermobile =
           /^[0-9\b]+$/.test(fieldValues.usermobile)
          
             ? ""
          : "Invalid Phone Number ";
      if ("usermobile" in fieldValues)
        temp.usermobile =
          fieldValues.usermobile.length == 10 != 0
            ? ""
            : "Invalid Phone Number ";
      if ("usergenderId" in fieldValues)
        temp.usergenderId =
          fieldValues.usergenderId.length != 0 ? "" : "This field is required ";
      if ("userstateId" in fieldValues)
        temp.userstateId =
          fieldValues.userstateId.length != 0 ? "" : "This field is required ";
       if ("userpincode" in fieldValues)
         temp.userpincode =
           fieldValues.userpincode.length<=6 != 0 ? "" : "Invalid PinCode";
      if ("usercityId" in fieldValues)
        temp.usercityId =
          fieldValues.usercityId.length != 0 ? "" : "This field is required ";
    setErrors({
      ...temp
    })
  if(fieldValues == values)
    return Object.values(temp).every((x) => x == "");
};
  

  const { values, setValues, handleInputChange, errors, setErrors } = UseForm(
    initialUserVerifyValues,true,validate
  );


  const history = useHistory();
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validate())
      history.push('/HomePage')
    else
      window.alert("Fill the Correct details")

    
 };
  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: 20, marginBottom: 20 }}>
        <Box py={3} bgcolor="white" boxShadow={3} borderRadius={10}>
          <Grid container alignItems="center" justify="center">
            <Grid item>
              <h4 className="heading_info">Sign Up With Mobile Number</h4>
              <fieldset>
                <legend color="red">Basic Information</legend>
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
                  <Controls.Input2
                    name="useremail"
                    label="Email Id"
                    value={values.useremail}
                    onChange={handleInputChange}
                    error={errors.useremail}
                  />
                  <Controls.Input2
                    name="usermobile"
                    label="Mobile Number"
                    type="integer"
                    value={values.usermobile}
                    onChange={handleInputChange}
                    error={errors.usermobile}
                  />
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                      <Controls.Input
                        name="userage"
                        label="Age"
                        value={values.userage}
                        onChange={handleInputChange}
                        error={errors.userage}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <Controls.Select
                        name="usergenderId"
                        label="Gender"
                        value={values.usergenderId}
                        onChange={handleInputChange}
                        options={employeeService.getGenderCollection()}
                        error={errors.usergenderId}
                      />
                    </div>
                  </div>

                  <Controls.Input2
                    name="useraddress"
                    label="Address"
                    value={values.useraddress}
                    onChange={handleInputChange}
                    error={errors.useraddress}
                  />
                  <Controls.Input2
                    name="userlandmark"
                    label="Land Mark"
                    value={values.userlandmark}
                    onChange={handleInputChange}
                    error={errors.userlandmark}
                  />
                  <Controls.Select2
                    name="userstateId"
                    label="State"
                    value={values.userstateId}
                    onChange={handleInputChange}
                    options={employeeService.getDepartmentCollection()}
                    error={errors.userstateId}
                  />
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, paddingRight: 0 }}>
                      <Controls.Select
                        name="usercityId"
                        label="City"
                        value={values.usercityId}
                        onChange={handleInputChange}
                        options={employeeService.getCityCollection()}
                        error={errors.usercityId}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <Controls.Input
                        name="userpincode"
                        label="Pincode"
                        value={values.userpincode}
                        onChange={handleInputChange}
                        error={errors.userpincode}
                      />
                    </div>
                  </div>
                  <center>
                    <Controls.Button1
                      variant="contained"
                      size="large"
                      text="submit"
                      type={"submit"}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Controls.Button1>
                  </center>
                </Form>
              </fieldset>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
