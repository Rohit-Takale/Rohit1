import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Userphoto from "../Images/account.png";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIncons from "react-icons/fi";
import ScrollTable from "./ScrollTable";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    backgroundColor: "#FFFF",
    borderRadius: "20px",
    width: "60%",
    marginLeft: "300px",
    marginRight: "300px",

    flexGrow: 1,
    backgroundColor: "#F8F5F5",
  },

  image: {
    width: "100px",
    height: "95px",
  },
  card1: {
    width: 200,
    height: 170,
    marginTop: 25,
    borderRadius: 10,
    alignItems: "center",
  },
  cardspace1: {
    paddingLeft: "20px",
  },
  cardspace2: {
    paddingLeft: theme.spacing(3),
  },
}));

const buttonStyles = makeStyles((theme) => ({
  btnstyle: {
    color: "#ffff",
    width: "150px",
    margin: theme.spacing(2),
  },
}));

export default function UserDashboard() {
  const classes = useStyles();
  const btn = buttonStyles();
  return (
    <>
      <Grid
        container
        style={{
          marginTop: "30px",
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingBottom: "40px",
        }}
        className={classes.gridContainer}
        spacing={3}
      >
        <Grid item xs={12} lg={12} sm={12} md={12}>
          <Typography
            style={{ color: "red", fontSize: 30, fontWeight: "bold" }}
          >
            User Management
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
          md={6}
          sm={12}
          style={{
            paddingBottom: "20px",
          }}
        >
          <Card className={classes.card1}>
            <CardActionArea>
              <FiIncons.FiClock
                color="#fe3131"
                style={{
                  marginTop: 30,
                  marginLeft: 80,
                  marginRight: 80,
                  height: 40,
                  width: 40,
                }}
              />

              <CardContent style={{ marginTop: 1 }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#474747",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  150
                </Typography>
                <Typography
                  style={{
                    color: "#9D9999",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Orders under approval
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
          md={6}
          sm={12}
          style={{ paddingBottom: "20px" }}
        >
          <Card className={classes.card1}>
            <CardActionArea>
              <MdIcons.MdMotorcycle
                color="#fe3131"
                style={{
                  marginTop: 30,
                  marginLeft: 80,
                  marginRight: 80,
                  height: 40,
                  width: 40,
                }}
              />

              <CardContent style={{ marginTop: 1 }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#474747",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  70
                </Typography>
                <Typography
                  style={{
                    color: "#9D9999",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Orders Under Delivery
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
          md={6}
          sm={12}
          style={{ paddingBottom: "20px" }}
        >
          <Card className={classes.card1}>
            <CardActionArea>
              <IoIcons.IoMdCheckboxOutline
                color="#fe3131"
                style={{
                  marginTop: 30,
                  marginLeft: 80,
                  marginRight: 80,
                  height: 40,
                  width: 40,
                }}
              />

              <CardContent style={{ marginTop: 1 }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#474747",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  30
                </Typography>
                <Typography
                  style={{
                    color: "#9D9999",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Orders Completed Today
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
          md={6}
          sm={12}
          style={{ paddingBottom: "20px" }}
        >
          <Card className={classes.card1}>
            <CardActionArea>
              <IoIcons.IoMdClose
                color="#fe3131"
                style={{
                  marginTop: 30,
                  marginLeft: 80,
                  marginRight: 80,
                  height: 40,
                  width: 40,
                }}
              />

              <CardContent style={{ marginTop: 1 }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#474747",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  10
                </Typography>
                <Typography
                  style={{
                    color: "#9D9999",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Canceled Orders
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid
        container
        style={{ marginTop: "30px", paddingLeft: "20px" }}
        className={classes.gridContainer}
      >
        <Grid
          item
          lg={6}
          xs={12}
          style={{ paddingTop: "30px", paddingBottom: "20px" }}
        >
          <Typography
            variant="h6"
            style={{ color: "grey", fontWeight: "bold", paddingLeft: "50px" }}
          >
            User
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          style={{
            paddingTop: "30px",
            paddingBottom: "20px",
            paddingRight: "50px",
          }}
        >
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#4DDAF8",
              color: "#ffff",
              width: "150px",
              float: "right",
            }}
          >
            Send Mail
          </Button>
        </Grid>
        <Grid item lg={3} style={{ paddingLeft: "50px" }}>
          <img src={Userphoto} className={classes.image} alt="" />
        </Grid>
        <Grid item lg={9} spacing={3}>
          <Button
            variant="outlined"
            style={{ backgroundColor: "#4DDAF8" }}
            className={btn.btnstyle}
          >
            Edit Profile
          </Button>
          <Button
            variant="outlined"
            style={{ backgroundColor: "#474747" }}
            className={btn.btnstyle}
          >
            BLOCK/UNBLOCK
          </Button>
          <Button
            variant="outlined"
            style={{ backgroundColor: "#FE3131" }}
            className={btn.btnstyle}
          >
            DELETE
          </Button>
          <Typography style={{ marginLeft: "20px", color: "grey" }}>
            User ID: 654321
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <div style={{ paddingTop: "30px" }}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, paddingRight: 0 }}>
                <Typography style={{ marginLeft: "20px" }}>
                  DOB: 21-11-1996
                </Typography>
                <Typography style={{ paddingLeft: "20px", color: "grey" }}>
                  +91 1234567890
                </Typography>
                <Typography style={{ paddingLeft: "20px", color: "grey" }}>
                  info@lakeviewhospital.com
                </Typography>
                <div style={{ paddingTop: "10px" }}>
                  <Typography style={{ paddingLeft: "20px" }}>
                    State:Karnataka
                  </Typography>
                  <Typography style={{ paddingLeft: "20px" }}>
                    City:Belgaum
                  </Typography>
                  <Typography style={{ paddingLeft: "20px" }}>
                    Pin code: 590001
                  </Typography>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <Typography style={{ paddingLeft: "20px" }}>
                  Age:<text style={{ color: "red" }}>36</text>
                </Typography>
                <Typography style={{ paddingLeft: "20px" }} g>
                  Gender:<text style={{ color: "red" }}>Male</text>
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "30px",
                }}
              >
                Address:
                <text style={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </text>
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  paddingLeft: "20px",
                  paddingTop: "30px",
                  color: "grey",
                }}
              >
                Landmark :
                <text style={{ color: "black" }}>Above IDBI BANK</text>
              </Typography>
            </div>
            <div style={{ marginTop: 50, paddingBottom: 100 }}>
              <ScrollTable />
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          md={12}
          sm={12}
          justify="center"
          className={classes.cardspace2}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{ flex: 1, paddingRight: 0 }}
              className={classes.cardspace}
            >
              <Card className={classes.card1}>
                <CardActionArea>
                  <FiIncons.FiClock
                    color="#fe3131"
                    style={{
                      marginTop: 30,
                      marginLeft: 80,
                      marginRight: 80,
                      height: 40,
                      width: 40,
                    }}
                  />

                  <CardContent style={{ marginTop: 1 }}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#474747",
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      150
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      Orders Under Process
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div
              className={classes.cardspace}
              style={{ flex: 1, paddingRight: 0 }}
            >
              <Card className={classes.card1}>
                <CardActionArea>
                  <MdIcons.MdMotorcycle
                    color="#fe3131"
                    style={{
                      marginTop: 30,
                      marginLeft: 80,
                      marginRight: 80,
                      height: 40,
                      width: 40,
                    }}
                  />

                  <CardContent style={{ marginTop: 1 }}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#474747",
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      70
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      Orders Under Delivery
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
          <div style={{ display: "flex" }} className={classes.cardspace}>
            <div style={{ flex: 1, paddingRight: 0 }}>
              <Card className={classes.card1}>
                <CardActionArea>
                  <IoIcons.IoMdCheckboxOutline
                    color="#fe3131"
                    style={{
                      marginTop: 30,
                      marginLeft: 80,
                      marginRight: 80,
                      height: 40,
                      width: 40,
                    }}
                  />
                  <CardContent style={{ marginTop: 1 }}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#474747",
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      50
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      Orders Completed
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div
              style={{ flex: 1, paddingRight: 0 }}
              className={classes.cardspace}
            >
              <Card className={classes.card1}>
                <CardActionArea>
                  <IoIcons.IoMdClose
                    color="#fe3131"
                    style={{
                      marginTop: 30,
                      marginLeft: 80,
                      marginRight: 80,
                      height: 40,
                      width: 40,
                    }}
                  />
                  <CardContent style={{ marginTop: 1 }}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#474747",
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      1934567
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      Orders Canceled
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
          <div style={{ paddingRight: "70px", justify: "center" }}>
            <Card
              className={classes.card1}
              style={{ backgroundColor: "#9D9999", float: "right" }}
            >
              <CardActionArea>
                <IoIcons.IoMdNotifications
                  color="#FFFF"
                  style={{
                    marginTop: 30,
                    marginLeft: 80,
                    marginRight: 80,
                    height: 40,
                    width: 40,
                  }}
                />
                <CardContent style={{ marginTop: 1 }}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      color: "#FFFF",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    7
                  </Typography>
                  <Typography
                    style={{
                      color: "#FFFF",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Under approval
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
