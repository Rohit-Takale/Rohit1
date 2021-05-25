import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiRadio: {
      root: {
        "& .MuiSvgIcon-root": {
          height: 15,
          weight: 20,
        },

        padding: 3,
      },
    },
  },
});

const GreenRadio = withStyles({
  root: {
    "&$checked": {
      color: red[600],
    },
  },
  checked: {},
})((props) => <Radio color="default"{...props} />);

export default function RadioGroup2(props) {

    
  const { name, label, value, onChange, items } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <MuiRadioGroup name={name} value={value} onChange={onChange}>
          {items.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<GreenRadio />}
              label={item.title}
            />
          ))}
        </MuiRadioGroup>
      </FormControl>
    </MuiThemeProvider>
  );
}
