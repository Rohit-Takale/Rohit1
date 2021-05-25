import "../App/App.css";
import "../index.css";
import React, { useContext } from "react";
import Fisrt from "../pages/Fisrt";
import Second from "../pages/Second";
import { makeStyles } from "@material-ui/core/styles";
import Third from "../pages/Third";
import { Stepper, StepLabel, Step, Container } from "@material-ui/core";
import { multiStepContext } from "../UserRegistration/StepContext";
import User_otp from "../pages/User_otp";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#EEEEEE",
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
        return <User_otp />;

      case 2:
        return <Fisrt />;

      case 3:
        return <Second />;

      default:
        return <Third />;
    }
  }
  return (
    <div className="">
      <div className="stepp">
        <h1 style={{ color: "#FE3131", alignContent: "flex-start" }}>
          Vendor Registration
        </h1>
        <MuiThemeProvider theme={theme}>
          <Stepper
            className={classes.root}
            style={{ width: "50%" }}
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

/* finalData.length > 0 ? <Displaydata /> : "";
 */
