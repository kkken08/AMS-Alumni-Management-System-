"use client"; // Add this at the top to specify that this is a Client Component

import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import Link from "next/link";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function About() {
  // State for Profile Menu
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const profileMenuOpen = Boolean(profileAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  // State for Notifications Menu
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const notificationMenuOpen = Boolean(notificationAnchorEl);

  const handleNotificationMenuOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    setNotificationAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "white" }}>
      {/* AppBar Section */}
      <AppBar position="static" sx={{ backgroundColor: "#2b4d91" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            UC-LM Alumni Management System
          </Typography>
          <Button color="inherit">
            <Link
              href="/home"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              href="/news"
              style={{ textDecoration: "none", color: "white" }}
            >
              News
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              href="/events"
              style={{ textDecoration: "none", color: "white" }}
            >
              Events
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              href="/about"
              style={{ textDecoration: "none", color: "#FFDE00" }}
            >
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              href="/search"
              style={{ textDecoration: "none", color: "white" }}
            >
              Search
            </Link>
          </Button>

          {/* Profile Menu */}
          <Button
            onClick={handleProfileMenuOpen}
            sx={{ ml: 2, color: "white" }}
          >
            Profile
          </Button>
          <Menu
            anchorEl={profileAnchorEl}
            open={profileMenuOpen}
            onClose={handleProfileMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>My Account</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
          </Menu>

          {/* Notifications Menu */}
          <IconButton color="inherit" onClick={handleNotificationMenuOpen}>
            <Badge badgeContent={0} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={notificationAnchorEl}
            open={notificationMenuOpen}
            onClose={handleNotificationMenuClose}
          >
            <MenuItem onClick={handleNotificationMenuClose}>
              No New Notifications
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            About the Alumni Management System
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the UCLM Alumni Management System. This platform is
            designed to help alumni stay connected with their alma mater and
            fellow graduates. It offers a variety of features aimed at
            fostering communication, organizing events, tracking the career
            progress of graduates, and supporting the university’s initiatives.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to strengthen the bond between the university and
            its alumni by providing a platform that supports ongoing engagement,
            collaboration, and mutual support. We believe in the power of
            community and aim to help our graduates thrive both professionally
            and personally.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
