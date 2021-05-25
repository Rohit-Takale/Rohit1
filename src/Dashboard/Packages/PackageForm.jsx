import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

export function PackageForm(initialValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
  };
}

export function Form(props) {
  const { children, ...other } = props;
  return (
    <form autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
