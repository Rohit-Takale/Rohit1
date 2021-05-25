import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import TestCalculationTable from "./TestCalculationTable";
import clsx from "clsx";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import SelectPatient from "./SelectPatient";
import SelectAdress from "./SelectAdress";
import AddPatient from "./AddPatient";
import AddAdress from "./AddAdress";

const GreenCheckbox = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
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
    "& .MuiOutlinedInput-root": {
    borderRadius: 10,
    },
  },
  container : {
    backgroundColor: "#EEEEEE",
    width: "40%",
    minWidth:340,
    borderRadius: 10,
    paddingTop: 50,
    paddingBottom: 50,
  },
  textField : {
    width: 200,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    outlineWidth: 0,
  },
  space: {
    margin:theme.spacing(1)
  }
}));

export default function TestDelivery() {
  const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(
      new Date("2014-08-18T21:11:54")
    );

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  return (
    <>
      <center>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          <Grid container className={classes.container}>
            <Grid item lg={12} xs={12} md={12} sm={12}>
              <TestCalculationTable />
            </Grid>
            <center>
              <div>
                <div>
                  <Grid item lg={12} xs={12} md={12} sm={12}>
                    <div className={classes.space}>
                      <Typography
                        style={{
                          color: "#474747",
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        Patient Details
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item lg={6} xs={12} md={12} sm={12}>
                    <div className={classes.space}>
                      <SelectPatient />{" "}
                    </div>
                  </Grid>
                  <Grid item lg={6} xs={12} md={12} sm={12}>
                    <div className={classes.space}>
                      <Typography style={{ color: "#474747" }}>Or</Typography>
                      <AddPatient />
                    </div>

                    <hr />
                  </Grid>
                  <Grid item lg={12} xs={12} md={12} sm={12}>
                    <div className={classes.space}>
                      <Typography
                        style={{
                          color: "#474747",
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        Patient Address
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item lg={6} xs={12} md={12} sm={12}>
                    <div className={classes.space}>
                      <SelectAdress />
                    </div>
                    <div className={classes.space}>
                      <Typography style={{ color: "#474747" }}>Or</Typography>
                      <AddAdress />
                    </div>
                  </Grid>
                  <hr />
                  <Grid item lg={12} xs={12} style={{width:'80%'}}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#474747",
                      }}
                    >
                      Preferred Service Schedule
                    </Typography>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around">
                        <div style={{ display: "flex" }}>
                          <div style={{ flex: 1 }} className={classes.space}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              label="Select Date"
                              format="dd/mm/yyyy"
                              value={selectedDate}
                              onChange={handleDateChange}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </div>
                          <div
                            style={{ flex: 1, marginLeft: 10 }}
                            className={classes.space}
                          >
                            <KeyboardTimePicker
                              margin="normal"
                              id="time-picker"
                              label="Select Time"
                              value={selectedDate}
                              onChange={handleDateChange}
                              KeyboardButtonProps={{
                                "aria-label": "change time",
                              }}
                            />
                          </div>
                        </div>
                      </Grid>
                    </MuiPickersUtilsProvider>
                  </Grid>
                </div>
              </div>
            </center>
            <center>
              <div style={{marginLeft:50}}>
                <Typography>Confirm The Following</Typography>
              </div>
            </center>
            <Grid lg={12} xs={12}>
              <div style={{}}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <div>
                    <FormGroup colomn>
                      <FormControlLabel
                        style={{
                          fontWeight: "bold",
                          color: "#474747",
                        }}
                        control={<GreenCheckbox />}
                        label="Confirm collection address"
                      />
                      <FormControlLabel
                        style={{
                          fontWeight: "bold",
                          color: "#474747",
                        }}
                        control={<GreenCheckbox style={{ size: "medium" }} />}
                        label="Confirm date and time "
                      />
                      <FormControlLabel
                        style={{
                          fontWeight: "bold",
                          color: "#474747",
                        }}
                        control={<GreenCheckbox />}
                        label="Confirm blood investigation list"
                      />

                      <div style={{ display: "flex", paddingTop: 10 }}>
                        <div>
                          <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<FaRupeeSign size={10} />}
                            style={{
                              backgroundColor: "#4DDAF8",
                              borderColor: "#4DDAF8",
                              minWidth: 120,
                              fontSize: 10,
                            }}
                          >
                            <text style={{ color: "white" }}>
                              {" "}
                              Cash On Collection
                            </text>
                          </Button>
                        </div>
                        <div style={{ marginLeft: 10 }}>
                          <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<FaRegCreditCard size={10} />}
                            style={{
                              backgroundColor: "#FE3131",
                              borderColor: "#FE3131",
                              minWidth: 160,
                              fontSize: 10,
                            }}
                          >
                            <text style={{ color: "white" }}>
                              Easy Payments
                            </text>
                          </Button>
                        </div>
                      </div>
                    </FormGroup>
                  </div>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </center>
    </>
  );
}
