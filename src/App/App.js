import "../App/App.css";
import React from "react";
import HomePage from "../Home/HomePage";
import TestLists from "../Vendor/TestLists";
import Footer from "../Components/Footer";
import { Redirect, Route, Switch } from "react-router";
import TestDetails from "../Vendor/TestDetails";
import AddTest from "../Vendor/AddTest";
import TestDelivery from "../Vendor/TestDelivery";
import FreeSugarCheckUP from "../Vendor/FreeSugarCheckUP";
import FreeHealthCheckUp from "../Vendor/FreeHealthCheckUp";
import UserRegistrationMain from "../UserRegistration/UserRegistrationMain";
import PatientDetails from "../Vendor/PatientDetails";
import UserDashboard from "../Dashboard/UserDashboard";
import PhleboPage from "../Dashboard/PhleboPage";
import OrderSummary from "../Vendor/OrderSummary";
import OrderDetails from "../Dashboard/OrderDetails";
import CoverPage from "../Home/CoverPage";
import CardCatagory from "../Home/CardCatagory";
import Vendor from "../Vendor/Vendor";
import AddCoupon from "../Dashboard/Coupons/AddCoupon";
import CouponManagement from "../Dashboard/Coupons/CouponManagement";
import PhelboPayment from "../Dashboard/Payment/Phelbo/PhelboPayment";
import VendorPayment from "../Dashboard/Payment/Vendor/VendorPayment";
import CODPayment from "../Dashboard/Payment/COD/CODPayment";
import VendorRegistrationMain from "../pages/VendorRegistrationMain";
import Radiology from "../Dashboard/Tests/Radiology";
import Pathology from "../Dashboard/Tests/Pathology";
import AllTests from "../Dashboard/Tests/AllTests";
import ApprovedTestDetails from "../Dashboard/Tests/ApprovedTestDetails";
import RejectedTestDetails from "../Dashboard/Tests/RejectedTestDetails";
import AddPackage from "../Dashboard/Packages/AddPackage";
import AllPackages from "../Dashboard/Packages/AllPackages";
import ApprovedPackages from "../Dashboard/Packages/ApprovedPackages";
import RejectedPackages from "../Dashboard/Packages/RejectedPackages";
import SelectPatients from "../Patients/SelectPatients";
import VendorAddTest from "../VendorDashboard/VendorTest/VendorAddTest";
import Navbar from "../VendorDashboard/Navbar";
import ApprovedTests from "../Dashboard/Tests/ApprovedTests";
import RejectedTest from "../Dashboard/Tests/RejectedTest";
import VendorDashBoard from "../VendorDashboard/MainDashBoard/VendorDashBoard";
import VendorAllTests from "../VendorDashboard/VendorTest/VendorAllTests";
import VendorApprovedTest from "../VendorDashboard/VendorTest/VendorApprovedTest";
import DashboardPage from "../VendorDashboard/MainDashBoard/V_DashboardPage";
import Header from "../Components/Header";
import Responsive from "../Responsive";
import AllVendorPage from "../Vendor/AllVendorPage";
import VendorAddPackage from "../VendorDashboard/VendorPackage/VendorAddPackage";
import V_ApprovedPackage from "../VendorDashboard/VendorPackage/V_ApprovedPackage";
import V_RejectedPackages from "../VendorDashboard/VendorPackage/V_RejectedPackages";
import V_AllPackages from "../VendorDashboard/VendorPackage/V_AllPackages";
import VendorRejectedTests from "../VendorDashboard/VendorTest/VendorRejectedTests";
import V_AllOrders from "../VendorDashboard/Orders/V_AllOrders";
import V_CompletedOrder from "../VendorDashboard/Orders/V_CompletedOrder"; 
import V_PendingOrders from "../VendorDashboard/Orders/V_PendingOrders";
import V_RejectedOrders from "../VendorDashboard/Orders/V_RejectedOrders";
import V_OrderDetails from "../VendorDashboard/Orders/V_OrderDetails";
import V_AddToCenter from "../VendorDashboard/VendorTest/V_AddToCenter";
import V_Payment from "../VendorDashboard/VendorPayment/V_Payment";
import  SampleDrawer  from "../VendorDashboard/SampleDrawer";
import DashHeader from "../VendorDashboard/DashHeader";
import V_DashboardPage from "../VendorDashboard/MainDashBoard/V_DashboardPage";
import V_ApprovPackageDetails from "../VendorDashboard/VendorPackage/V_ApprovPackageDetails";
import V_ApprovedTestDetails from "../VendorDashboard/VendorTest/V_ApprovedTestDetails";
import V_RejectedPackagesDetails from "../VendorDashboard/VendorPackage/V_RejectedPackagesDetails";
import VendorRejectedTestsDetail from "../VendorDashboard/VendorTest/VendorRejectedTestsDetail";
import V_Profile from "../VendorDashboard/V_Profile/V_Profile";
import V_AllOrederDetails from "../VendorDashboard/Orders/V_AllOrederDetails";
import UserLogin from "../LoginForms/UserLogin";



function App() {
  return (
    <>
      {/* <Header />
      <Navbar />*/}
      <Switch>
        <Route exact path="/UserLogin" component={UserLogin}/>
        {/*  <Route exact path="/" component={HomePage} /> 
        <Route exact path="/TestLists" component={TestLists} />
        <Route exact path="/TestDetails" component={TestDetails} />
        <Route exact path="/AddTest" component={AddTest} />
        <Route exact path="/TestDelivery" component={TestDelivery} />
        <Route exact path="/FreeSugarCheckUP" component={FreeSugarCheckUP} />
        <Route exact path="/PatientDetails" component={PatientDetails} />
        <Route exact path="/UserDashboard" component={UserDashboard} />
        <Route exact path="/PhleboPage" component={PhleboPage} />
        <Route exact path="/OrderSummary" component={OrderSummary} />
        <Route exact path="/OrderDetails" component={OrderDetails} />
        <Route exact path="/FreeHealthCheckUp" component={FreeHealthCheckUp} />
        <Route exact path="/Vendor" component={Vendor} />
        <Route
          exact
          path="/UserRegistrationMain"
          component={UserRegistrationMain}
        />
        <Route
          exact
          path="/VendorRegistrationMain"
          component={VendorRegistrationMain}
        />
        <Route exact path="/VendorAddTest" component={VendorAddTest} />
        <Route exact path="/VendorAllTests" component={VendorAllTests} />
        <Route exact path="/V_AddToCenter" component={V_AddToCenter} />
        <Route
          exact
          path="/V_ApprovedTestDetails"
          component={V_ApprovedTestDetails}
        />
        <Route
          exact
          path="/V_ApprovedTestDetails"
          component={VendorRejectedTestsDetail}
        />

        <Route
          exact
          path="/VendorApprovedTest"
          component={VendorApprovedTest}
        />
        <Route
          exact
          path="/VendorRejectedTests"
          component={VendorRejectedTests}
        />
        <Route exact path="/VendorAddPackage" component={VendorAddPackage} />
        <Route exact path="/V_AllPackages" component={V_AllPackages} />
        <Route exact path="/V_ApprovedPackage" component={V_ApprovedPackage} />
        <Route
          exact
          path="/V_ApprovPackageDetails"
          component={V_ApprovPackageDetails}
        />
        <Route
          exact
          path="/V_RejectedPackages"
          component={V_RejectedPackages}
        />
        <Route
          exact
          path="/V_RejectedPackagesDetails"
          component={V_RejectedPackagesDetails}
        />

        <Route exact path="/V_AllOrders" component={V_AllOrders} />
        <Route exact path="/V_CompletedOrder" component={V_CompletedOrder} />
        <Route exact path="/V_PendingOrders" component={V_PendingOrders} />
        <Route exact path="/V_RejectedOrders" component={V_RejectedOrders} />
        <Route exact path="/V_OrderDetails" component={V_OrderDetails} />
        <Route
          exact
          path="/V_AllOrederDetails"
          component={V_AllOrederDetails}
        />
        <Route exact path="/V_DashboardPage" component={V_DashboardPage} />
        <Route exact path="/V_Payment" component={V_Payment} />

        <Route exact path="/V_Profile" component={V_Profile} /> */}
      </Switch>
      {/*  <Footer />
       */}
    </>
  );
}

export default App;
