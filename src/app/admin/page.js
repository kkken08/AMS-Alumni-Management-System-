"use client";  // Specify that this is a Client Component

import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";

export default function AdminDashboard() {
  const [view, setView] = useState("alumni"); // Default view is Alumni Management
  const [alumni, setAlumni] = useState([]);
  const [events, setEvents] = useState([]);

  const addAlumni = () => {
    const newAlumni = { id: Date.now(), name: "New Alumnus", email: "new@alumnus.com" };
    setAlumni([...alumni, newAlumni]);
  };

  const editAlumni = (id) => {
    const name = prompt("Enter new name for the alumnus");
    const email = prompt("Enter new email for the alumnus");
    setAlumni(alumni.map((alumnus) => (alumnus.id === id ? { ...alumnus, name, email } : alumnus)));
  };

  const deleteAlumni = (id) => {
    setAlumni(alumni.filter((alumnus) => alumnus.id !== id));
  };

  const addEvent = () => {
    const newEvent = { id: Date.now(), name: "New Event", date: "2023-12-01" };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleLogout = () => {
    // Implement logout logic here
    alert("You have been logged out.");
  };

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h6" sx={{ p: 2, textAlign: "center", bgcolor: "#f5f5f5", boxShadow: 3 }}>
          Admin
        </Typography>
        <Divider />
        <List>
          <ListItem button onClick={() => setView("alumni")}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Alumni Management" />
          </ListItem>
          <ListItem button onClick={() => setView("events")}>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Event Management" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* University Title */}
        <Box sx={{ p: 2, textAlign: "left", bgcolor: "primary.main", boxShadow: 3, mb: 4 }}>
          <Typography color="white">University of Cebu Lapu-Lapu and Mandaue</Typography>
        </Box>

        <Container maxWidth="lg">
          {/* Conditional Rendering of Alumni or Event List */}
          {view === "alumni" ? (
            <Paper sx={{ p: 2, mb: 2 }}>
              <Button variant="contained" onClick={addAlumni}>
                Add Alumni
              </Button>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {alumni.map((alumnus) => (
                      <TableRow key={alumnus.id}>
                        <TableCell>{alumnus.name}</TableCell>
                        <TableCell>{alumnus.email}</TableCell>
                        <TableCell>
                          <Button onClick={() => editAlumni(alumnus.id)}>Edit</Button>
                          <Button onClick={() => deleteAlumni(alumnus.id)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ) : view === "events" ? (
            <Paper sx={{ p: 2, mb: 2 }}>
              <Button variant="contained" onClick={addEvent}>
                Add Event
              </Button>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Event Name</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell>{event.name}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>
                          <Button onClick={() => deleteEvent(event.id)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ) : (
            <Typography variant="h6" align="center">
              Select a view from the sidebar
            </Typography>
          )}
        </Container>
      </Box>
    </Box>
  );
}
