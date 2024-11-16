import React from "react";
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
  Avatar,
  Pagination,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CampaignIcon from "@mui/icons-material/Campaign";
import EventIcon from "@mui/icons-material/Event";
import ForumIcon from "@mui/icons-material/Forum";
import MentorshipIcon from "@mui/icons-material/School";
import FundsIcon from "@mui/icons-material/AttachMoney";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const newsData = [
  {
    id: 1,
    thumbnail: "https://via.placeholder.com/40",
    title: "A Comprehensive Alumni Management System for UCLM",
    author: "Dr. Maria Santos",
    description:
      "This document presents the development and implementation of a comprehensive alumni management system for the University of Cebu Lapu-Lapu and Mandaue (UCLM).",
    datePosted: "August 3, 2024",
  },
  {
    id: 2,
    thumbnail: "https://via.placeholder.com/40",
    title: "UCLM Launches Innovative Alumni Management System",
    author: "Dr. Maria Santos",
    description:
      "The University of Cebu Lapu-Lapu and Mandaue (UCLM) has launched an innovative alumni management system designed to enhance communication and engagement with its graduates.",
    datePosted: "August 3, 2024",
  },
  {
    id: 3,
    thumbnail: "https://via.placeholder.com/40",
    title: "UCLM Alumni Management System Boosts Networking Opportunities",
    author: "John Dela Cruz",
    description:
      "In a move to strengthen its alumni network, UCLM has unveiled a new alumni management system.",
    datePosted: "August 3, 2024",
  },
];

const App = () => {
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
            <ListItem button>
              <ListItemIcon>
                <MenuOpenIcon />
              </ListItemIcon>
              <ListItemText primary="Contents" />
            </ListItem>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <ListItem button>
                <ListItemIcon>
                  <CampaignIcon />
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Forum" />
              </ListItem>
            </List>
            <ListItem button>
              <ListItemIcon>
                <MentorshipIcon />
              </ListItemIcon>
              <ListItemText primary="Mentorship Program" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FundsIcon />
              </ListItemIcon>
              <ListItemText primary="Funds" />
            </ListItem>
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
            <Button color="inherit">Switch to Homepage</Button>
          </Toolbar>
        </AppBar>

        {/* Table */}
        <Box p={3}>
          <Typography variant="h6" gutterBottom>
            Content &gt; News
          </Typography>
          <Box mb={2} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ backgroundColor: "#1976d2", color: "white" }}
            >
              Add
            </Button>
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
              sx={{ maxWidth: 300 }}
            />
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Thumbnail</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Date Posted</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {newsData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Avatar src={row.thumbnail} />
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.datePosted}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<EditIcon />}
                          sx={{
                            color: "#1976d2",
                            borderColor: "#1976d2",
                            textTransform: "none",
                            fontWeight: 600,
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          sx={{
                            color: "#d32f2f",
                            borderColor: "#d32f2f",
                            textTransform: "none",
                            fontWeight: 600,
                          }}
                        >
                          Delete
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={2} display="flex" justifyContent="center">
            <Pagination count={16} color="primary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
