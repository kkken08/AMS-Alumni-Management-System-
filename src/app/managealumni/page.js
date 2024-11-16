import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
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
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // For Funds
import EditIcon from "@mui/icons-material/Edit"; // For Edit icon
import DeleteIcon from "@mui/icons-material/Delete"; // For Delete icon

const alumniData = [
  { id: 1, avatar: "https://via.placeholder.com/40", name: "Ambot Nimo", course: "BSIT", email: "elvin@gmail.com", gender: "Female", status: "Active" },
  { id: 2, avatar: "https://via.placeholder.com/40", name: "Johnson", course: "BSTM", email: "johnson@gmail.com", gender: "Male", status: "Active" },
  { id: 3, avatar: "https://via.placeholder.com/40", name: "Mike", course: "BSHM", email: "mike@gmail.com", gender: "Male", status: "Active" },
  { id: 4, avatar: "https://via.placeholder.com/40", name: "Magic", course: "BSTM", email: "kenz20@gmail.com", gender: "Male", status: "Active" },
  { id: 5, avatar: "https://via.placeholder.com/40", name: "Daniel", course: "BSIT", email: "daniel@gmail.com", gender: "Male", status: "Active" },
  { id: 6, avatar: "https://via.placeholder.com/40", name: "Sarah", course: "BSIT", email: "renz123@gmail.com", gender: "Male", status: "Not Verified" },
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
            <ListItem>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Alumni" />
            </ListItem>
            {/* Nested Items under Alumni */}
            <List sx={{ pl: 4 }}>
              <ListItem button>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Department" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Course" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Batch" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SummarizeIcon />
                </ListItemIcon>
                <ListItemText primary="Summary Reports" />
              </ListItem>
            </List>
            <ListItem button>
              <ListItemIcon>
                <MenuOpenIcon />
              </ListItemIcon>
              <ListItemText primary="Contents" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Mentorship" />
            </ListItem>

            {/* Funds */}
            <ListItem button>
              <ListItemIcon>
                <AttachMoneyIcon />
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
            <Button color="inherit" startIcon={<LogoutIcon />}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* Table */}
        <Box p={3}>
          <Typography variant="h6" gutterBottom>
            All Alumni
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student ID</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Course</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {alumniData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <Avatar src={row.avatar} />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.course}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        color={row.status === "Active" ? "green" : "red"}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button size="small" variant="outlined" startIcon={<EditIcon />}>
                          Edit
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          color="error"
                          startIcon={<DeleteIcon />}
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
