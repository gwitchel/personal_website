import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Overview: React.FC = () => {
  return (
    <Box sx={{ 
      width: '100vw',
      minHeight: { xs: 'auto', md: '80vh' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: { xs: '20px 24px', md: '40px 24px' },
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <Box sx={{ 
        maxWidth: '1000px',
        width: { xs: '100%', md: '90%' },
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 3, md: 6 },
        borderRadius: '24px',
        padding: { xs: '24px', md: '48px' },
      }}>
        <Box
          component="img"
          src="/me_2.JPG"
          alt="Georgia Witchel"
          sx={{
            width: { xs: 200, md: 280 },
            height: { xs: 200, md: 280 },
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
            },
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom color="#3C2A21">
            Welcome to my portfolio
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            If you're here, you're either a potential employer, a rogue internet stranger, 
            or I finally made it on the google "I'm feeling lucky" button. Either way, 
            welcome! For the sake of brevity, I'll be using the rule of threes. Three areas of my life: technical, creative, 
            and athletic, and three projects for each (plus my <Box component={RouterLink} to="/resume" sx={{ color: '#E57373', textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: '#3C2A21' } }}>resume</Box>). Enjoy!
          </Typography>
          
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton 
              href="https://www.linkedin.com/in/georgia-witchel-852b78149/" 
              target="_blank"
              sx={{ 
                color: '#E57373',
                '&:hover': { 
                  transform: 'scale(1.1)',
                  color: '#E57373',
                },
                transition: 'transform 0.2s'
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton 
              href="https://github.com/gwitchel" 
              target="_blank"
              sx={{ 
                color: '#E57373',
                '&:hover': { 
                  transform: 'scale(1.1)',
                  color: '#E57373',
                },
                transition: 'transform 0.2s'
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#E57373',
                fontStyle: 'italic'
              }}
            >
              gwitchel at gmail dot com
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview; 