import React, { useContext } from "react";
import { UseForm, Form } from "../Components/UseForm";
import { Container, Box } from "@material-ui/core";
import Controls from "../Components/controls/Controls";
import * as employeeService from "../Services/employeeService";
import { multiStepContext } from "../UserRegistration/StepContext";
import "../App/App.css";
import { useHistory } from "react-router-dom";
import "../App/App.css";
import "../index.css";

const initialVendorValues = {
  id: "0",
  centername: "",
  address: "",
  email: "",
  stateId: "",
  designation: "",
  pincode: "",
  managerownerId: "",
  ownername: "",
  ownernumber: "",
  owneremail: "",
  cityId: "",
  ownername: "",
};

const departmentItems = [
  { id: "radiology", title: "Radiology " },
  { id: "pathology", title: "Pathology" },
];

export default function Fisrt() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("centername" in fieldValues)
      temp.centername = fieldValues.centername ? "" : "Empty";

    if ("designation" in fieldValues)
      temp.designation = fieldValues.designation ? "" : "Empty";

    if ("ownername" in fieldValues)
      temp.ownername = fieldValues.ownername ? "" : "Empty";
    if ("userage" in fieldValues)
      temp.userage = fieldValues.userage ? "" : "Mandatory";
    if ("userlandmark" in fieldValues)
      temp.userlandmark = fieldValues.userlandmark
        ? ""
        : "This field is required ";
    if ("address" in fieldValues)
      temp.address = fieldValues.address ? "" : "This field is required ";
    if ("owneremail" in fieldValues)
      temp.owneremail = /$^|.+@.+..+/.test(fieldValues.owneremail)
        ? ""
        : "Invalid Email Adress";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Invalid Email Adress";
    if ("ownernumber" in fieldValues)
      temp.ownernumber = /^[0-9\b]/.test(fieldValues.ownernumber)
        ? ""
        : "Invalid Phone Number ";
    if ("ownernumber" in fieldValues)
      temp.ownernumber =
        (fieldValues.ownernumber.length == 10) != 0
          ? ""
          : "Invalid Phone Number ";
    if ("usermobile" in fieldValues)
      temp.usermobile = /^[0-9\b]+$/.test(fieldValues.usermobile)
        ? ""
        : "Invalid Phone Number ";
    if ("usermobile" in fieldValues)
      temp.usermobile =
        (fieldValues.usermobile.length == 10) != 0
          ? ""
          : "Invalid Phone Number ";

    if ("stateId" in fieldValues)
      temp.stateId =
        fieldValues.stateId.length != 0 ? "" : "This field is required ";

    if ("managerownerId" in fieldValues)
      temp.managerownerId =
        fieldValues.managerownerId.length != 0 ? "" : "This field is required ";
    if ("pincode" in fieldValues)
      temp.pincode = fieldValues.pincode.length == 6 ? "" : "Invalid PinCode";
    if ("cityId" in fieldValues)
      temp.cityId =
        fieldValues.cityId.length != 0 ? "" : "This field is required ";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, handleInputChange, errors, setErrors } = UseForm(
    initialVendorValues,
    true,
    validate
  );

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("successfull");
      history.push(setStep(3));
    }
    else { window.alert("InCorrect details"); }
  };

  return (
    <>
      <h4 className="heading_info">Verificaiton</h4>
      <Container maxWidth="md">
        <Box py={3} px={3} bgcolor="white" boxShadow={3} borderRadius={10}>
          <center>
            <Form>
              <div>
                <fieldset style={{ maxWidth: 415 }}>
                  <legend color="red">Choose Diagnostic Department</legend>

                  <Controls.RadioGroup2
                    name=" department"
                    lable="Department"
                    value={values.departmentItems}
                    onChange={handleInputChange}
                    items={departmentItems}
                  />
                </fieldset>

                <div>
                  <fieldset style={{ maxWidth: 400 }}>
                    <legend color="red">Basic Information</legend>

                    <div>
                      <Controls.Input2
                        name="centername"
                        label="Center Name"
                        value={values.centername}
                        onChange={handleInputChange}
                        error={errors.centername}
                      />
                    </div>

                    <div>
                      <Controls.Input2
                        name="address"
                        label="Adress"
                        type="number"
                        value={values.address}
                        onChange={handleInputChange}
                        error={errors.address}
                      />
                    </div>
                    <div>
                      <Controls.Input2
                        name="email"
                        label="Email ID"
                        type="number"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                      />
                    </div>
                    <div>
                      <Controls.Select2
                        name="stateId"
                        label="Select State"
                        value={values.stateId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.stateId}
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Controls.Select
                          name="cityId"
                          label="Select City"
                          value={values.cityId}
                          onChange={handleInputChange}
                          options={employeeService.getCityCollection()}
                          error={errors.cityId}
                        />
                      </div>

                      <div style={{ flex: 1 }}>
                        <Controls.Input
                          name="pincode"
                          label="Pincode"
                          value={values.pincode}
                          onChange={handleInputChange}
                          error={errors.pincode}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <Controls.Select2
                          name="managerownerId"
                          label="Manager/Owner"
                          value={values.managerownerId}
                          onChange={handleInputChange}
                          options={employeeService.getMangerOwnerCollection()}
                          error={errors.managerownerId}
                        />
                      </div>
                      <div>
                        <Controls.Input2
                          name="ownername"
                          label="Owner Name"
                          value={values.ownername}
                          onChange={handleInputChange}
                          error={errors.ownername}
                        />
                      </div>
                      <div>
                        <Controls.Input2
                          name="designation"
                          label="Designation"
                          value={values.designation}
                          onChange={handleInputChange}
                          error={errors.designation}
                        />
                      </div>
                      <div>
                        <Controls.Input2
                          name="ownernumber"
                          label="Mobile Number"
                          value={values.ownernumber}
                          onChange={handleInputChange}
                          error={errors.ownernumber}
                        />
                      </div>
                      <div>
                        <Controls.Input2
                          name="owneremail"
                          label="Email Id"
                          value={values.owneremail}
                          onChange={handleInputChange}
                          error={errors.owneremail}
                        />
                      </div>
                    </div>
                    <div>
                      <Controls.Button1
                        variant="contained"
                        onClick={handleSubmit}
                        color="primary"
                      >
                        Next
                      </Controls.Button1>
                    </div>
                  </fieldset>
                </div>
              </div>
            </Form>
          </center>
        </Box>
      </Container>
    </>
  );
}
