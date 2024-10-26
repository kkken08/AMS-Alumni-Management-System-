import { AppBar, Typography, Toolbar, Button, TextField, Box, Container, Grid, Paper, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      {/* AppBar for navigation */}
      <AppBar position="static" sx={{ mb: 6 }}>
        <Toolbar>
          <Typography variant="h6">Alumni Management System</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Link href="/login" passHref>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundColor: "#e3f2fd" }}>
          <Typography variant="h5" align="center" gutterBottom>
            Sign up for an account
          </Typography>
          <form action="#" method="POST">
            <Grid container spacing={2}>
              {/* First Name and Last Name */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="firstname">First Name</InputLabel>
                  <TextField
                    id="firstname"
                    name="firstname"
                    variant="outlined"
                    label="First Name"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="lastname">Last Name</InputLabel>
                  <TextField
                    id="lastname"
                    name="lastname"
                    variant="outlined"
                    label="Last Name"
                    required
                  />
                </FormControl>
              </Grid>

              {/* Gender and Batch */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                  <Select
                    id="gender"
                    name="gender"
                    label="Gender"
                    required
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="batch">Batch</InputLabel>
                  <Select
                    id="batch"
                    name="batch"
                    label="Batch"
                    required
                  >
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2024">2024</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Department and Course */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="department">Department</InputLabel>
                  <Select
                    id="department"
                    name="department"
                    label="Department"
                    required
                  >
                    <MenuItem value="CCA">College of Customs Administration</MenuItem>
                    <MenuItem value="CBA">College of Business Administration</MenuItem>
                    <MenuItem value="CCS">College of Computer Studies</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="course">Course</InputLabel>
                  <Select
                    id="course"
                    name="course"
                    label="Course"
                    required
                  >
                    <MenuItem value="BSCE">BS in Computer Engineering</MenuItem>
                    <MenuItem value="BSEE">BS in Electrical Engineering</MenuItem>
                    <MenuItem value="BSECE">BS in Electronics & Communications Engineering</MenuItem>
                    <MenuItem value="BSIE">BS in Industrial Engineering</MenuItem>
                    <MenuItem value="BSCS">BS in Computer Science</MenuItem>
                    <MenuItem value="BSIT">BS in Information Technology</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Employment Status */}
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="employment-status">Employment Status</InputLabel>
                  <Select
                    id="employment-status"
                    name="employment-status"
                    label="Employment Status"
                    required
                  >
                    <MenuItem value="employed">Employed</MenuItem>
                    <MenuItem value="unemployed">Unemployed</MenuItem>
                    <MenuItem value="student">Student</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Email and Password */}
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <TextField
                    id="email"
                    name="email"
                    variant="outlined"
                    type="email"
                    label="Email Address"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <TextField
                    id="password"
                    name="password"
                    variant="outlined"
                    type="password"
                    label="Password"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                  <TextField
                    id="confirm-password"
                    name="confirm-password"
                    variant="outlined"
                    type="password"
                    label="Confirm Password"
                    required
                  />
                </FormControl>
              </Grid>

              {/* Submit and Link to Login */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Link href="/login" passHref>
                  <Button variant="text" color="inherit">
                    Already have an account? Login
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </main>
  );
}
