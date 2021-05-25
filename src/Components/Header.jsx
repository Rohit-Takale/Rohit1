import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";

import MoreIcon from "@material-ui/icons/MoreVert";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import applogo from "../Images/logo-03.svg";
import { Link, useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  inputRoot: {
    color: "#black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    border: "1px solid black",
    borderRadius: 5,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  imageButton: {
    width: 150,
    height: 60,
    backgroundColor: "white",
  },
  title: {
    margin: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ButtonHome = styled.button`
  background-color: #fe3131;
  color: #fff;
  font-family: "Roboto", sans-serif;
  margin: 5px 5px;
  padding: 0px 0px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  font-size: 0.7rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
  border-color: #fe3131;
`;

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}))(InputBase);

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const history = useHistory();

  const [state, setState] = React.useState({
    location: "",
    login: "",
  });

  const handleLocationChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      location: event.target.value,
    });
  };

  const handleLoginChange = (event) => {
    const name = event.target.name;
    const opt = event.target.value;
    setState({
      login: event.target.value,
    });

    if (opt === "Admin") {
      history.push("/admin_login");
    }

    if (opt === "Vendor") {
      history.push("/vendor_login");
    }
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to="/UserRegistrationMain"
      >
        Profile
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {" "}
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ShoppingCartIcon style={{ fontSize: "40px" }} />
        </IconButton>
        <p>My Cart</p>
      </MenuItem>
      <MenuItem>
        <div className={classes.title}>
          <FormControl
            style={{ width: 140 }}
            variant="outlined"
            size="small"
            className={classes.formControl}
          >
            <InputLabel
              style={{
                color: "#9d9999",
                fontSize: 12,
              }}
              htmlFor="outlined-location-native-simple"
            >
              Location
            </InputLabel>
            <Select
              classes={{
                root: classes.selectRoot,
                select: classes.select,
              }}
              native
              value={state.location}
              onChange={handleLocationChange}
              label="Location"
              inputProps={{
                name: "location",
                id: "outlined-location-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Hubli"}>Hubli</option>
              <option value={"Belgaum"}>Belgaum</option>
              <option value={"Dharwad"}>Dharwad</option>
            </Select>
          </FormControl>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={classes.title}>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.formControl}
          >
            <InputLabel
              style={{
                color: "#9d9999",
                fontSize: 12,
              }}
              htmlFor="outlined-login-native-simple"
            >
              Login Options
            </InputLabel>
            <Select
              classes={{
                root: classes.selectRoot,
                select: classes.select,
              }}
              native
              value={state.type}
              onChange={handleLoginChange}
              label="Login"
              inputProps={{
                name: "login",
                id: "outlined-login-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Admin"}>Admin Login</option>
              <option value={"Vendor"}>Vendor Login</option>
            </Select>
          </FormControl>
        </div>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        className={classes.root}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Toolbar>
          <div>
            <div style={{ marginRight: 20 }}>
              <Button
                component={Link}
                to="/HomePage"
                style={{ backgroundColor: "white", border: "none",width:'110px' }}
              >
                <img
                  className={classes.imageButton}
                  src={applogo}
                  alt="my image"
                />
              </Button>
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <div className={classes.title}>
              <FormControl
                variant="outlined"
                size="small"
                className={classes.formControl}
              >
                <InputLabel
                  style={{
                    color: "#9d9999",
                    fontSize: 12,
                  }}
                  htmlFor="outlined-location-native-simple"
                >
                  Location
                </InputLabel>
                <Select
                  classes={{
                    root: classes.selectRoot,
                    select: classes.select,
                  }}
                  native
                  value={state.location}
                  onChange={handleLocationChange}
                  label="Location"
                  inputProps={{
                    name: "location",
                    id: "outlined-location-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"Hubli"}>Hubli</option>
                  <option value={"Belgaum"}>Belgaum</option>
                  <option value={"Dharwad"}>Dharwad</option>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.sectionDesktop}>
            <ButtonHome
              type="button"
              onClick={() => history.push("/UserRegistrationMain")}
              style={{
                backgroundColor: "#4DDAF8",
                height: "30px",
                border: "1px solid black",
              }}
            >
              login
            </ButtonHome>
          </div>
          <div className={classes.sectionDesktop} style={{ marginLeft: 10 }}>
            <div className={classes.title}>
              <FormControl
                variant="outlined"
                size="small"
                className={classes.formControl}
              >
                <InputLabel
                  style={{
                    color: "#9d9999",
                    fontSize: 12,
                  }}
                  htmlFor="outlined-login-native-simple"
                >
                  Login Options
                </InputLabel>
                <Select
                  classes={{
                    root: classes.selectRoot,
                    select: classes.select,
                  }}
                  native
                  value={state.type}
                  onChange={handleLoginChange}
                  label="Login"
                  inputProps={{
                    name: "login",
                    id: "outlined-login-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"Admin"}>Admin Login</option>
                  <option value={"Vendor"}>Vendor Login</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div
            className={classes.sectionDesktop}
            style={{ paddingLeft: "20px" }}
          >
            <ShoppingCartIcon style={{ fontSize: "40px" }} />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
