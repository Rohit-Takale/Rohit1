import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebar";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Acount from "../Images/account.png";
import { Box } from "@material-ui/core";
import DashHeader from "./DashHeader";

function Navbar() {
  const [selectedIndex, setselectedIndex] = useState(false);
  const styles = useStyles();

  const handleListItemClick = (event, index) => {
    setselectedIndex(index);
  };

  return (
    <>
      <Box display={{ xs: "block", md: "block", sm: "block", lg: "none" }}>
        <DashHeader />
      </Box>
      <Box display={{ xs: "none", md: "none", sm: "none", lg: "block" }}>
        <IconContext.Provider value={{ color: "#fe3131" }}>
          <div className={styles.container}>
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
          </div>
        </IconContext.Provider>
      </Box>
    </>
  );
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 100,
    backgroundColor: "#F8F5F5",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  profile: {
    padding: 10,
  },
  media: {
    height: 50,
    width: 50,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));
