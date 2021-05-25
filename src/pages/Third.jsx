import React, { useContext } from "react";
import { UseForm, Form } from "../Components/UseForm";
import Controls from "../Components/controls/Controls";
import { Container, Box } from "@material-ui/core";
import { multiStepContext } from "../UserRegistration/StepContext";
import "../App/App.css";
import { useHistory } from "react-router-dom";
import "../App/App.css";
import "../index.css";

const initialVendorValues = {
  id: "0",
  bankname: "",
  accno: "",
  reaccno: "",
  ifsc: "",
};

export default function Third() {
  const { setStep, userData, setUserData, submitData } = useContext(
    multiStepContext
  );

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("bankname" in fieldValues)
      temp.bankname = fieldValues.bankname ? "" : "Empty";

    if ("accno" in fieldValues) temp.accno = fieldValues.accno ? "" : "Empty";

    if ("reaccno" in fieldValues)
      temp.reaccno = fieldValues.reaccno ? "" : "Empty";

    if ("ifsc" in fieldValues) temp.ifsc = fieldValues.ifsc ? "" : "Mandatory";
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
    register,
    getValues,
  } = UseForm(initialVendorValues, true, validate);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("successfull");
      history.push('/');
    } else {
      window.alert("InCorrect details");
    }
  };

  return (
    <div>
      <h4 className="heading_info">Payment Details</h4>
      <Container maxWidth="sm">
        <Box py={3} px={3} bgcolor="white" boxShadow={3} borderRadius={10}>
          <Form>
            <fieldset>
              <legend color="red">Bank Details</legend>
              <center>
                <div>
                  <div>
                    <Controls.Input2
                      name="bankname"
                      label="Bank Name"
                      value={values.bankname}
                      onChange={handleInputChange}
                      error={errors.bankname}
                    />
                  </div>
                  <div>
                    <Controls.Input2
                      name="accno"
                      label="Account Number"
                      value={values.accno}
                      onChange={handleInputChange}
                      error={errors.accno}
          
                    />
                  </div>
                  <div>
                    <Controls.Input2
                      name="reaccno"
                      label="Re-Enter Account Number"
                      value={values.reaccno}
                      onChange={handleInputChange}
                      error={errors.reaccno}
                     
                    />
                  </div>
                  <div>
                    <Controls.Input2
                      name="ifsc"
                      label="IFSC Code"
                      value={values.ifsc}
                      onChange={handleInputChange}
                      error={errors.ifsc}
                    />
                  </div>

                  <div>
                    <center>
                      <Controls.Button2
                        variant="contained"
                        color="secondary"
                        onClick={() => setStep(3)}
                      >
                        Back
                      </Controls.Button2>
                      <span> </span>
                      <Controls.Button1
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Controls.Button1>
                    </center>
                  </div>
                </div>
              </center>
            </fieldset>
          </Form>
        </Box>
      </Container>
    </div>
  );
}
