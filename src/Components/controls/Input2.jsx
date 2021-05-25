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
      fontSize: 15,
      backgroundColor: "#FBF9F9",
    },

    "& .MuiInputLabel-formControl": {
      color: "#9D9999",
      lineHeight: 0,
      paddingLeft: "0px",
    },
  },
  textfield: {
    marginTop: "12px",
    marginBottom: "12px",
    minWidth: 250,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
    padding: "0px 0px",
    
  },
}));


export default function Input2(props) {
  const classes = useStyles();
  const { name, label, value, onChange, error=null } = props;
  return (
    <div>
      <TextField
        className={clsx(classes.textfield,classes.root)}
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
