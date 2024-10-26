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
} from "@mui/material";
import Link from "next/link";
import CommentIcon from "@mui/icons-material/Comment";

export default function About() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            About the Alumni Management System
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the UCLM Alumni Management System. This platform is designed to help alumni stay connected with their alma mater and fellow graduates. It offers a variety of features aimed at fostering communication, organizing events, tracking the career progress of graduates, and supporting the university’s initiatives.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to strengthen the bond between the university and its alumni by providing a platform that supports ongoing engagement, collaboration, and mutual support. We believe in the power of community and aim to help our graduates thrive both professionally and personally.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
