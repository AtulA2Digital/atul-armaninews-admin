/** @format */

import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import RoofingIcon from "@mui/icons-material/Roofing";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import InterestsIcon from "@mui/icons-material/Interests";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LogoutIcon from "@mui/icons-material/Logout";
import Swal from "sweetalert2";
import swal from "sweetalert";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const Navigate = useNavigate();
  const [open2, setOpen2] = React.useState(false);
  const [blogStatus, setBlogstatus] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleBlog = () => {
    setBlogstatus(!blogStatus);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
    >
      <Link to="/dashboard">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#617b22" }} />
          </ListItemIcon>
          <ListItemText className="sideNav-tab" primary="Dashboard" />
        </ListItemButton>
      </Link>

      {/* ************blog ************ */}
      <ListItemButton onClick={handleBlog}>
        <ListItemIcon>
          <LocalOfferIcon sx={{ color: "#617b22" }} />
        </ListItemIcon>
        <ListItemText primary="Blog" />
        {blogStatus ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={blogStatus} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/add-blog">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocalOfferIcon sx={{ color: "#617b22" }} />
              </ListItemIcon>
              <ListItemText className="sideNav-tab" primary="Add New Blog" />
            </ListItemButton>
          </Link>
          <Link to="/blog-list">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocalOfferIcon sx={{ color: "#617b22" }} />
              </ListItemIcon>
              <ListItemText className="sideNav-tab" primary="Blog List" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => {
          swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              localStorage.clear();
              Swal.fire({
                icon: "success",
                text: "You have been logged out!",
                showConfirmButton: false,
                timer: 2000,
              });
              Navigate("/login");
            } else {
              Swal.fire({
                icon: "success",
                text: "Your login details are secure!",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });
        }}
      >
        <ListItemIcon>
          <LogoutIcon sx={{ color: "#617b22" }} />
        </ListItemIcon>
        <ListItemText className="sideNav-tab" primary="Logout" />
      </ListItemButton>
    </List>
  );
}
