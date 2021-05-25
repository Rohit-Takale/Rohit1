import {
  Button,
  Container,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  TextField,
  Card,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { AccountCircle } from "@material-ui/icons";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MoreIcon from "@material-ui/icons/MoreVert";
import VendorFilterForm from "./Vendor/VendorFilterForm";
import Controls from "./Components/controls/Controls";
import * as employeeService from "./Services/employeeService";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  right: {
    marginLeft: "auto",
  },
  root: {
    flexGrow: 1,
    width: "100%",
  },
  sectionMobile: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  rowLayout: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // To be vertically aligned
  },
  card: {
    margin: theme.spacing(1),
  },
}));
const cardStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(2),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const initialValues = {
  sampleId: "",
};

export default function Responsive() {
  const classes = useStyles();
  const crd = cardStyles();
  const {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
  } = React.useState(initialValues);

  const bull = <span className={classes.bullet}>•</span>;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleSubmit = () => {
    window.alert("sort submitted");
    handleMobileMenuClose();
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
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
      <form onSubmit={handleSubmit}>
        <MenuItem>
          <Controls.Select3
            name="sampleId"
            label="Select State"
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
        </MenuItem>
        <MenuItem>
          <Controls.Select3
            name="sampleId"
            label="Select City"
            onChange={handleInputChange}
            options={employeeService.getCityCollection()}
          />
        </MenuItem>
        <MenuItem>
          <Controls.Select3
            name="sampleId"
            label="Select category"
            onChange={handleInputChange}
            options={employeeService.getTestCatagoryCollection()}
          />
        </MenuItem>{" "}
        <MenuItem>
          <Controls.SortInput
            name="paidamount"
            label="Pin Code"
            onChange={handleInputChange}
          />
        </MenuItem>
        <MenuItem onClick={handleSubmit}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            color="inherit"
          >
            <SortIcon />
          </IconButton>
          <p>Sort Now</p>
        </MenuItem>
      </form>
    </Menu>
  );

  return (
    <>
      <div>
        <Container>
          <Grid container spacing={1}>
            <Grid item lg={12} xs={12} sm={12}>
              <center>
                <div style={{ margin: 20 }}>
                  <Typography
                    style={{
                      fontSize: 32,
                      color: "#Fe3131",
                      fontWeight: "bold",
                    }}
                  >
                    Vendors
                  </Typography>
                </div>{" "}
              </center>
            </Grid>

            <Grid item lg={12} xs={12}>
              <div style={{ display: "flex" }}>
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
                <div
                  style={{ marginTop: 15, marginLeft: 20 }}
                  className={classes.sectionMobile}
                >
                  <Typography
                    style={{
                      color: "#474747",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    Filter Vendors
                  </Typography>
                </div>
              </div>
            </Grid>
            <Hidden mdDown>
              <Grid item lg={3}>
                <div className={classes.sectionDesktop}>
                  <VendorFilterForm />
                </div>
              </Grid>
            </Hidden>

            <Grid item lg={9}>
              <Grid container direction="row" alignItems="center" spacing={1}>
                <div>
                  <Card className={crd.root}>
                    <CardContent>
                      <Typography
                        className={crd.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography>
                      <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </>
  );
}
