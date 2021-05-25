import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { multiStepContext } from "../UserRegistration/StepContext";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { UseForm, Form } from "../Components/UseForm";
import Controls from "../Components/controls/Controls";
import clsx from "clsx";
import "../App/App.css";
import "../index.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useHistory } from "react-router";


const initialVendorValues = {
  id: "0",
  gst: "",
};

const uploadStyles = makeStyles((theme) => ({
  root: {
    "& .MuiButton-label": {
      display: "inherit",
      paddingLeft: "20px",
      justifyContent: "left",
      alignItems: "inherit"
    },
    },

  button: {
    margin: theme.spacing(1),
    width: "360px",
    border: "dashed thin",
    backgroundColor: "White",
    color: "#9D9999",
    borderColor: "Black",
    justifyContent: "center",
    alignItems: "center",
    textAlign:"start",
    borderRadius:"5px",
  },
}));







export default function Second() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

    const validate = (fieldValues = values) => {
      let temp = { ...errors };

      if ("gst" in fieldValues)
        temp.gst = fieldValues.gst ? "" : "Empty";

      setErrors({
        ...temp,
      });
      if (fieldValues == values)
        return Object.values(temp).every((x) => x == "");
    };
  
  
    const {
      values,
      setValues,
      handleInputChange,
      errors,
      setErrors,
      register,
      getValues,
  } = UseForm(initialVendorValues);

    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        window.alert("successfull");
        history.push(setStep(4));
      } else {
        window.alert("InCorrect details");
      }
    };
  
  const upload = uploadStyles();
  return (
    <div>
      <h4 className="heading_info">Upload Documents</h4>
      <Container maxWidth="sm">
        <Box py={3} px={3} bgcolor="white" boxShadow={3} borderRadius={10}>
          <center>
            <div>
              <Form>
                <fieldset>
                  <legend color="red">Required Documents</legend>
                  <div>
                    <Button
                      variant="contained"
                      component="label"
                      color="default"
                      style={{ marginTop: "20px" }}
                      className={clsx(upload.button, upload.root)}
                      startIcon={<CloudUploadIcon />}
                    >
                      {" "}
                      <input type="file" hidden />
                      Registration Certificate
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ marginTop: "20px" }}
                      color="default"
                      className={clsx(upload.button, upload.root)}
                      startIcon={<CloudUploadIcon />}
                    >
                      <input type="file" hidden />
                      Pollution Control Certificate
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ marginTop: "20px" }}
                      color="default"
                      className={clsx(upload.button, upload.root)}
                      startIcon={<CloudUploadIcon />}
                    >
                      <input type="file" hidden />
                      Waste Management Certificate
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="default"
                      component="label"
                      style={{ marginTop: "20px" }}
                      className={clsx(upload.button)}
                      startIcon={<CloudUploadIcon />}
                    >
                      <input type="file" hidden />
                      Shop Act/Corporation Certificate
                    </Button>
                  </div>
                  <div>
                    <Controls.Input2
                      name="gst"
                      label="GST No Optional"
                      value={values.gst}
                      onChange={handleInputChange}
                      error={errors.gst}
                    />
                  </div>
                  <div>
                    <center>
                      <Controls.Button2
                        variant="contained"
                        color="secondary"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Controls.Button2>
                      <span> </span>
                      <Controls.Button1
                        variant="contained"
                        onClick={handleSubmit}
                      >
                        Next
                      </Controls.Button1>
                    </center>
                  </div>
                </fieldset>
              </Form>
            </div>
          </center>
        </Box>
      </Container>
    </div>
  );
}
