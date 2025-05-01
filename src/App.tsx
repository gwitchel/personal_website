import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import Overview from './pages/Overview';
import Resume from './pages/Resume';
import Technical from './pages/Technical';
import Creative from './pages/Creative';
import Athletic from './pages/Athletic';
import AdobeFonts from './components/AdobeFonts';
import theme from './theme';
import ProjectDetails from './components/ProjectDetails';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdobeFonts />
      <Router>
        <Box sx={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: 'transparent' }}>
          <AnimatedBackground />
          <Navigation />
          <Box sx={{ pt: '64px' }}>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/technical" element={<Technical />} />
              <Route path="/creative" element={<Creative />} />
              <Route path="/athletic" element={<Athletic />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
