// IMPORTS
"use client"; // Mark this component as a client component

import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// APP
export default function ProfileCard(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(props.firstName || "");
  const [middleName, setMiddleName] = useState(props.middleName || "");
  const [lastName, setLastName] = useState(props.lastName || "");
  const [gender, setGender] = useState(props.gender || "");
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber || "");
  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");

  const handleSave = () => {
    // Handle save logic here
    console.log("Profile updated:", { firstName, middleName, lastName, gender, phoneNumber, email, password });
    setIsEditing(false);
  };

  return (
    <Card variant="outlined" className="border border-gray-300 rounded-lg shadow-sm">
      <Grid container direction="column" justifyContent="center" alignItems="center">
        {/* CARD HEADER START */}
        <Grid item className="py-6 text-center">
          {/* PROFILE PHOTO */}
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <PhotoCameraIcon
                className="border-4 border-white bg-pink-500 rounded-full p-1"
                sx={{ width: 35, height: 35 }}
              />
            }
          >
            <Avatar
              className="mb-4"
              sx={{ width: 100, height: 100 }}
              src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png"
            />
          </Badge>

          {/* DESCRIPTION */}
          <Typography variant="h6" className="text-lg font-semibold">
            {`${firstName} ${middleName} ${lastName}`}
          </Typography>
        </Grid>
        {/* CARD HEADER END */}

        {/* DETAILS */}
        <Grid container>
          {/* Editable Fields */}
          {isEditing ? (
            <Grid item xs={6} className="border-t border-gray-200 p-4">
              <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                className="mb-2"
              />
              <TextField
                label="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                fullWidth
                className="mb-2"
              />
              <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                className="mb-2"
              />
              <TextField
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                fullWidth
                className="mb-2"
              />
              <TextField
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                className="mb-2"
              />
              <TextField
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                className="mb-2"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                className="mb-2"
              />
            </Grid>
          ) : (
            <Grid item xs={6} className="border-t border-gray-200 p-4">
              <Typography>First Name: {firstName}</Typography>
              <Typography>Middle Name: {middleName}</Typography>
              <Typography>Last Name: {lastName}</Typography>
              <Typography>Gender: {gender}</Typography>
              <Typography>Phone Number: {phoneNumber}</Typography>
              <Typography>Email Address: {email}</Typography>
            </Grid>
          )}
        </Grid>

        {/* EDIT/ SAVE BUTTON */}
        <Grid item className="border-t border-gray-200 w-full px-4 py-2">
          {isEditing ? (
            <>
              <Button
                variant="contained"
                color="primary"
                className="w-full py-2 my-2"
                onClick={handleSave}
              >
                Save Profile
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className="w-full py-2"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className="w-full py-2 my-2"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}
