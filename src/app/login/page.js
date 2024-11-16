"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TextField, Button, Typography, Box, Container, Paper } from "@mui/material";

export default function Login() {
  // State for email, password, validation status, and submission attempt
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);

  // Basic validation function
  const validateInput = () => {
    return email.includes("@") && password.length > 6;
  };

  // useEffect to validate form inputs
  useEffect(() => {
    const valid = validateInput();
    setIsValid(valid);
    // Show error only if the form is invalid and submit has been attempted
    setError(!valid && submitAttempted ? "Invalid email or password." : "");
  }, [email, password, submitAttempted]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitAttempted(true); // Mark that submit has been attempted
    if (isValid) {
      console.log("Login successful!");
      // Further login logic here
    }
  };

  return (
    <Container 
      component="main" 
      maxWidth="fixed" 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        height: '90vh', 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#e3f2fd', 
        px: { xs: 2, md: 0 }, 
        py: 4 
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: '40%',
          height: '70%',
          backgroundImage: 'url(/bckgrnd3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '200px',
          borderRadius: 1,
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
            />

            {error && (
              <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

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
