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
  makeStyles,
} from "@material-ui/core/styles";
import { useHistory } from "react-router";

const theme = createMuiTheme({
  overrides: {
    MuiRadio: {
      root: {
        "& .MuiSvgIcon-root": {
          height: 15,
          weight: 20,
        },
        "& .MuiFormLabel-root": {
          fontSize:10,
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
})((props) => <Radio style={{ fontSize: 100 }} color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root:{
"& .MuiTypography-root":{
      fontSize: 12,
      color: "#474747",
      fontWeight: "bold",
       margin:theme.spacing(1)
   
}
  }
}));

export default function RadioGroup2(props) {
  const classes = useStyles();
  const { name, label, value, onChange, items } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <FormControl className={classes.root}>
        <FormLabel>{label}</FormLabel>
        <MuiRadioGroup name={name} value={value} onChange={onChange} row>
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
