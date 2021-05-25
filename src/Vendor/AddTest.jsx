import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import account from "../Images/account.png";
import styled from "styled-components";


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

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: 50,
    paddingBottom: 50,
    width: '80%',
  },
  btn: {
    fontSize: "0.7rem",
    fontWeight: "bold",
    height: 30,
    width: 150,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color:"#474747"
  },
  cardstyle: {
    backgroundColor: "#FBF9F9",
    width: "100%"
  },
  image: {
    width: 60,
    height: 60,
  },
  bullet: {
    display: "inline-block",
    margin: "0 10px",
    transform: "scale(2)",
  },
  heading: {
    fontWeight: "bold",
    color: "#474747",
    fontSize: 24,
    padding: 10,
  },
  text: {
    color: "#474747",
    fontSize: 14,
    padding: 10,
  },
}));

export default function AddTest() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const history = useHistory();

  return (
    <>
      {" "}
      <div>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Grid container className={classes.grid}>
            <Grid item lg={6} xs={12} md={6} sm={6}>
              <Typography className={classes.heading}>
                Some test Name
              </Typography>
              <div style={{ float: "right", marginRight: 20 }}>
                <Button
                  type="button"
                  onClick={() => history.push("/TestDelivery")}
    
                  style={{
                    backgroundColor: "#FE3131",
                    border: "1px solid #FE3131",
                    color: "#FFFFFF",
                    borderRadius: 5,
                    fontSize: 8,
                    height: 25,
                    width: 100,
                  }}
                >
                  Add Test
                </Button>
              </div>
              <Typography
                style={{
                  color: "#4DDAF8",
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                RS 600
              </Typography>
              <Typography className={classes.text}>KLE Hospital</Typography>
              <div style={{ display: "flex" }}>
                <div style={{ flex: "1", float: "left" }}>
                  <Typography className={classes.text}>Overview</Typography>
                </div>
                <div style={{ flex: "1" }}>
                  <Typography className={classes.text}>
                    Patient Instruction
                  </Typography>
                </div>
              </div>
              <Typography
                style={{ fontWeight: "bold" }}
                className={classes.text}
              >
                Test Description
              </Typography>

              <Typography className={classes.text}>
                Test DescriptionLorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce ut commodo libero. Sed commodo, nisi ac
                scelerisque ornare, quam lectus mattis neque, nec malesuada erat
                enim sed lacus. Proin maximus commodo massa, sit amet tristique
                metus molestie ac. Quisque sed leo mauris. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Fusce ut commodo libero. Sed
                commodo, nisi ac scelerisque ornare, quam lectus mattis neque,
                nec malesuada erat enim sed lacus. Proin maximus commodo massa,
                sit amet tristique metus molestie ac. Quisque sed leo mauris.
              </Typography>
              <div style={{ paddingTop: 10 }}>
                <Typography
                  className={classes.text}
                  style={{ fontWeight: "bold" }}
                >
                  Test Include:
                </Typography>
                <Typography className={classes.text}>
                  {bull}
                  Hemoglobin
                </Typography>
                <Typography className={classes.text}>
                  {bull}
                  Glucose Fasting Blood
                </Typography>
              </div>
              <div style={{ paddingTop: 30 }}>
                <Card className={classes.cardstyle}>
                  <CardContent>
                    <div>
                      <Typography
                        style={{ fontWeight: "bold" }}
                        className={classes.text}
                      >
                        Patient Instructions
                      </Typography>
                    </div>
                    <div>
                      <Typography className={classes.text}>
                        Test DescriptionLorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Fusce ut commodo libero. Sed commodo,
                        nisi ac scelerisque ornare, quam lectus mattis neque,
                        nec malesuada erat enim sed lacus. Proin maximus commodo
                        massa, sit amet tristique metus molestie ac. Quisque sed
                        leo mauris.<br></br>
                        <br></br> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Fusce ut commodo libero. Sed commodo,
                        nisi ac scelerisque ornare, quam lectus mattis neque,
                        nec malesuada erat enim sed lacus. Proin maximus commodo
                        massa, sit amet tristique metus molestie ac. Quisque sed
                        leo mauris.
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div style={{ paddingTop: "40px" }}>
                <Button
                  variant="contained "
                  component={Link}
                  to="/TestDelivery"
                  style={{
                    backgroundColor: "#FE3131",
                    border: "1px solid #FE3131",
                    color: "#FFFFFF",
                    borderRadius: 5,
                    fontSize: 8,
                    height: 25,
                    width: 100,
                  }}
                >
                  Add Test
                </Button>
              </div>
            </Grid>
            <Grid item lg={6} xs={12} md={6} sm={6}>
              <div style={{ marginLeft: 10 }}>
                <Typography
                  style={{
                    color: "#474747",
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingTop: 80,
                  }}
                >
                  KLE SCANNING CENTER (SHOP NAME)
                </Typography>
                <div style={{ paddingTop: 20 }}>
                  <Card className={classes.cardstyle}>
                    <CardContent>
                      <div>
                        <Typography
                          style={{ fontWeight: "bold" }}
                          className={classes.text}
                        >
                          About
                        </Typography>
                      </div>
                      <div>
                        <Typography className={classes.text}>
                          Test DescriptionLorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Fusce ut commodo libero.
                          Sed commodo, nisi ac scelerisque ornare, quam lectus
                          mattis neque, nec malesuada erat enim sed lacus. Proin
                          maximus commodo massa, sit amet tristique metus
                          molestie ac. Quisque sed leo mauris. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit.
                          <br />
                          <br /> Fusce ut commodo libero. Sed commodo, nisi ac
                          scelerisque ornare, quam lectus mattis neque, nec
                          malesuada erat enim sed lacus. Proin maximus commodo
                          massa, sit amet tristique metus molestie ac. Quisque
                          sed leo mauris.
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div style={{ paddingTop: 30 }}>
                  <Typography
                    className={classes.text}
                    style={{ fontWeight: "bold" }}
                  >
                    Reviews
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <img
                      src={account}
                      alt="not present"
                      className={classes.image}
                    />
                    <div>
                      <Typography
                        style={{ marginLeft: 20 }}
                        className={classes.title}
                      >
                        User Name
                      </Typography>
                      <Typography
                        style={{
                          color: "#474747",
                          fontSize: 14,
                          marginLeft: 20,
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        ut commodo libero. d
                      </Typography>
                    </div>
                  </div>
                  <div style={{ display: "flex", paddingTop: "30px" }}>
                    <img
                      src={account}
                      alt="not present"
                      className={classes.image}
                    />
                    <div>
                      <Typography
                        style={{ marginLeft: 20 }}
                        className={classes.title}
                      >
                        User Name
                      </Typography>
                      <Typography
                        style={{
                          color: "#474747",
                          fontSize: 14,
                          marginLeft: 20,
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        ut commodo libero. d
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
