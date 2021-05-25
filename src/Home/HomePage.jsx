import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import "../App/App.css";
import CardCatagory from "./CardCatagory";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CallIcon from "@material-ui/icons/Call";
import clsx from "clsx";
import TopTestsScans from "./TopTestsScans";
import HowItWorks from "./HowItWorks";
import Featured from "./Featured";
import TopDignostics from "./TopDignostics";
import RecomendedCenter from "./RecomendedCenter";
import OffersOnGO from "./OfffersOnGo";
import CoverPage from "./CoverPage";
import { Link } from "react-router-dom";

const uploadStyles = makeStyles((theme) => ({
  root: {
    "& .MuiButton-label": {
      display: "inherit",
      alignItems: "inherit",
    },
  },

  button: {
    margin: theme.spacing(1),
    width: 300,
    height: 70,
    backgroundColor: "",
    color: "#9D9999",
    textAlign: "start",
    borderRadius: 5,
    fontSize: 14,
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  grid: {
    paddingTop: 50,
    paddingBottom:50,
    width:"80%",
    backgroundColor: "#EEEEEE",
  },
}));

export default function HomePage() {
  const upload = uploadStyles();
  const classes = useStyles();
  return (
    <>
      <CoverPage />
      <CardCatagory />
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <center>
          <Grid container justify="center" className={classes.grid}>
            <Grid item xs={12} md={12} lg={6} sm={12} justify="center">
              
              <Button
                style={{
                  backgroundColor: "#4DDAF8",
                  color: "#FFFFFF",
                }}
                variant="contained"
                className={clsx(upload.button, upload.root)}
                endIcon={<CallIcon style={{ fontSize: 32 }} />}
              >
                Call For Book
              </Button>
            </Grid>
            <Grid item xs={12} md={12} lg={6} sm={12} justify="center">
              <Button
                component={Link}
                to="/PatientDetails"
                style={{ fontWeight: "bold", fontSize: 14 }}
                variant="outlined"
                color="default"
                className={clsx(upload.button, upload.root)}
                endIcon={<CloudUploadIcon style={{ fontSize: 38 }} />}
              >
                Upload Prescription
              </Button>
            </Grid>
          </Grid>
        </center>
      </div>
      <HowItWorks />
      <Featured />
      <TopTestsScans />
      <TopDignostics />
      <RecomendedCenter />
      <OffersOnGO />
    </>
  );
}
