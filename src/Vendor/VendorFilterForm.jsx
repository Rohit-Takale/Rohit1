import { makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import advert1 from "../Images/bloodtest.jpg";
import clsx from "clsx";
import Controls from "../Components/controls/Controls";
import * as employeeService from "../Services/employeeService";


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
  textfield: {
    margin: 5,
    width: 250,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
  },
  image: {
    padding: 10,

    width: "80%",
    height: "200px",
  },
  heading: {
    fontSize: 14,
    color: "#474747",
    fontWeight: "bold",
  },
}));

const initialValues = {
  sampleId: "",
};
export default function VendorFilterForm() {
  const classes = useStyles();
    const {
      values,
      setValues,
      handleInputChange,
      errors,
      setErrors,
    } = React.useState(initialValues);

    return (
      <>
        <div
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 5,
            paddingRight: 5,
            border: "1px solid #EEEEEE",
          }}
        >
          <div>
            <center>
              <Typography className={classes.heading}>
                Filter by Category
              </Typography>
              <Controls.SortSelect
                name="sampleId"
                label="Select Catagory"
                onChange={handleInputChange}
                options={employeeService.getTestCatagoryCollection()}
              />
              <Typography className={classes.heading}>
                Filter by Location
              </Typography>
              <Controls.SortSelect
                name="sampleId"
                label="Select State"
                onChange={handleInputChange}
                options={employeeService.getDepartmentCollection()}
              />
              <div>
                <Controls.SortSelect
                  name="sampleId"
                  label="Select City"
                  onChange={handleInputChange}
                  options={employeeService.getCityCollection()}
                />
              </div>
              <div>
                <Controls.SortSelect
                  name="sampleId"
                  label="Select Catagory"
                  onChange={handleInputChange}
                  options={employeeService.getTestCatagoryCollection()}
                />
              </div>
              <div>
                <TextField
                  className={clsx(classes.textfield, classes.root)}
                  variant="outlined"
                  label="Enter Zip Code"
                  style={{}}
                />
              </div>
            </center>
          </div>
          <div>
            <Typography className={classes.heading}>Add Slider</Typography>
            <img src={advert1} alt="not here" className={classes.image} />
          </div>
          <div>
            <Typography className={classes.heading}>Advertisement</Typography>
            <img src={advert1} alt="not here" className={classes.image} />
          </div>
        </div>
      </>
    );
}
