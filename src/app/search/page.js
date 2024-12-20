"use client";

import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  TextField,
  Card,
  CardContent,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function SearchPage() {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

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

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* AppBar for navigation */}
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
            <Link href="/events" style={{ textDecoration: "none", color: "white" }}>
              Events
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/about" style={{ textDecoration: "none", color: "white" }}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/search" style={{ textDecoration: "none", color: "#FFDE00" }}>
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

      <Box sx={{ flexGrow: 1, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
        <div className="mt-16 max-w-5xl mx-auto">
          <section className="mb-12">
            <Typography
              variant="h4"
              component="h2"
              className="mb-4 text-center text-gray-900"
            >
              Search Posts and People
            </Typography>

            <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
              <TextField
                label="Search"
                fullWidth
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </div>

            {/* Search Results for Posts */}
            <div className="mb-8">
              <Typography
                variant="h6"
                component="h3"
                className="mb-4 text-gray-900"
              >
                Search Results for Posts
              </Typography>
              <Card className="bg-white p-6 rounded-lg shadow-md mb-6">
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="font-semibold mb-2"
                  >
                    Sample Post Title
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="mb-4">
                    This is a sample post content. It shows how a post will appear
                    in the search results.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="font-bold">
                    Posted by: John Doe
                  </Typography>
                </CardContent>
              </Card>

              <Card className="bg-white p-6 rounded-lg shadow-md">
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="font-semibold mb-2"
                  >
                    Another Post Title
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="mb-4">
                    Here's another post example with its content displayed in the
                    search results.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="font-bold">
                    Posted by: Jane Smith
                  </Typography>
                </CardContent>
              </Card>
            </div>

            {/* Search Results for People */}
            <div>
              <Typography
                variant="h6"
                component="h3"
                className="mb-4 text-gray-900"
              >
                Search Results for People
              </Typography>
              <List className="bg-white rounded-lg shadow-md">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="John Doe" secondary="john.doe@example.com" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Jane Smith" secondary="jane.smith@example.com" />
                </ListItem>
              </List>
            </div>
          </section>
        </div>
      </Box>
    </main>
  );
}
