import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  textfield: {
    marginTop: "12px",
    marginBottom: "12px",
    width: 550,
   
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
}));

export default function MultilineInput(props) {
  const classes = useStyles();
  const { name, label, value, onChange,placeholder, error = null,place } = props;

  return (
    <div>
      <TextField
        className={clsx(classes.root, classes.textfield)}
        id="outlined-multiline-static"
        multiline
        rows={4}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
      placeholder={placeholder}
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
}
