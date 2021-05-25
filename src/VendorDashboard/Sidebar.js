import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BoxIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
// import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
// import * as Io5Icons from "react-icons/io5";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/V_DashboardPage",
    icon: <AiIcons.AiFillDashboard />,
    cName: "nav-text",
  },
  {
    title: "Tests",
    path: "/VendorAllTests",
    icon: <FaIcons.FaChartBar />,
    cName: "nav-text",
  },
  {
    title: "Packages",
    path: "/V_AllPackages",
    icon: <MdIcons.MdBusinessCenter />,
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/V_AllOrders",
    icon: <IoIcons.IoMdNotifications />,
    cName: "nav-text",
  },
  {
    title: "Payment",
    path: "/V_Payment",
    icon: <BoxIcons.BiCreditCard />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FaIcons.FaNotesMedical />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/V_Profile",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Log Out",
    path: "/book_test",
    icon: <FaIcons.FaLocationArrow />,
    cName: "nav-text",
  },
];
