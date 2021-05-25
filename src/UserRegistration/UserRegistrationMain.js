import "../App/App.css";
import "../index.css";
import React, { useContext } from "react";
import UserRegistrationOtp from "../UserRegistration/UserRegistrationOtp";
import UserBasicInformation from "../UserRegistration/UserBasicInformation";
import { makeStyles } from "@material-ui/core/styles";
import { Stepper, StepLabel, Step, Container } from "@material-ui/core";
import { multiStepContext } from "../UserRegistration/StepContext";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  headingStyle: {
    color: "red",
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "red",
        },
        "&$active": {
          color: "red",
        },
      },
      active: {},
      completed: {},
    },
  },
});

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  const classes = useStyles();

  function showStep(step) {
    switch (step) {
      case 1:
        return <UserRegistrationOtp />;

      case 2:
        return <UserBasicInformation />;
    }
  }
  return (
    <div className="">
      <div className="stepp">
        <h1 style={{ color: "#FE3131", alignContent: "flex-start" }}>
            User Registration
        </h1>
        <MuiThemeProvider theme={theme}>
          <Stepper
            className={classes.root}
            style={{ minWidth: "40%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
            display="flex"
            flex-direction="column"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </MuiThemeProvider>
      </div>

      {showStep(currentStep)}
    </div>
  );
}

export default App;
