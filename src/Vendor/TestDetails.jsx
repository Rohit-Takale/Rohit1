import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CoverPhoto from "../Images/FreeHealthCheckUp.jpg";
import scans from "../Images/scans.jpg";
import styled from "styled-components";


const useStyles = makeStyles({
  image: {
    width: "100%",
  },
  grid: {
    backgroundImage: `url(${CoverPhoto})`,
    backgroundSize: "1700px",
    width: "80%",
    height: "300px",
    marginLeft: "200px",
    marginRight: "200px",
  },
  griditem: {
    paddingTop: "20px",
    paddingLeft: "100px",
  },
  griditem2: {
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "30px",
    paddingRight: "30px",
    width: "80%",
  },
  grid2: {
    width: "80%",
    marginLeft: "200px",
    marginRight: "200px",
    backgroundColor: "#EEEEEE",
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

const Button = styled.button`
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



export default function TestDetails() {
  const classes = useStyles();
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Grid Container style={{ paddingTop: "30px" }} className={classes.grid}>
          <Grid
            item
            className={classes.griditem}
            xs={12}
            lg={12}
            sm={12}
            md={12}
          >
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", color: "#FE3131" }}
            >
              Free Sugar Test
            </Typography>
            <Typography
              variant="h5"
              style={{
                paddingTop: "20px",
                color: "#474747",
                fontWeight: "bold",
              }}
            >
              Get free sugar today
            </Typography>
            <Typography
              variant="h6"
              style={{
                paddingTop: "30px",
                color: "#474747",
                fontWeight: "bold",
              }}
            >
              Offering Vendor Name
            </Typography>
            <div style={{ paddingTop: "20px" }}>
              <Button
              
                style={{
                  backgroundColor: "#4DDAF8",
                  border: "2px solid #4DDAF8",
                  color: "white",
                  fontWeight: "normal",
                  borderRadius: "10px",
                }}
              >
                Know More
              </Button>
              <span style={{ paddingLeft: "15px" }}>
                <Button
              
                  style={{
                    backgroundColor: "red",
                    border: "2px solid red",
                    color: "white",
                    fontWeight: "normal",
                    borderRadius: "10px",
                  }}

                >
                  Register
                </Button>
              </span>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.grid2}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            className={classes.griditem2}
          >
            <Typography
              style={{ color: "#FE3131", fontWeight: "bold", fontSize: "25px" }}
            >
              NAME OF FREE HEALTH CHECKUP CAMP
            </Typography>
            <Typography
              variant="h6"
              style={{
                color: "#474747",
                fontWeight: "bold",
                paddingTop: "30px",
              }}
            >
              Description:
            </Typography>
            <Typography style={{ color: "#474747" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco poriti
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in uienply voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              norin proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            className={classes.griditem2}
          >
            <Card style={{ minWidth: "350px" }}>
              <CardContent>
                <div style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                  <Typography className={classes.title} gutterBottom>
                    On 14th Feb, At 9AM Onwards
                  </Typography>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <Typography>ADDRESS:</Typography>
                  </div>
                  <div style={{ flex: 1, float: "left" }}>
                    <Typography className={classes.pos} color="textSecondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      tempor incididunt ut ero labore et dolore magna aliqua.
                    </Typography>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <Typography>CONTACT:</Typography>
                  </div>
                  <div style={{ flex: 1, float: "left" }}>
                    <Typography className={classes.pos} color="textSecondary">
                      +91 9876543210 / +91 9123456789 / +91 9517538520
                    </Typography>
                  </div>
                </div>
              </CardContent>

              <CardActions>
                <div style={{ paddingLeft: "340px" }}>
                  <Button
                    variant="contained "
  
                    style={{
                      backgroundColor: "#FE3131",
                      border: "2px solid #FE3131",
                      color: "white",
                      fontWeight: "normal",
                      borderRadius: "10px",
                    }}
                  >
                    Register
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            marginLeft: "200px",
            marginRight: "200px",
            marginTop: "30px",
            width: "80%",
            spacing: 3,
          }}
        >
          <Grid
            item
            lg={6}
            style={{ paddingLeft: "20px", paddingRight: "20x" }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", color: "#FE3131" }}
            >
              PATIENT INSTRUCTIONS
            </Typography>
            <div style={{ paddingTop: "50px", paddingBottom: "20px" }}>
              <Typography
                variant="h7"
                style={{
                  color: "#474747",
                  fontWeight: "bold",
                }}
              >
                Sub Title
              </Typography>
            </div>
            <div>
              <Typography
                variant="h7"
                style={{
                  color: "#474747",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                poriti laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in uienply voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat norin proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Typography>
            </div>
            <div style={{paddingTop:"50px"}}>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", color: "#FE3131" }}
              >
        WHO SHOULD GET IT
              </Typography>
            </div>
            <div style={{ paddingTop: "50px", paddingBottom: "20px" }}>
              <Typography
                variant="h7"
                style={{
                  color: "#474747",
                  fontWeight: "bold",
                }}
              >
                Sub Title
              </Typography>
            </div>
            <div>
              <Typography
                variant="h7"
                style={{
                  color: "#474747",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                poriti laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in uienply voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat norin proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            lg={6}
            style={{ paddingLeft: "20px", paddingRight: "20x" }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", color: "#FE3131" }}
            >
              WHAT ALL IT INCLUDE
            </Typography>
            <div style={{ paddingTop: "45px", paddingBottom: "20px" }}>
              <Typography
                variant="h7"
                style={{
                  color: "#474747",
                  fontWeight: "bold",
                }}
              >
                Sub Title
              </Typography>
            </div>
            <div>
              <Typography
                variant="h7"
                style={{
                  color: "#474747",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                poriti laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in uienply voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat norin proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Typography>
                      </div>
                      
                      <div style={{paddingTop:"50px",paddingRight:"50px"}}>
                        <image src={scans} alt="image unavailable" style={{width:"80%" , height:"280px",borderRadius:"10px"}}/>
                      </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
