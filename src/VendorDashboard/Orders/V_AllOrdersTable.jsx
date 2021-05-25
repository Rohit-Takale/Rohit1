
import React, { useEffect, useState } from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import firebase from "../../contexts/firebase";

const Button2 = styled.button`
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0px 0px;
  width: 60px;
  height: 25px;
  cursor: pointer;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-width: 0px;
  border-radius: 5px;
`;

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "100%",
    margin: 10,
    marginTop: 40,
  },
  heading: {
    fontSize: 12,
    color: "#474747",
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    color: "#474747",
  },
  td: {
    borderRight: "solid 1px #9D9999",
    borderLeft: "solid 1px #9D9999",
  },
  button: {
    color: "#FFFFFF",
    width: 40,
    fontSize: 8,
    margin: theme.spacing(1),
  },
  date: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffffff",
    border: "1px solid",
    lineHeight: "0.5 rem",
    borderColor: "#9d9999",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    maxWidth: "150px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    textAlign: "center",
    fontWeight: "bold",
    border: "1px solid #474747",
  },
  body: {
    fontSize: 12,
    textAlign: "left",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


export default function V_AllOrdersTable() {
  const classes = useStyles();
   const history = useHistory();
  const [rows, setrows] = useState([]);
  
    useEffect(() => {
      getOrders();
    }, []);
  
  
  const getOrders = async () => {
    var leadsRef = await firebase.database().ref("PlacedOrders");
    await leadsRef.on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        // setaprovedTest(childSnapshot.val());
        let list = [];
        let test = [];
        let id = "";
        let orderId = "";
        childSnapshot.forEach((snap) => {
          id = childSnapshot.key;
          list.push(snap.val());
          orderId = snap.key;
        });

        // childSnapshot.child("cartItems").forEach((snap1) => {
        //   test.push(snap1.val());
        // });

        setrowData(list, id, orderId);
      });
    });
  };

   const setrowData = async (list, id, orderId) => {
     await Object.keys(list).forEach(function (jB) {
       var arr = list[jB];
       let count = parseInt(jB) + 1;

       setrows((i) => [
         ...i,
         createData(
           arr.cartItems.map((i) => i.test_id),
           count,
           orderId,
           arr.name,
           arr.cartItems.map((i) => i.test_name),
           arr.cartItems.map((i) => i.test_sampleType),
           id,
           arr.date,
           arr.total,
           "Under Approval"
         ),
       ]);
       // console.log(arr); //will print the array belongs to each property.
     });
  };
  
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

  function createData(
    testId,
    odrno,
    orderId,
    name,
    Test,
    type,
    venId,
    Date,
    amount,
    status
  ) {
    return {
      testId,
      odrno,
      orderId,
      name,
      Test,
      type,
      venId,
      Date,
      amount,
      status,
    };
  }




  return (
    <TableContainer style={{ border: "0.5px solid  #474747", borderRadius: 5 }}>
      <Table
        className={(classes.table)}
        aria-label="simple table"
      >
        <TableHead>
          <StyledTableCell align="right">Sr. No.</StyledTableCell>
          <StyledTableCell align="right">Order No.</StyledTableCell>
          <StyledTableCell align="right">Patient name&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Test Name&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Type&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Vendor ID&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Book Date&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Amount&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Status&nbsp;</StyledTableCell>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.odrno}
              style={{cursor:"pointer"}}
              onClick={() => {
                history.push({
                  pathname: "/V_OrderDetails",
                  state: {
                    vId: row.venId,
                    tId: row.testId,
                    oId: row.orderId,
                  },
                });
              }}
            >
              <StyledTableCell component="th" scope="row">
                {row.odrno}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.orderId}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Test}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.venId}</StyledTableCell>
              <StyledTableCell align="right">{row.Date}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
