import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
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
      fontSize: 10,
    },
    "& .MuiOutlinedInput-notchedOutline ": {
      borderRadius: 5,
    },
  },
  textfield: {
    marginTop: "12px",
    marginBottom: "12px",
    width: 148,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    padding: "0px 0px",
    margin: "0.3rem 0.5rem",
  },
}));

export default function Input3(props) {
  const classes = useStyles();
  const { name, label, value, onChange, error = null } = props;
  return (
    <div>
      <TextField
        className={clsx(classes.textfield, classes.root)}
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
}
