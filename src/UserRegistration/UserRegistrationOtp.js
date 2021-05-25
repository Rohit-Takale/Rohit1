import React, { useContext ,useState } from "react";
import { UseForm, Form } from '../Components/UseForm';
import Controls from "../Components/controls/Controls";
import { CgGoogle } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import Button1 from "../Components/Button1";
import { Container, Box, Grid } from "@material-ui/core";
import { multiStepContext } from "../UserRegistration/StepContext";

const initialUserOtpValues = {
  id: '0',
  usermobilenumber: '',
  userotp: '',
}

export default function UserRegistrationOtp() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [setIndex, index] = useState(0);
    const { values, setValues, handleInputChange } = UseForm(
      initialUserOtpValues
    );
    return (
      <>
        <Form>
          <center>
            <Container maxWidth="md">
              <Grid Container>
                <Box
                  py={3}
                 
                  bgcolor="white"
                  boxShadow={3}
                  borderRadius={10}
                >
                  <h4 className="heading_info">Sign Up With Mobile Number</h4>

                  <Controls.Input2
                    name="usermobilenumber"
                    label="Mobile Number"
                    value={values.username}
                    onChange={handleInputChange}
                  />
                  <h4 className="heading_info">OR</h4>
                  <div>
                    <button
                      className="icon-button"
                      style={{ border: "none", background: "#E8E8E8" }}
                    >
                      <CgGoogle color="grey" size="2rem" />
                    </button>
                    <span></span>
                    <button
                      className="icon-button"
                      style={{ border: "none", background: "#E8E8E8" }}
                    >
                      <FaFacebookSquare color="grey" size="2rem" />
                    </button>
                  </div>
                  <div>
                    <Button1 variant="contained" color="secondary">
                      Get Otp
                    </Button1>
                  </div>
                </Box>
              </Grid>
            </Container>
          </center>
          <h4 className="heading_info">OR</h4>
          <center>
            <Container maxWidth="md">
              <Box
                py={3}
                bgcolor="white"
                boxShadow={3}
                borderRadius={10}
              >
                <h4 className="heading_info">Enter Your Otp</h4>

                <Controls.Input2
                  name="userotp"
                  label="Enter The Otp"
                  value={values.userotp}
                  onChange={handleInputChange}
                />

                <Button1
                  variant="contained"
                  color="secondary"
                  onClick={() => setStep(2)}
                >
                  Submit
                </Button1>
              </Box>
            </Container>
          </center>
        </Form>
      </>
    );
}
