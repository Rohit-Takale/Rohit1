import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, TextField, Typography } from "@material-ui/core";
import google from "../App/google-play-badge.png";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import payment from "../Images/payment.png";
import Features from "../Images/Features.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-formControl": {
      color: "#FFFFFF",
      position: "absolute",
    },
    "& .MuiOutlinedInput-root": {
      position: "relative",
      borderRadius: 10,
      border:"1px solid #FFFFFF"
    },

    "& .MuiInputBase-root": {
      height: "2.5rem",
    },
    "& .MuiInputLabel-formControl": {
      fontSize: 14,
      color: "#EEEEEE",
      position: "top",
      marginLeft:20
    },
    width:"80%",
    paddingTop: 40,
    justify: "center",
    backgroundColor: "#474747",
    alignItems:'center'
  },
  featuresImg: {
    minWidth: "50%",
    maxWidth:"80%",                               
    height: "100%",

  },
  textStyle: {
    margin: theme.spacing(1),
    fontSize: 14,
    color: "#FFFFFF",
    textDecoration: "none",
  },
  headingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FE3131",
    marginLeft: 5,
  },
  icon: {
    color: "#FFFFFF",
    paddingTop: "20px",
    margin: theme.spacing(1),
  },
  playbutton: {
  width:200,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <div style={{ backgroundColor: "#474747" }}>
        <center>
          <Grid container className={classes.root}>
            <Grid item xs={12} lg={6}>
              <div style={{}}>
                <img
                  src={Features}
                  alt="not present"
                  className={classes.featuresImg}
                />
              </div>
            </Grid>

            <Grid item xs={12} lg={6}>
              <div
                style={{
                  display: "flex",

                  borderRadius: 10,
                }}
              >
                <div style={{ flex: 1, paddingLeft: 5 }}>
                  <Button
                    style={{
                      backgroundColor: "#474747",
                      border: "1px solid #474747",
                    }}
                  >
                    <img
                      src={google}
                      className={classes.playbutton}
                      alt="my image"
                      style={{ backgroundColor: "#474747" }}
                    />
                  </Button>
                </div>
                <div style={{ flex: 1, paddingTop: 30, marginRight: 30 }}>
                  <Typography style={{ color: "#FFFFFF" }}>
                    Download App Now
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container className={classes.root}>
            <Grid item xs={12} lg={3} sm={6} md={6}>
              <div>
                <Typography
                  className={classes.headingText}
                  style={{ marginTop: 20 }}
                >
                  Contact Us
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    About Us
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    Contact Us
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    Press Coverage
                  </Link>
                </Typography>
              </div>
              <div>
                <FaTwitter className={classes.icon} />
                <FaFacebookF className={classes.icon} />
                <FaGlobeAfrica className={classes.icon} />
                <FaInstagram className={classes.icon} />
              </div>
              <div style={{ paddingTop: 10 }}>
                <Typography className={classes.textStyle}>
                  © Blood Cell,2021
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} lg={3} sm={6} md={6} justify="center">
              <div>
                <Typography className={classes.headingText}>
                  Customer Service
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    Contact Us
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    Ordering & Payment
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    Shipping
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    Returns
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    FAQ
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} lg={3} sm={6} md={6}>
              <div>
                <Typography className={classes.headingText}>
                  Information
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    About Blood Cell
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    Work With Us
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    Privacy Policy
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    Terms & Conditions
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#" className={classes.textStyle}>
                    How We Work
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} lg={3} sm={6} md={6}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, paddingRight: 10, paddingTop: 10 }}>
                  <TextField
                    style={{ width: 200 }}
                    variant="outlined"
                    name=""
                    label="Email Address"
                  />
                </div>
                <div style={{ flex: 1, paddingTop: 15 }}>
                  <button
                
                    style={{
                      backgroundColor: "#EEEEEE",
                      color: "#474747",
                      width: 100,
                      fontSize: 14,
                      height:35,
                      borderRadius: 5,
                      border:'1px solid #474747'
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div style={{ paddingTop: "50px" }}>
                <button
                  style={{
                    backgroundColor: "#474747",
                    border: "none",
                    size: "50px",
                  }}
                >
                  <img
                    src={payment}
                    alt="my image"
                    style={{ width: "300px", backgroundColor: "#474747" }}
                  />
                </button>
              </div>
            </Grid>
          </Grid>
        </center>
      </div>
    </>
  );
}
