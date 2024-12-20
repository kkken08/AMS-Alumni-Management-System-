"use client"; // For Next.js Client Component

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  IconButton,
  Badge,
} from "@mui/material";
import Link from "next/link";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function EventsPage() {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleNotificationMenuOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const events = [
    {
      title: "A Comprehensive Alumni Management System for UCLM",
      description:
        "This event presents the development and implementation of a comprehensive alumni management system for the University of Cebu Lapu-Lapu and Mandaue (UCLM).",
      date: "August 3, 2024",
    },
    {
      title: "UCLM Launches Innovative Alumni Management System",
      description:
        "The University of Cebu Lapu-Lapu and Mandaue (UCLM) has launched an innovative alumni management system designed to enhance communication and engagement with its graduates.",
      date: "August 3, 2024",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#e6f7ff", minHeight: "100vh", paddingBottom: 4 }}>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#2b4d91" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            UC-LM Alumni Management System
          </Typography>
          <Button color="inherit">
            <Link href="/home" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/news" style={{ textDecoration: "none", color: "white" }}>
              News
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/events" style={{ textDecoration: "none", color: "#FFDE00" }}>
              Events
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/about" style={{ textDecoration: "none", color: "white" }}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/search" style={{ textDecoration: "none", color: "white" }}>
              Search
            </Link>
          </Button>

          {/* Profile Menu */}
          <Button
            onClick={handleProfileMenuOpen}
            sx={{ ml: 2, color: "white" }}
          >
            Ambotnimo
          </Button>
          <Menu
            anchorEl={profileAnchorEl}
            open={Boolean(profileAnchorEl)}
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
        </Toolbar>
      </AppBar>

      {/* Notification Dropdown */}
      <Menu
        anchorEl={notificationAnchorEl}
        open={Boolean(notificationAnchorEl)}
        onClose={handleNotificationMenuClose}
        PaperProps={{
          sx: {
            width: 300,
            borderRadius: 2,
            boxShadow: 3,
            padding: 1,
          },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="New" />
            <Tab label="Dismissed" />
          </Tabs>
        </Box>
        <Box sx={{ padding: 2 }}>
          {activeTab === 0 ? (
            <Typography variant="body2">No new notifications.</Typography>
          ) : (
            <Typography variant="body2">No dismissed notifications.</Typography>
          )}
        </Box>
      </Menu>

      {/* Header Section */}
      <Box
        sx={{
          bgcolor: "#34495e",
          color: "white",
          textAlign: "center",
          py: 4,
          mb: 4,
        }}
      >
        <Typography variant="h4">Upcoming Events</Typography>
      </Box>

      {/* Content Section */}
      <Container>
        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  bgcolor: "white",
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {event.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    <strong>Date:</strong> {event.date}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ bgcolor: "#3498db" }}
                  >
                    Participate
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
