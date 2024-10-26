import Link from "next/link";
import { TextField, Button, Typography, Box, Container, Paper } from "@mui/material";

export default function Login() {
  return (
    <Container 
      component="main" 
      maxWidth="fixed" 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        height: '90vh', 
        alignItems: 'center',
        justifyContent: 'center', // Center horizontally
        backgroundColor: '#e3f2fd', // Light blue background color
        px: { xs: 2, md: 0 }, // Responsive padding
        py: 4 // Vertical padding
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' }, // Hide on small screens
          width: '40%', // Adjust width for different screen sizes
          height: '70%', // Adjust height for different screen sizes
          backgroundImage: 'url(/bckgrnd3.png)', // Path to your cover image
          backgroundSize: 'cover', // Ensure the image covers the box
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent image repetition
          minHeight: '200px', // Ensure minimum height
          borderRadius: 1, // Optional: rounded corners
        }}
      />

      {/* Login Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          p: 4,
        }}
      >
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 400, p: 4, backgroundColor: '#ffffff' }}>
          <Box component="form" sx={{ mt: 1 }} action="#" method="POST">
            <Typography 
              component="h1" 
              variant="h5" 
              align="center" 
              sx={{ fontWeight: 'bold', mb: 4 }}
            >
              Sign in
            </Typography>

            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              required
              sx={{ mb: 3 }}
            />

            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              required
              variant="outlined"
              sx={{ mb: 3 }}
            />

            <Typography 
              variant="body2" 
              align="right" 
              sx={{ mb: 2, color: 'gray' }}
            >
              <Link href="#" passHref>
                Forgot Password?
              </Link>
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mb: 2 }}
            >
              Sign in
            </Button>

            <Typography variant="body2" align="center" sx={{ color: 'gray' }}>
              Don't have an account?{' '}
              <Link href="/register" passHref>
                <Typography component="a" color="primary" sx={{ cursor: 'pointer' }}>
                  Create Account
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
