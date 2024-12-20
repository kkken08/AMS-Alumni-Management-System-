"use client";

import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  InputAdornment,
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
  Collapse,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import SchoolIcon from "@mui/icons-material/School"; // For Mentorship Program
import CampaignIcon from "@mui/icons-material/Campaign"; // For Contents Section
import MenuOpenIcon from "@mui/icons-material/MenuOpen"; // For Contents Section
import SummarizeIcon from "@mui/icons-material/Summarize";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [newFundraiser, setNewFundraiser] = useState({
    name: "",
    description: "",
    targetAmount: "",
    startDate: "",
    endDate: "",
  });

  const [openFundraising, setOpenFundraising] = useState(false);
  const [openMentorship, setOpenMentorship] = useState(false); // For toggling Mentorship Program

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFundraiser({ ...newFundraiser, [name]: value });
  };

  const handleAddFundraiser = () => {
    if (
      newFundraiser.name &&
      newFundraiser.description &&
      newFundraiser.targetAmount &&
      newFundraiser.startDate &&
      newFundraiser.endDate
    ) {
      setFundraisers([
        ...fundraisers,
        { ...newFundraiser, id: Date.now() },
      ]);
      setNewFundraiser({
        name: "",
        description: "",
        targetAmount: "",
        startDate: "",
        endDate: "",
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  const toggleFundraising = () => {
    setOpenFundraising(!openFundraising);
  };

  const toggleMentorship = () => {
    setOpenMentorship(!openMentorship);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Alumni" />
            </ListItem>

            {/* Contents Section */}
            <ListItem button>
              <ListItemIcon>
                <MenuOpenIcon />
              </ListItemIcon>
              <ListItemText primary="Contents" />
            </ListItem>

            {/* Mentorship Program Section with Collapsible Items */}
            <ListItem button onClick={toggleMentorship}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Mentorship Program" />
            </ListItem>
            <Collapse in={openMentorship} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* Removed "Create Mentorship" and "Mentorship Report" */}
              </List>
            </Collapse>

            {/* Fundraising Section with Collapsible Items */}
            <ListItem button onClick={toggleFundraising}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Fundraising" />
            </ListItem>
            <Collapse in={openFundraising} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create Fundraising" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SummarizeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Fundraising Report" />
                </ListItem>
              </List>
            </Collapse>

            {/* System Settings Section */}
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="System Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* AppBar */}
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6">Alumni Management System</Typography>
            <TextField
              placeholder="Search"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: "white", borderRadius: 1 }}
            />
            <Button color="inherit">
            SWITCH TO HOMEPAGE
            </Button>
          </Toolbar>
        </AppBar>

        {/* Fundraising Section */}
        <Box p={3}>
          <Typography variant="h6" gutterBottom>
            Fundraising &gt; Create Fundraising
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Fund Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Target Amount</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField
                      size="small"
                      name="name"
                      value={newFundraiser.name}
                      onChange={handleInputChange}
                      placeholder="Enter Fund Name"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      name="description"
                      value={newFundraiser.description}
                      onChange={handleInputChange}
                      placeholder="Enter Description"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      name="targetAmount"
                      value={newFundraiser.targetAmount}
                      onChange={handleInputChange}
                      placeholder="Enter Target Amount"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="date"
                      size="small"
                      name="startDate"
                      value={newFundraiser.startDate}
                      onChange={handleInputChange}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="date"
                      size="small"
                      name="endDate"
                      value={newFundraiser.endDate}
                      onChange={handleInputChange}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleAddFundraiser}
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
                {fundraisers.map((fundraiser) => (
                  <TableRow key={fundraiser.id}>
                    <TableCell>{fundraiser.name}</TableCell>
                    <TableCell>{fundraiser.description}</TableCell>
                    <TableCell>{fundraiser.targetAmount}</TableCell>
                    <TableCell>{fundraiser.startDate}</TableCell>
                    <TableCell>{fundraiser.endDate}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() =>
                          setFundraisers(fundraisers.filter((f) => f.id !== fundraiser.id))
                        }
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
