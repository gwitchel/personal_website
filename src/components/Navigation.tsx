import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { label: 'Resume', path: '/resume' },
    { label: 'Technical', path: '/technical' },
    { label: 'Creative', path: '/creative' },
    { label: 'Athletic', path: '/athletic' },
  ];

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      <AppBar 
        position="static" 
        color="transparent" 
        elevation={0}
        sx={{ 
          width: '100%',
          margin: 0,
          padding: 0,
          backgroundColor: 'transparent',
        }}
      >
        <Toolbar sx={{ width: '100%', px: 4 }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: '#3E2723',
              fontWeight: 'bold',
              '&:hover': {
                color: '#FA8072',
              },
            }}
          >
            Georgia Witchel
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  '& .MuiPaper-root': {
                    zIndex: 2000,
                    mt: 1.5,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                  },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    onClick={handleClose}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  sx={{
                    color: '#3E2723',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      color: '#FA8072',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation; 