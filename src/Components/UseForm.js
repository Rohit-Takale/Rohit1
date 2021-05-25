import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";

export function UseForm(initialFValues,validateOnChange=false,validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

    const handleInputChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
      if (validateOnChange)
        validate({[name]:value})
    };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors
  }
}


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
    },
    "& .MuiInputBase-input": {
      height: 3,
      fontSize: 15,
      backgroundColor: "#FBF9F9",
    },

    "& .MuiInputLabel-formControl": {
      color: "#9D9999",
      lineHeight: 0,
      paddingLeft: "0px",
    },
  },
}));


export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  )
}
