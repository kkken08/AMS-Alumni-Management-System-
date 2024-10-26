"use client";  // Add this at the top to specify that this is a Client Component

import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Button, Box, Container, Grid, Paper, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

export default function News() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
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
                <Paper elevation={3} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: '8px' }}>
                  <Typography variant="h6" gutterBottom>
                    News Title 1
                  </Typography>
                  <Typography color="textSecondary">
                    Brief description of the news item. This could be an update or a recent announcement relevant to alumni.
                  </Typography>
                  <Link href="/news/news-title-1" passHref>
                    <Typography component="a" sx={{ color: "primary.main", textDecoration: "underline" }}>
                      Read News
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
              {/* News Item */}
              <Grid item xs={12} lg={6}>
                <Paper elevation={3} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: '8px' }}>
                  <Typography variant="h6" gutterBottom>
                    News Title 2
                  </Typography>
                  <Typography color="textSecondary">
                    Brief description of the news item. Provide a summary of key details or links to full articles.
                  </Typography>
                  <Link href="/news/news-title-2" passHref>
                    <Typography component="a" sx={{ color: "primary.main", textDecoration: "underline" }}>
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
                <Paper elevation={3} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: '8px' }}>
                  <Typography variant="h6" gutterBottom>
                    Event Title 1
                  </Typography>
                  <Typography color="textSecondary">
                    Brief description of the event. Include details like date, time, and how to participate.
                  </Typography>
                  <Link href="/events/event-title-1" passHref>
                    <Typography component="a" sx={{ color: "primary.main", textDecoration: "underline" }}>
                      Read More
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
              {/* Event Item */}
              <Grid item xs={12} lg={6}>
                <Paper elevation={3} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: '8px' }}>
                  <Typography variant="h6" gutterBottom>
                    Event Title 2
                  </Typography>
                  <Typography color="textSecondary">
                    Brief description of the event. Highlight key information and encourage alumni to get involved.
                  </Typography>
                  <Link href="/events/event-title-2" passHref>
                    <Typography component="a" sx={{ color: "primary.main", textDecoration: "underline" }}>
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
