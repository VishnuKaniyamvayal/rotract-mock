// src/ProfilePage.js
import React from 'react';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';

const Profile = () => {
  // Sample user details for demonstration
  const userDetails = {
    profilePhoto: 'https://via.placeholder.com/150', // Replace with actual image link
    userName: 'John Doe',
    id: '12345',
    isBoardMember: true,
    designation: 'President',
    club: 'Tech Club',
    bloodGroup: 'O+',
    yearOfRotation: 3,
    address: '123 Main St, Anytown, USA',
    instagram: 'https://www.instagram.com/johndoe',
    facebook: 'https://www.facebook.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    email: 'john.doe@example.com',
    password: '********', // For security reasons, password should not be displayed
    profile: 'Enthusiastic tech lover and club president with a passion for innovation and leadership.'
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Details
      </Typography>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Avatar
              alt={userDetails.userName}
              src={userDetails.profilePhoto}
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Name: {userDetails.userName}</Typography>
            <Typography variant="body1">ID: {userDetails.id}</Typography>
            <Typography variant="body1">Board Member: {userDetails.isBoardMember ? 'Yes' : 'No'}</Typography>
            <Typography variant="body1">Designation: {userDetails.designation}</Typography>
            <Typography variant="body1">Club: {userDetails.club}</Typography>
            <Typography variant="body1">Blood Group: {userDetails.bloodGroup}</Typography>
            <Typography variant="body1">Year of Rotation: {userDetails.yearOfRotation}</Typography>
            <Typography variant="body1">Address: {userDetails.address}</Typography>
            <Typography variant="body1">Email: {userDetails.email}</Typography>
            <Typography variant="body1">
              LinkedIn: <a href={userDetails.linkedin} target="_blank" rel="noopener noreferrer">{userDetails.linkedin}</a>
            </Typography>
            <Typography variant="body1">
              Facebook: <a href={userDetails.facebook} target="_blank" rel="noopener noreferrer">{userDetails.facebook}</a>
            </Typography>
            <Typography variant="body1">
              Instagram: <a href={userDetails.instagram} target="_blank" rel="noopener noreferrer">{userDetails.instagram}</a>
            </Typography>
            <Typography variant="body1">Profile: {userDetails.profile}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;
