import React from 'react';
import { Box } from '@mui/material';

const AnimatedBackground: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: 'linear-gradient(45deg, #ffedee, #fff9f8, #fffbf2, #fff5f2, #ffedee)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        '@keyframes gradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 20%, rgba(255, 237, 238, 0.2) 0%, transparent 90%)',
          animation: 'blob1 20s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 80%, rgba(255, 245, 242, 0.2) 0%, transparent 90%)',
          animation: 'blob2 25s ease-in-out infinite',
        },
        '@keyframes blob1': {
          '0%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(20px, -30px) scale(1.05)',
          },
          '66%': {
            transform: 'translate(-15px, 15px) scale(0.95)',
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)',
          },
        },
        '@keyframes blob2': {
          '0%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(-20px, 30px) scale(1.05)',
          },
          '66%': {
            transform: 'translate(15px, -15px) scale(0.95)',
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)',
          },
        },
      }}
    />
  );
};

export default AnimatedBackground; 