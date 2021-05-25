{/*
  import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import VendorFilterForm from "./VendorFilterForm";
import logo1 from "../Images/lakeView.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import firebase from "../contexts/firebase";
import { useHistory } from "react-router-dom";
import Controls from "../Components/controls/Controls";


const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 260,
    //minWidth: 260,
    //maxHeight: 200,
    //maxHeight: 200,
    margin: theme.spacing(2),
    backgroundColor: "#FBF9F9",
    justify: "center",
    height: "100%",
    width: "100%",
    padding: 10,
    flexGrow: 1,
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

  media: {
    marginTop: 20,
    width: 120,
    height: 30,
    marginLeft: 60,
    objectFit: "fill",
  },
  text: {
    fontSize: 14,
    color: "#474747",
  },

  root1: { maxWidth: 260, minWidth: 260, maxHeight: 100 },

  headingStyles: {
    fontSize: 32,
    color: "#FE3131",
    fontWeight: "bold",
    paddingBottom: 10,
    marginLeft: 400,
    justify: "center",
  },
}));

export default function AllVendorPage() {
  const classes = useStyles();
   const [vendorList, setVendorList] = useState([]);
  const [vendorImgUrl, setVendorImgUrl] = useState([]);
  
  
  //mobile menu declaration
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
       <MenuItem>
         <TextField lable="choose category" />
       </MenuItem>
       <MenuItem>
         <TextField lable="Choose Location" />
       </MenuItem>
       <MenuItem>
         <TextField lable="Choose State" />
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
//mobile menu declaration ends
  
  
    useEffect(() => {
      getVendors();
    }, []);
  
   const getVendorImage = async (vendorId) => {
     var storage = await firebase.storage();
     var storageRef = storage.ref("VendorsDocs");
     var imgRef1 = storageRef.child("" + vendorId + "/documents/1");
     // Get the download URL

     imgRef1
       .getDownloadURL()
       .then((response) => response)
       .then(function (url) {
         console.log(url);
         // return url;
         setVendorImgUrl([url]);
         //document.getElementById("img1").src = url;
         // var link1 = document.getElementById("img1");
         // link1.href = url;
       })
       .catch(function (error) {
         switch (error.code) {
           case "storage/object-not-found":
             window.alert("File not exists Error!");
             break;

           case "storage/unauthorized":
             window.alert("Permission not exists Error!");
             break;

           case "storage/canceled":
             window.alert("Error from user side!");
             break;

           case "storage/unknown":
             window.alert("unknown Error!");
             break;
         }
       });
   };

   const getVendors = async () => {
     const snapshot = await firebase
       .firestore()
       .collection("RegisteredVendors")
       .get();

     snapshot.docs.forEach((item) => {
       getVendorImage(item.id);
       setVendorList((i) => [...i, item.data()]);
     });
   };

  // const printUrl = async () => {
//   const a = await getVendorImage(id);
//   return a;
// };
   const VendorList = (props) => {
     const classes = useStyles();
     const history = useHistory();
     const allvendors = props.vendors;
     // getVendorImage(allvendors.vendor_id)

     // const url = (async () => {
     //       await getVendorImage(allvendors.vendor_id);
     //       })();
     // const url = getVendorImage(allvendors.vendor_id).then(function(result){ return result })
     // console.log(url)
     //   let url = printUrl(allvendors.vendor_id).then(v => {
     //     console.log(v);  // prints 60 after 4 seconds.
     //     return v;
     //   });

     //   url.then(function(result) {
     //     console.log(result) // "Some User token"
     //  })

     const listItems = (
       <div style={{ flex: 1, margin: 20 }}>
         <Card className={classes.root}>
           <CardMedia
             className={classes.media}
             image={vendorImgUrl}
             title="banner"
             style={{ height: 100, width: 100, objectFit: "cover" }}
           />

           <CardContent>
             <Typography className={classes.text}>
               {allvendors.centername}
               <br />
               <text>Type of Tests : {allvendors.dignostic_depart}</text>
             </Typography>
           </CardContent>
           <div>
             <CardActions>
               <Controls.ButtonHome
                 varinat="outlined"
                 component={Link}
                 to="/TestLists"
               >
                 Visit
               </Controls.ButtonHome>
               <IconButton
                 aria-label="add to favorites"
                 style={{ marginLeft: "auto" }}
               >
                 <FavoriteIcon />
               </IconButton>
             </CardActions>
           </div>
         </Card>
       </div>
     );
     return <div>{listItems}</div>;
   };

  
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
                <Grid container>
                  {vendorList &&
                    vendorList.map((blog) => {
                      return <VendorList vendors={blog} />;
                    })}
                </Grid>
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

*/}