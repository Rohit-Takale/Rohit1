import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import {CgGoogle} from "react-icons/cg"; 
import {FaFacebookF} from "react-icons/fa";
import FormLogo from "../Images/FormLogo.svg"


const useStyles = makeStyles({
    container: {
        backgroundColor: "#EEEEEE",
        width: "25%",
        marginLeft: "600px",
        marginRight: "600px",
        borderRadius: "10px",     
    },

    form: {
        paddingLeft: "60px",
        paddingright: "60px",
        width: "80%",
        justify:"center"
    },
    textField: {
        width: "350px",
        height: "50px",
        borderRadius: "10px",
        marginTop: "20px",
        marginBottom:"20px"
        
    },
    logo: {
        paddingLeft:10,
        width: 150,
        height:150
    },

    
});

export default function NewUserRegistration() {
    const classes = useStyles();
    return (
      <>
        <div
          style={{
            backgroundColor: "#FE3131",
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <Grid container className={classes.container} justify="center">
            <Grid item lg={6}>
              <img src={FormLogo} className={classes.logo} alt="logo absent" />
            </Grid>
            <Grid item lg={6}>
              <div style={{ paddingRight: 30, paddingTop: 30 }}>
                <button
                  style={{
                    backgroundcolor: "#FE3131",
                    border: "none",
                    float: "right",
                  }}
                >
                  <AiOutlineArrowRight size={25} />
                </button>
                <text style={{ fontSize: 20,float:"right" }}>Login</text>
              </div>
            </Grid>
            <Grid item xs={12} lg={12} md={12} sm={12} className={classes.form}>
              <div>
                <Typography>New User Registration</Typography>
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
              <div style={{ paddingLeft: "20px" }}>
                <Button
                  variant="filled"
                  style={{
                    backgroundColor: "#FE3131",
                    color: "#FFF",
                    width: "320px",
                  }}
                >
                  <AiOutlineArrowRight size={25} />
                </Button>
              </div>
              <Typography
                style={{
                  fontWeight: "bold",
                  color: "#FE3131",
                  fontSize: "15px",
                  paddingLeft: "130px",
                  paddingRight: "130px",
                  paddingTop: "30px",
                }}
              >
                Login Using
              </Typography>
              <div
                style={{
                  paddingLeft: "100px",
                  paddingRight: "100px",
                  paddingTop: "20px",
                  paddingBottom: "40px",
                }}
              >
                <button style={{ border: "none" }}>
                  <CgGoogle size={30} />
                </button>
                <span style={{ paddingLeft: "50px" }}>
                  <button style={{ border: "none" }}>
                    <FaFacebookF size={30} />
                  </button>
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </>
    );
}

