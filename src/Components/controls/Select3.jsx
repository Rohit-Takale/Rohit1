import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiSelect-selectMenu": {
      minHeight: "0.1em",
    },
    "& .MuiInputBase-input": {
      height: 1,
      fontSize: 14,
      backgroundColor: "#FFFFFF",
    },
    "& .MuiInputLabel-formControl": {
      color: "#9D9999",
      lineHeight: 0,
        paddingLeft: "0px",
        fontSize: 12,

    },
  },
}));

const selectFieldStyles = makeStyles({
  textfield: {
    marginTop: "12px",
    marginBottom: "12px",
    width: 150,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
    padding: "0px 0px",
    margin: "0.3rem 0.5rem",
  },
});

export default function Select3(props) {
  const classes = useStyles();
  const txt = selectFieldStyles();
  const { name, label, value, onChange, options, error = null } = props;
  return (
    <FormControl
      className={clsx(classes.root, txt.textfield)}
      variant="outlined"
      {...(error && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        style={{ minHeight: 0.3 }}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
