import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIncons from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(0),
    },
    "& .MuiInputBase-input": {
      height: "0.1em",
      fontSize: 15,
      backgroundColor: "#FFFFFF",
    },

    "& .MuiInputLabel-formControl": {
      color: "#9D9999",
      lineHeight: 0,
      fontSize: 10,
    },
    "& .MuiSelect-selectMenu": {
      minHeight: "0.1em",
    },
  },
  textfield: {
    margin: 5,
    width: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  container: {
    width: "60%",
    marginLeft: 300,
    backgroundColor: "#F8F5F5",
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FE3131",
  },
  card1: {
    width: 150,
    height: 120,
    borderRadius: 10,
      alignItems: "center",
    margin:theme.spacing(1)
  },
  cardHeading: {
    fontWeight: "bold",
    color: "#474747",
    fontSize: 18,
    textAlign: "center",
  },
  cardtext: {
    fontSize: 10,
    color: "#9D9999",
    textAlign: "center",
  },
  icon: {
    color: "#fe3131",
  },
}));

export default function AddCoupon() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Grid container className={classes.container}>
          <Grid item lg={4} xs={12} md={12} justify="center">
            <Typography className={classes.heading}>Add Coupons</Typography>
            <div style={{ marginTop: 10 }}>
              <Typography style={{ color: "#474747", fontSize: 12 }}>
                Coupon ID: 123456375
              </Typography>
            </div>
          </Grid>
          <Grid item lg={8}>
            <div style={{ display: "flex", marginLeft: 55 }}>
              <TextField
                className={clsx(classes.root)}
                variant="outlined"
                label="Coupon Id"
                style={{ width: 180 }}
              />
              <div style={{ paddingTop: 5, marginLeft: 15 }}>
                <Button
                  variant="outlined"
                  style={{
                    backgroundColor: "#9D9999",
                    fontSize: 10,
                    color: "#FFFFFF",
                    height: 30,
                    borderRadius: 5,
                  }}
                >
                  EDIT EXISTING
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div>
              <TextField
                className={clsx(classes.textfield, classes.root)}
                variant="outlined"
                label="Coupon Code"
                style={{}}
              />
            </div>
            <div>
              <TextField
                className={clsx(classes.textfield, classes.root)}
                variant="outlined"
                label="Coupon Type"
                select
              />
            </div>
            <div>
              <TextField
                className={clsx(classes.textfield, classes.root)}
                variant="outlined"
                label="Specific Categories"
                select
                style={{}}
              />
            </div>
            <div>
              <TextField
                className={clsx(classes.textfield, classes.root)}
                variant="outlined"
                label="Exclude Categories"
                style={{}}
              />
            </div>
            <div>
              <TextField
                className={clsx(classes.textfield, classes.root)}
                variant="outlined"
                label="Region"
                select
                style={{}}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <TextField
                  className={clsx(classes.textfield, classes.root)}
                  variant="outlined"
                  label="State"
                  select
                  style={{ width: 95 }}
                />
              </div>
              <div>
                <TextField
                  className={clsx(classes.textfield, classes.root)}
                  variant="outlined"
                  label="City"
                  select
                  style={{ width: 95 }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <TextField
                  className={clsx(classes.textfield, classes.root)}
                  variant="outlined"
                  label="choose state"
                  style={{ width: 95 }}
                />
              </div>
              <div>
                <TextField
                  className={clsx(classes.textfield, classes.root)}
                  variant="outlined"
                  label="choose state"
                  style={{ width: 95 }}
                />
              </div>
            </div>
            <div>
              <TextField
                className={clsx(classes.textfield, classes.root)}
                variant="outlined"
                label="choose state"
                style={{}}
              />
            </div>
            <div style={{ marginLeft: 5 }}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Coupon Description"
                variant="outlined"
                style={{ fontSize: 10, width: 200, backgroundColor: "#FFFFFF" }}
              />
            </div>
          </Grid>
          <Grid item lg={8} xs={12} md={12} justify="center">
            <div style={{ display: "flex" }}>
              <div>
                <Card className={classes.card1}>
                  <center>
                    <FiIncons.FiClock
                      style={{ paddingTop: 15 }}
                      className={classes.icon}
                      size={30}
                    />
                  </center>
                  <CardContent>
                    <Typography className={classes.cardHeading}>150</Typography>
                    <Typography className={classes.cardtext}>
                      Orders under approval
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className={classes.card1}>
                  <center>
                    <MdIcons.MdMotorcycle
                      style={{ paddingTop: 15 }}
                      className={classes.icon}
                      size={30}
                    />
                  </center>
                  <CardContent>
                    <Typography className={classes.cardHeading}>70</Typography>
                    <Typography className={classes.cardtext}>
                      No of Coupons used
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>{" "}
            <div style={{ display: "flex" }}>
              <div>
                <Card className={classes.card1}>
                  <center>
                    <IoIcons.IoMdCheckboxOutline
                      style={{ paddingTop: 15 }}
                      className={classes.icon}
                      size={30}
                    />
                  </center>
                  <CardContent>
                    <Typography className={classes.cardHeading}>30</Typography>
                    <Typography className={classes.cardtext}>
                      Coupons Online
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className={classes.card1}>
                  <center>
                    <IoIcons.IoMdClose
                      style={{ paddingTop: 15 }}
                      className={classes.icon}
                      size={30}
                    />
                  </center>
                  <CardContent>
                    <Typography className={classes.cardHeading}>10</Typography>
                    <Typography className={classes.cardtext}>
                      Expired Coupons
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
