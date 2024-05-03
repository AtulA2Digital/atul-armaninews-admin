import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NestedList from "./nestedlist";
import { Avatar } from "@mui/material";
import Logo from "../../Images/black-logo.webp";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function LayoutTemplate({ children }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box className="d-flex" style={{ minHeight: "100vh" }}>
      <AppBar
        position="absolute"
        open={open}
        sx={{ background: "#000" }}
        className="header-wrapper"
      >
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h3"
            variant="h3"
            noWrap
            sx={{
              flexGrow: 1,
              fontWeight: "700",
              fontFamily: "auto",
              fontSize: "2rem",
            }}
            className="text-white project-title"
          >
            Armaani Exch247
          </Typography>
          <div className="pe-3">
            <Typography className="text-white font-600" variant="h5">
              Atul Pandey
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "14px",
              }}
              className="text-white"
              variant="h6"
            >
              Admin
            </Typography>
          </div>
          <Avatar
            src="/broken-image.jpg"
            sx={{ bgcolor: "rgb(182, 255, 0)", color: "#000" }}
          />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="drawer-wrapper">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: [2],
            pr: [0],
          }}
        >
          <img src={Logo} className="logo-img" />
          {/* <h2 style={{ fontWeight: 600, color: "#B6FF00" }}>Armani</h2> */}
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon style={{ color: "#617b22" }} fontSize="medium" />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {/* {mainListItems} */}
          {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
          <NestedList />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          // height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" className="py-0 px-3">
          {children}
        </Container>
      </Box>
    </Box>
  );
}
