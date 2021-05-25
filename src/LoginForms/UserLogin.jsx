import {
  Box,
  Container,
  Typography,
  makeStyles,
  TextField,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import styled from "styled-components";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
    },
    "& .MuiInputBase-input": {
      height: 3,
      fontSize: 14,
      backgroundColor: "#FFFFFF",
    },

    "& .MuiInputLabel-formControl": {
      color: "#9D9999",
      lineHeight: 0,
      paddingLeft: "0px",
      fontSize: 14,
    },
  },
  spacingDesktop: {
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(1),
    },
  },
  container: {
    marginTop: 20,
  },
  textField: {
    minWidth: 150,
    maxWidth: 320,
    backgroundColor: "#EEEEEE",
  },
  textField2: {
    minWidth: 90,
    maxWidth: 160,
    backgroundColor: "#EEEEEE",
  },
  spacing: {
    margin: theme.spacing(1),
  },
  box: {
    backgroundColor: "#EEEEEE",
  },
  hover: {
    "&:hover": {
      color: "#FE3131",
    },
  },
}));

const Button = styled.button`
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  width: 100px;
  height: 25px;
  cursor: pointer;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
`;
const initialValues = {
  name: "",
  pass: "",
  password: "",
};

export default function UserLogin() {
  const classes = useStyles();
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <center>
        <Typography
          style={{ color: "#FE3131", fontSize: 24, fontWeight: "bold" }}
        >
          Login Form
        </Typography>
      </center>
      <Container maxWidth="sm" className={classes.container}>
        <Box boxShadow={3} py={3} className={classes.box} borderRadius={10}>
          <center>
            <fieldset style={{ minWidth: "70%", maxWidth: "70%" }}>
              <legend>User Login</legend>
              <div style={{ width: "100%" }}>
                <div className={classes.spacing}>
                  <TextField
                    className={clsx(classes.textField, classes.root)}
                    label="User name"
                    name="name"
                    id="outlined-size-small"
                    variant="outlined"
                    onChange={handleChange("name")}
                    value={values.name}
                    fullWidth
                  />
                </div>{" "}
                <div className={classes.spacing} style={{ marginTop: 20 }}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={clsx(classes.root, classes.textField)}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      style={{ backgroundColor: "#FFFFFF" }}
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
                <div style={{ marginTop: 20 }} className={classes.spacing}>
                  <Button style={{ backgroundColor: "#FE3131", width: "50%" }}>
                    Login Now
                  </Button>
                </div>
              </div>
            </fieldset>
            <Typography>
              New here?{" "}
              <text style={{ cursor: "pointer" }} className={classes.hover}>
                SignUp Now
              </text>
            </Typography>
          </center>
        </Box>
      </Container>
        </div>
  );
}
