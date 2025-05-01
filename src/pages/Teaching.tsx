import React from 'react';
import { Box, Typography } from '@mui/material';

const Teaching: React.FC = () => {
  return (
    <Box sx={{ 
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 0',
      boxSizing: 'border-box',
    }}>
      <Box sx={{ maxWidth: '800px', width: '95%', margin: '0 auto' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Teaching
        </Typography>
        <Typography variant="body1">
          Coming soon...
        </Typography>
      </Box>
    </Box>
  );
};

export default Teaching; 