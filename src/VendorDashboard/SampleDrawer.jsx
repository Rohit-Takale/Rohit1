import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {SidebarData} from "./Sidebar";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import "../VendorDashboard/Navbar.css";
import { IconContext } from "react-icons";
import MenuIcon from "@material-ui/icons/Menu";
import Acount from "../Images/account.png";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerPaper: {
    position: "relative",
    width: 400,
    overflowX: "hidden",
    overflowY: "hidden",
    "&:hover": {
      overflowY: "auto",
    },
    "&::-webkit-scrollbar": {
      display: "block",
    },
  },
}));

export default function SampleDrawer() {
  const classes = useStyles();
  const [selectedIndex, setselectedIndex] = useState(false);
  const handleListItemClick = (event, index) => {
    setselectedIndex(index);
  };

 

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconContext.Provider value={{ color: "#fe3131" }}>
        <div className="navbar">
          <nav className="nav-menu active">
            <ul className="nav-menu-items">
              {/* <img src={Logo} style={{ height: 50, width: 100 }} /> */}
              <div className="profiles">
                <div className="profile">
                  <img src={Acount} style={{ height: 40, width: 40 }} />
                  <div style={{ marginLeft: 15 }}>
                    <Typography
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#474747",
                      }}
                    >
                      Name
                    </Typography>
                    <Typography style={{ color: "#9D9999", fontSize: 12 }}>
                      Address Adress Adress Adress Adress
                    </Typography>
                    <div className="profile2">
                      <a
                        href=""
                        style={{
                          color: "#FE3131",
                          fontWeight: "bold",
                          fontSize: 12,
                        }}
                      >
                        Logout
                      </a>
                      <a
                        href=""
                        style={{
                          color: "#4DDAF8",
                          fontWeight: "bold",
                          fontSize: 12,
                          marginLeft: 10,
                        }}
                      >
                        Update Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {SidebarData.map((item, index) => {
                return (
                  <li
                    onSelect={index === selectedIndex}
                    onClick={(event) => handleListItemClick(event, index)}
                    key={index}
                    style={
                      selectedIndex === index
                        ? { backgroundColor: "#f8f5f5" }
                        : {}
                    }
                    className={item.cName}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            startIcon={<MenuIcon />}
            onClick={toggleDrawer(anchor, true)}
          ></Button>
          <Drawer
            className={classes.drawerPaper}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
