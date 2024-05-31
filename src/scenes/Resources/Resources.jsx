import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const resources = [
  { name: 'TRF Form', link: '/trf-form' },
  { name: 'Grievance Form', link: '/grievance-form' },
  { name: 'Membership Form', link: '/membership-form' },
  { name: 'Event Registration', link: '/event-registration' },
  { name: 'Volunteer Signup', link: '/volunteer-signup' },
];

const Resources = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        <Typography component="h1" variant="h5" gutterBottom>
          Resources
        </Typography>
        <Box sx={{ mt: 3, width: '100%' }}>
          <List>
            {resources.map((resource, index) => (
              <ListItem component="a" href={resource.link} key={index}>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText primary={resource.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Resources;
