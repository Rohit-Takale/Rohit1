import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { ImCross } from "react-icons/im";
import CoverPhoto from "../Images/blood_BImage.svg";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${CoverPhoto})`,
    backgroundSize: "450px",
    backgroundPosition: "0rem 0rem",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#EEEEEE",
    maxWidth: "40%",
    minWidth: "30%",
    paddingTop: "50px",
    paddingBottom: "50px",
    borderRadius: "10px",
    paddingLeft: "100px",
    paddingRight: "100px",
  },

  form: {
    justify: "center",
  },
  textField: {
    minWidth: "350px",
    height: "50px",
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  logo: {
    paddingLeft: 10,
    width: 150,
    height: 150,
  },
});

export default function RegistrationHealthCheckUp() {
  const classes = useStyles();
  return (
    <>
      <center>
        <div
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <Grid container className={classes.container} justify="center">
            <Grid item lg={12}>
              <div style={{ paddingTop: 30 }}>
                <button
                  style={{
                    border: "none",
                    float: "right",
                    color: "#FE3131",
                  }}
                >
                  <ImCross size={25} />
                </button>
              </div>
            </Grid>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <div style={{ paddingTop: "50px" }}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", color: "#474747" }}
                >
                  REGISTRATION FOR HEALTH CHECKUP
                </Typography>
              </div>
              <div>
                <TextField
                  variant="outlined"
                  label="Name"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  label="Your Email"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  label="Password"
                  className={classes.textField}
                />
              </div>
              <div
                style={{
                  align: "center",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                <Button
                  variant="filled"
                  style={{
                    backgroundColor: "#FE3131",
                    color: "#FFF",
                    width: "320px",
                    height: "50px",
                  }}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </center>
    </>
  );
}
