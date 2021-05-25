import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import cover from "../Images/AllTestsCoverPhoto.jpg";
import AllTestsTable from "./AllTestsTable";
import TestPackages from "./TestPackages";

const useStyles = makeStyles({
  conatainer: {
    width: '80%',
  },
  image: {
    width: '100%',
    height:'100%'
  },
});

export default function TestLists() {
  const classes = useStyles();
  return (
    <>
      <div style={{ marginTop: 10, marginBottom: 30 }}>
        <center>
          <Grid conatiner className={classes.conatainer}>
            <Grid item lg={12} xs={12}>
              <img
                src={cover}
                style={{ borderRadius: 5 }}
                alt="image not available"
                className={classes.image}
              />
            </Grid>
          </Grid>
        </center>
        <center>
          <Grid conatiner style={{ width: "70%" }}>
            <Grid
              item
              lg={12}
              xs={12}
              md={12}
              sm={12}
            >
              <AllTestsTable />
            </Grid>
          </Grid>
        </center>
        <div>
          <TestPackages />
        </div>
      </div>
    </>
  );
}
