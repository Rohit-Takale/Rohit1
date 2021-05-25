import React from "react";

import "./Phlebo.css";
import { makeStyles, fade } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  InputBase,
} from "@material-ui/core";
import * as FaIcons from "react-icons/fa";
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Acount from "../Images/account.png";
import SearchIcon from "@material-ui/icons/Search";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    width: "60%",
    backgroundColor: "#f8f5f5",
    marginLeft: 300,
    padding: 10,
    borderRadius: 10,
  },
  // outerDiv: {
  //   backgroundColor: theme.palette.grey[200],
  //   boxShadow: 1,
  //   padding: theme.spacing(4),
  //   "&:hover": {
  //     cursor: "pointer",
  //     backgroundColor: "#fff",
  //     boxShadow: 3,
  //   },
  // },
  // search: {
  //   padding: "2px 4px",
  //   display: "flex",
  //   alignItems: "center",
  //   width: 400,
  // },
  // searchIn: {
  //   marginLeft: theme.spacing(1),
  //   flex: 1,
  // },
  // card1: {
  //   width: 300,
  //   height: 100,
  //   margin: 10,
  //   marginTop: 25,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   padding: 10,
  // },
  card2: {
    width: 130,
    height: 120,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#ffe8e8",
    padding: 10,
  },
  card2mid: {
    padding: 10,
    width: 300,
    height: 120,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  card3: {
    width: "100%",
    height: "100%",
    margin: 15,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  btn: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: "8px",
    color: "white",
    backgroundColor: "#fe3131",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    backgroundColor: "#ffffff",
    border: "1px solid",
    lineHeight: "0.5 rem",
    borderColor: "#9d9999",
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
    width: 10,
    color: "#9d9999",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    fontSize: 12,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 150,
    lineHeight: "0.2 rem",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
  // selectRoot: {
  //   height: "40px",
  //   display: "table",
  //   // display: "flex",
  //   // justifyContent: "center",
  //   // alignItems: "center",
  // },
  // select: {
  //   fontSize: 12,
  //   paddingTop: 0,
  //   paddingBottom: 0,
  //   display: "table-cell",
  //   verticalAlign: "middle",
  // },
}));

function PhleboPage() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    location: "",
    type: "",
    name: "None",
    nameT: "None",
  });

  const handleLocationChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      location: event.target.value,
    });
  };

  const handleTypeChange = (event) => {
    const name = event.target.name;

    setState({
      ...state,
      type: event.target.value,
    });

    // setState({
    //   ...state,
    //   [name]: event.target.value,
    // });
  };

  return (
    <Grid>
      <div className="dashboard">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <div className="dashboardMin" style={{ margin: 10 }}>
              <Typography
                style={{
                  color: "#fe3131",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  fontSize: 20,
                  margin: 10,
                  marginLeft: 40,
                }}
              >
                Phlebotomist Mangement
              </Typography>
              <div style={{ marginLeft: 280, alignSelf: "center" }}>
                <button
                  variant="contained"
                  className="btn2"
                  style={{
                    backgroundColor: "#fe3131",
                    padding: 8,
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: 12,
                    borderWidth: 0,
                    borderRadius: 5,
                    color: "#ffffff",
                  }}
                >
                  ADD PHLEBOTOMIST
                </button>
              </div>
            </div>

            <Grid container justify="center" spacing={2}>
              <Card className={classes.card2}>
                <CardActionArea>
                  <MdIcons.MdMotorcycle
                    color="#fe3131"
                    style={{
                      marginTop: 10,
                      marginLeft: 45,
                      height: 40,
                      width: 40,
                    }}
                  />
                  <CardContent>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#474747",
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      19347
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        fontSize: 10,
                        textAlign: "center",
                      }}
                    >
                      Number of Deliveries
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card className={classes.card2mid}>
                <CardActionArea>
                  <div className="dashboardMin">
                    <MdIcons.MdMotorcycle
                      color="#fe3131"
                      style={{
                        marginTop: 30,
                        marginLeft: 20,
                        height: 40,
                        width: 40,
                      }}
                    />
                    <CardContent style={{ marginLeft: 10, width: 100 }}>
                      <div className="dashboardMin">
                        <Typography
                          style={{
                            fontWeight: "bold",
                            color: "#474747",
                            fontSize: 16,
                            textAlign: "left",
                          }}
                        >
                          Phlebotomist Waiting For Approval
                        </Typography>
                        <div
                          className="dashboardMin"
                          style={{ marginLeft: 35, alignItems: "center" }}
                        >
                          <FaIcons.FaRegEdit
                            color="#fe3131"
                            style={{ height: 30, width: 30 }}
                          />
                          <Typography
                            style={{
                              marginLeft: 10,
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#fe3131",
                            }}
                          >
                            Manage Vendors
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>

              <Card className={classes.card2}>
                <CardActionArea>
                  <MdIcons.MdMotorcycle
                    color="#fe3131"
                    style={{
                      marginTop: 10,
                      marginLeft: 45,
                      height: 40,
                      width: 40,
                    }}
                  />
                  <CardContent>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#474747",
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      19347
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      Phlebotomist Added this month
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className="dashboard">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Typography
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  alignSelf: "center",
                  fontSize: 24,
                  fontFamily: "Roboto",
                }}
              >
                Phlebotomist
              </Typography>
              <Grid item style={{ alignSelf: "center" }}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search Phlebotomist"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Grid>
              <Grid item style={{ alignSelf: "center" }}>
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
              </Grid>

              <Grid item style={{ alignSelf: "center" }}>
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
                    htmlFor="outlined-type-native-simple"
                  >
                    Type
                  </InputLabel>
                  <Select
                    classes={{
                      root: classes.selectRoot,
                      select: classes.select,
                    }}
                    native
                    value={state.type}
                    onChange={handleTypeChange}
                    label="Type"
                    inputProps={{
                      name: "Type",
                      id: "outlined-type-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"Radiology"}>Radiology</option>
                    <option value={"Pathology"}>Pathology</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.outerDiv}>
            <Grid container justify="center" spacing={2}>
              <Card className={classes.card3}>
                <CardActionArea>
                  <div className="dashboardMin">
                    <img src={Acount} style={{ height: 60, width: 60 }} />
                    <div style={{ marginLeft: 15, width: 300 }}>
                      <Typography
                        style={{
                          color: "#fe3131",
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        Kiran A. Karkinayak
                      </Typography>
                      <Typography style={{ fontSize: 12, color: "#9d9999" }}>
                        Type of tests :{"  "} Blood Test, Urin Test, Sugar Test
                        <Typography
                          style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#474747",
                            marginTop: 15,
                          }}
                        >
                          Address :
                        </Typography>
                        <Typography style={{ fontSize: 12, color: "#9d9999" }}>
                          CTC No.5653/17-20, Shastri Nagar,(Near Goaves, Mahatma
                          Phule Rd, Shastri Nagar, Shahapur, Belgaum, Karnataka
                          590003
                        </Typography>
                      </Typography>
                    </div>
                    <div style={{ marginLeft: 10, width: 250 }}>
                      <Typography
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "#474747",
                        }}
                      >
                        DOB: 22-04-1984
                      </Typography>
                      <Typography style={{ fontSize: 12, color: "#9d9999" }}>
                        +91 9876567876
                      </Typography>
                      <Typography style={{ fontSize: 12, color: "#9d9999" }}>
                        karkinayak@gmail.com
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "#474747",
                          marginTop: 10,
                        }}
                      >
                        Documents
                      </Typography>
                      <div className="dashboardMin" style={{ margin: 5 }}>
                        <Io5Icons.IoDocumentTextOutline
                          color="#fe3131"
                          style={{ height: 30, width: 30, margin: 5 }}
                        />
                        <Io5Icons.IoDocumentTextOutline
                          color="#fe3131"
                          style={{ height: 30, width: 30, margin: 5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div style={{ margin: 10, marginLeft: 0 }}>
                        <button
                          className="btn2"
                          style={{
                            backgroundColor: "#ffffff",
                            alignItems: "center",
                            padding: 8,
                            color: "#474747",
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: "#474747",
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        >
                          VIEW
                        </button>
                      </div>
                      <div style={{ margin: 10, marginLeft: 0 }}>
                        <button
                          className="btn2"
                          style={{
                            backgroundColor: "#fe3131",
                            alignItems: "center",
                            padding: 8,

                            color: "#ffffff",
                            borderRadius: 5,
                            borderWidth: 0,
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        >
                          APPROVE
                        </button>
                      </div>
                      <div style={{ margin: 10, marginLeft: 0 }}>
                        <button
                          className="btn2"
                          style={{
                            backgroundColor: "#474747",
                            alignItems: "center",
                            padding: 8,
                            color: "#ffffff",
                            borderRadius: 5,
                            borderWidth: 0,
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        >
                          REJECT
                        </button>
                      </div>
                    </div>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Card className={classes.card3}>
                <CardActionArea>
                  <div className="dashboardMin">
                    <img src={Acount} style={{ height: 60, width: 60 }} />
                    <div style={{ marginLeft: 15, width: 300 }}>
                      <Typography
                        style={{
                          color: "#fe3131",
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        Kiran A. Karkinayak
                      </Typography>
                      <Typography style={{ fontSize: 12, color: "#9d9999" }}>
                        Type of tests :{"  "} Blood Test, Urin Test, Sugar Test
                        <Typography
                          style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#474747",
                            marginTop: 15,
                          }}
                        >
                          Address :
                        </Typography>
                        <Typography style={{ fontSize: 12, color: "#9d9999" }}>
                          CTC No.5653/17-20, Shastri Nagar,(Near Goaves, Mahatma
                          Phule Rd, Shastri Nagar, Shahapur, Belgaum, Karnataka
                          590003
                        </Typography>
                      </Typography>
                    </div>
                    <div style={{ marginLeft: 10, width: 250 }}>
                      <Typography
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "#474747",
                        }}
                      >
                        DOB: 22-04-1984
                      </Typography>
                      <Typography style={{ fontSize: 12, color: "#9d9999" }}>
                        +91 9876567876
                      </Typography>
                      <Typography style={{ fontSize: 12, color: "#9d9999" }}>
                        karkinayak@gmail.com
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "#474747",
                          marginTop: 10,
                        }}
                      >
                        Documents
                      </Typography>
                      <div className="dashboardMin" style={{ margin: 5 }}>
                        <Io5Icons.IoDocumentTextOutline
                          color="#fe3131"
                          style={{ height: 30, width: 30, margin: 5 }}
                        />
                        <Io5Icons.IoDocumentTextOutline
                          color="#fe3131"
                          style={{ height: 30, width: 30, margin: 5 }}
                        />
                      </div>
                    </div>
                    <div style={{ margin: 10 }}>
                      <button
                        className="btn2"
                        style={{
                          backgroundColor: "#4ddaf8",
                          alignItems: "center",
                          padding: 8,
                          alignItems: "center",
                          color: "#ffffff",
                          borderRadius: 5,
                          borderWidth: 0,
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        ACTIVE
                      </button>
                    </div>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

export default PhleboPage;
