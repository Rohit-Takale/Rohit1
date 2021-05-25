import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SampleDrawer from "./SampleDrawer";
import Logo from "../Images/logo-03.svg";

const useStyles = makeStyles((theme) => ({
  grow: {},
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    },
    image: {
        height: 70,
      width:200,
  }
}));

export default function DashHeader() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar>
          <div>
            <SampleDrawer />
          </div>
          <div style={{marginRight:10}}>
            <button
              type="button"
              style={{ backgroundColor: "#FFFFFF", border: "none"}}
            >
              <img
                className={classes.image}
                src={Logo}
                alt="logo not presesnt"
              />
            </button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
