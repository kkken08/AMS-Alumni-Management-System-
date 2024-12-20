"use client"; // Add this at the top to specify that this is a Client Component

import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  TextField,
  Box,
  Grid,
  Container,
  Menu,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  Tabs,
  Tab,
  Badge,
} from "@mui/material";
import Link from "next/link";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Home() {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null); // State for profile menu
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null); // State for notification menu
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [postTitle, setPostTitle] = useState(""); // State for post title
  const [postContent, setPostContent] = useState(""); // State for post content
  const [comment, setComment] = useState(""); // State for comments
  const [activeTab, setActiveTab] = useState(0); // Tab state for notifications

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "white" }}>
      <AppBar position="static" sx={{ backgroundColor: "#2b4d91" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            UC-LM Alumni Management System
          </Typography>
          <Button color="inherit">
            <Link href="/home" style={{ textDecoration: "none", color: "#FFDE00" }}>
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
        {activeTab === 0 && (
          <Box sx={{ padding: 2 }}>
            <Typography variant="body2">Nothing new needs attention.</Typography>
          </Box>
        )}
        {activeTab === 1 && (
          <Box sx={{ padding: 2 }}>
            <Typography variant="body2">No dismissed notifications.</Typography>
          </Box>
        )}
      </Menu>

      <Container maxWidth="lg">
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Alumni Forum
          </Typography>
          <Typography variant="body1" paragraph>
            Share your thoughts, ask questions, and connect with fellow alumni.
          </Typography>
        </Box>

        <Box sx={{ mt: 6, p: 4, backgroundColor: "#fff", borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h6" gutterBottom>
            Create a New Post
          </Typography>
          <TextField
            label="Title"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={postTitle}
            onChange={handlePostTitleChange}
          />
          <TextField
            label="Content"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            sx={{ mb: 2 }}
            value={postContent}
            onChange={handlePostContentChange}
          />
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Post
          </Button>
        </Box>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Welcome to the Alumni Forum!
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Feel free to start discussions or ask questions. This is an example post.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton color="primary">
                  <CommentIcon />
                </IconButton>
                <Typography variant="body2" color="textSecondary">
                  2 Comments
                </Typography>
              </CardActions>
              <Collapse in={true} timeout="auto" unmountOnExit>
                <CardContent>
                  <TextField
                    label="Add a comment"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                    value={comment}
                    onChange={handleCommentChange}
                  />
                  <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                    Comment
                  </Button>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
