"use client";  // Add this at the top to specify that this is a Client Component

import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Box,
  Container,
  Grid,
  Paper,
  Menu,
  MenuItem,
  IconButton,
  Badge,
} from "@mui/material";
import Link from "next/link";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function News() {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

  // Profile Menu Handlers
  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  // Notification Menu Handlers
  const handleNotificationMenuOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    setNotificationAnchorEl(null);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
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
                style={{ textDecoration: "none", color: "#FFDE00" }}
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
                style={{ textDecoration: "none", color: "white" }}
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
            <Button onClick={handleProfileMenuOpen} sx={{ ml: 2, color: "white" }}>
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
            <Menu
              anchorEl={notificationAnchorEl}
              open={Boolean(notificationAnchorEl)}
              onClose={handleNotificationMenuClose}
            >
              <MenuItem onClick={handleNotificationMenuClose}>
                No New Notifications
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Container for the main content */}
        <Container sx={{ mt: 4 }} maxWidth="lg">
          {/* News Section */}
          <section className="mb-12">
            <Typography variant="h4" align="center" gutterBottom>
              News
            </Typography>
            {/* Grid layout for news items */}
            <Grid container spacing={4}>
              {/* News Item */}
              <Grid item xs={12} lg={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    News Title 1
                  </Typography>
                  <Typography color="textSecondary">
                    Brief description of the news item. This could be an update
                    or a recent announcement relevant to alumni.
                  </Typography>
                  <Link href="/news/news-title-1" passHref>
                    <Typography
                      component="a"
                      sx={{
                        color: "primary.main",
                        textDecoration: "underline",
                      }}
                    >
                      Read News
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
              {/* News Item */}
              <Grid item xs={12} lg={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    News Title 2
                  </Typography>
                  <Typography color="textSecondary">
                    Brief description of the news item. Provide a summary of key
                    details or links to full articles.
                  </Typography>
                  <Link href="/news/news-title-2" passHref>
                    <Typography
                      component="a"
                      sx={{
                        color: "primary.main",
                        textDecoration: "underline",
                      }}
                    >
                      Read News
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </section>

          {/* Events Section */}
          <section>
            <Typography variant="h4" align="center" gutterBottom>
              Events
            </Typography>
            {/* Grid layout for event items */}
            <Grid container spacing={4}>
              {/* Event Item */}
              <Grid item xs={12} lg={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Event Title 1
                  </Typography>
                  <Typography color="textSecondary">
                    Brief description of the event. Include details like date,
                    time, and how to participate.
                  </Typography>
                  <Link href="/events/event-title-1" passHref>
                    <Typography
                      component="a"
                      sx={{
                        color: "primary.main",
                        textDecoration: "underline",
                      }}
                    >
                      Read More
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
              {/* Event Item */}
              <Grid item xs={12} lg={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Event Title 2
                  </Typography>
                  <Typography color="textSecondary">
                    Brief description of the event. Highlight key information
                    and encourage alumni to get involved.
                  </Typography>
                  <Link href="/events/event-title-2" passHref>
                    <Typography
                      component="a"
                      sx={{
                        color: "primary.main",
                        textDecoration: "underline",
                      }}
                    >
                      Read More
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </section>
        </Container>
      </Box>
    </main>
  );
}
