"use client";  // Add this at the top to specify that this is a Client Component

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
} from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [searchQuery, setSearchQuery] = useState("");
  const [postTitle, setPostTitle] = useState(""); // State for post title
  const [postContent, setPostContent] = useState(""); // State for post content

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add search logic here
    console.log("Search Query:", searchQuery);
  };

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value); // Update post title
  };

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value); // Update post content
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "white" }}>
      {/* University Title */}
      <Box
        sx={{ p: 2, textAlign: "left", bgcolor: "primary.main", boxShadow: 3, mb: 4 }}
      >
        <Typography color="white">
          University of Cebu Lapu-Lapu and Mandaue
        </Typography>
      </Box>

      {/* AppBar Section */}
      <AppBar position="static" sx={{ mb: 1, bgcolor: "#e0e0e0", boxShadow: 5 }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Link href="/home" passHref>
              <Typography component="a" sx={{ color: "black", textDecoration: "none", mx: 5 }}>
                Home
              </Typography>
            </Link>

            <Link href="/news" passHref>
              <Typography component="a" sx={{ color: "black", textDecoration: "none", mx: 5 }}>
                News
              </Typography>
            </Link>

            <Link href="/events" passHref>
              <Typography component="a" sx={{ color: "black", textDecoration: "none", mx: 5 }}>
                Events
              </Typography>
            </Link>

            <Link href="/about" passHref>
              <Typography component="a" sx={{ color: "black", textDecoration: "none", mx: 5 }}>
                About
              </Typography>
            </Link>
            
            <Link href="/search" passHref>
              <Typography component="a" sx={{ color: "black", textDecoration: "none", mx: 5 }}>
                Search
              </Typography>
            </Link>

            <div>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ ml: 2 }}  
              >
                Ambotnimo
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box sx={{ mt: 4, textAlign: "center", color: "#fff" }}>
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
            onChange={handlePostTitleChange} // Handle title change
          />
          <TextField
            label="Content"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            sx={{ mb: 2 }}
            value={postContent}
            onChange={handlePostContentChange} // Handle content change
          />
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Post
          </Button>
        </Box>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          {/* First Card */}
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
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    This is an example comment 1.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    This is an example comment 2.
                  </Typography>
                  <TextField
                    label="Add a comment"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                    value="Sample comment"
                  />
                  <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                    Comment
                  </Button>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          {/* Second Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  How to Stay Connected with Alumni?
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Looking for ways to stay in touch with fellow alumni? Here are some tips...
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton color="primary">
                  <CommentIcon />
                </IconButton>
                <Typography variant="body2" color="textSecondary">
                  1 Comment
                </Typography>
              </CardActions>

              <Collapse in={true} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    This is a static comment example.
                  </Typography>
                  <TextField
                    label="Add a comment"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                    value="Sample comment"
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
