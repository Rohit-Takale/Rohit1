
import "./Dashboard.css";
import { makeStyles } from "@material-ui/core/styles";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as FiIncons from "react-icons/fi";
import { Grid,Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    width: "65%",
    backgroundColor: "#f8f5f5",
    padding: 10,
    borderRadius: 20,
    minWidth:340
  },
  card1: {
    width: 300,
    height: 100,
    margin: 10,
    marginTop: 25,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
  card2: {
    width: 130,
    height: 120,
    margin:theme.spacing(1),
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
    width: 130,
    height: 120,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 25,
    margin:10
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function V_DashboardPage() {
  const classes = useStyles();

  return (
    <center>
      <div className="dashboard">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Card className={classes.card1}>
                <CardActionArea>
                  <div className="dashboardMin">
                    <center>
                      <IoIcons.IoMdNotifications
                        color="#fe3131"
                        style={{
                          height: 40,
                          width: 40,
                          paddingTop: 30,
                        }}
                      />
                    </center>
                    <CardContent style={{ marginLeft: 10, marginTop: 10 }}>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          color: "#474747",
                          fontSize: 20,
                        }}
                      >
                        1934567
                      </Typography>
                      <Typography style={{ color: "#9D9999", fontSize: 10 }}>
                        Total Orders
                      </Typography>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>

              <Card
                className={classes.card1}
                style={{ backgroundColor: "#4ddaf8" }}
              >
                <CardActionArea>
                  <div className="dashboardMin">
                    <center>
                      <IoIcons.IoMdNotifications
                        color="#ffffff"
                        style={{
                          paddingTop: 30,
                          height: 40,
                          width: 40,
                        }}
                      />
                    </center>
                    <CardContent
                      style={{ marginLeft: 10, color: "#fff", marginTop: 10 }}
                    >
                      <div className="dashboardMin">
                        <div>
                          <Typography
                            style={{
                              fontWeight: "bold",
                              fontSize: 20,
                            }}
                          >
                            1934567
                          </Typography>
                          <Typography style={{ fontSize: 10 }}>
                            Total Orders
                          </Typography>
                        </div>

                        <div
                          className="dashboardMin"
                          style={{ marginLeft: 30, alignItems: "center" }}
                        >
                          <FaIcons.FaRegEdit
                            color="#ffffff"
                            style={{ height: 25, width: 25 }}
                          />
                          <Typography style={{ marginLeft: 10, fontSize: 10 }}>
                            Manage Orders
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid container justify="center" spacing={2}>
              <Card className={classes.card2}>
                <CardActionArea>
                  <center>
                    <FaIcons.FaAmbulance
                      color="#fe3131"
                      style={{
                        marginTop: 10,

                        height: 40,
                        width: 40,
                      }}
                    />
                  </center>
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
                      Total Vendors
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card className={classes.card2mid}>
                <CardActionArea>
                  <div className="dashboardMin">
                    <FaIcons.FaAmbulance
                      color="#fe3131"
                      style={{
                        marginTop: 30,
                        height: 40,
                        width: 40,
                      }}
                    />
                    <CardContent style={{ marginLeft: 10, width: 130 }}>
                      <div className="dashboardMin">
                        <Typography
                          style={{
                            fontWeight: "bold",
                            color: "#474747",
                            fontSize: 16,
                            textAlign: "left",
                          }}
                        >
                          Tests Waiting For Approval
                        </Typography>
                        <div
                          className="dashboardMin"
                          style={{ marginLeft: 20, alignItems: "center" }}
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
                            Manage Orders
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>

              <Card className={classes.card2}>
                <CardActionArea>
                  <center>
                    <FaIcons.FaAmbulance
                      color="#fe3131"
                      style={{
                        height: 40,
                        width: 40,
                      }}
                    />
                  </center>
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
                      Vendors Added this month
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid container justify="center" spacing={2}>
              <Card className={classes.card3}>
                <CardActionArea>
                  <FiIncons.FiClock
                    color="#fe3131"
                    style={{
                      marginTop: 10,
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
                      134
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      Orders Under Approval
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card className={classes.card3}>
                <CardActionArea>
                  <center>
                  <MdIcons.MdMotorcycle
                    color="#fe3131"
                    style={{
                      marginTop: 10,
                      height: 40,
                      width: 40,
                    }}
                  /></center>
                  <CardContent>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#474747",
                        fontSize: 16,

                        textAlign: "center",
                      }}
                    >
                      47
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      Orders Under Delivery
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card className={classes.card3}>
                <CardActionArea>
                  <center>
                    <IoIcons.IoMdCheckboxOutline
                      color="#fe3131"
                      style={{
                        marginTop: 10,
                        height: 40,
                        width: 40,
                      }}
                    />
                  </center>
                  <CardContent>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#474747",
                        fontSize: 16,

                        textAlign: "center",
                      }}
                    >
                      30
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      Orders Completed Today
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card className={classes.card3}>
                <CardActionArea>
                  <center>
                    <IoIcons.IoMdClose
                      color="#fe3131"
                      style={{
                        marginTop: 10,
                        height: 45,
                        width: 45,
                      }}
                    />
                  </center>
                  <CardContent>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#474747",
                        fontSize: 16,

                        textAlign: "center",
                      }}
                    >
                      10
                    </Typography>
                    <Typography
                      style={{
                        color: "#9D9999",
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      Cancelled Orders
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </center>

    /* {[0, 1].map((value) => (
            <Grid key={value} item>
              <div
                className="dashboardMin"
                style={{
                  backgroundColor: "#ffffff",
                  width: 320,
                  height: 120,
                  borderRadius: 10,
                }}
              >
                <IoIcons.IoMdNotifications
                  color="#fe3131"
                  style={{
                    marginTop: 30,
                    marginLeft: 30,
                    height: 50,
                    width: 50,
                  }}
                />
                <div style={{ marginLeft: 30 }}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      color: "#474747",
                      fontSize: 24,
                    }}
                  >
                    1934567
                  </Typography>
                  <Typography style={{}}>Total Orders</Typography>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#4ddaf8",
                  width: 320,
                  height: 120,
                  marginLeft: 50,
                  borderRadius: 10,
                }}
              ></div>

              {/* <Paper className={classes.paper} /> */
    //</Grid>
    //))}

    /* 
          <div className="dashboard">
      <div className="dashboardMin">
          <div
          className="dashboardMin"
          style={{
            backgroundColor: "#ffffff",
            width: 320,
            height: 120,
            borderRadius: 10,
          }}
        >
          <IoIcons.IoMdNotifications
            color="#fe3131"
            style={{ marginTop: 30, marginLeft: 30, height: 50, width: 50 }}
          />
          <div style={{ marginLeft: 30 }}>
            <Typography
              style={{ fontWeight: "bold", color: "#474747", fontSize: 24 }}
            >
              1934567
            </Typography>
            <Typography style={{}}>Total Orders</Typography>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#4ddaf8",
            width: 320,
            height: 120,
            marginLeft: 50,
            borderRadius: 10,
          }}
        ></div> 
      </div>
    </div>*/
  );
}

export default V_DashboardPage;
