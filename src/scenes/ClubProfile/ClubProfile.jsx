import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Mock function to fetch data from clubs table
const fetchClubData = () => {
  return {
    club_id: '1',
    clubname: 'Rotary Club',
    charterid: '12345',
    charterdate: '2023-01-01',
    group_id: '2',
    club_logo: 'https://example.com/logo.png',
    president: 'John Doe',
    secretary: 'Jane Smith',
    installation_date: '2023-05-15',
    parent_rotary_name: 'Parent Rotary',
    staff_coordinator: 'Staff Coordinator',
    staff_coordinator_number: '1234567890',
    cabinet_mentor: 'Cabinet Mentor',
    assets: 'Clubhouse, Vehicles',
    club_social_links: 'https://facebook.com/rotaryclub',
    fb_insta_linkedin: 'https://instagram.com/rotaryclub'
  };
};

const ClubProfile = () => {
  const [clubData, setClubData] = useState({});
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Fetch club data from the table (mocked here)
    const data = fetchClubData();
    setClubData(data);
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          My Profile
        </Typography>
        <img src=""width={200} height={200} alt="Club logo"/>
        <Box sx={{ mt: 3, width: '100%' }}>
          <Grid container spacing={2}>
            {Object.keys(clubData).map((key) => (
              <Grid item xs={12} sm={isSmallScreen ? 12 : 6} key={key}>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    <strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong> {clubData[key]}
                  </Typography>
                  <IconButton aria-label="edit" size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ClubProfile;
