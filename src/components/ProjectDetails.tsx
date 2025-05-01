import React from 'react';
import { 
  Box, 
  Typography,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  categories: string[];
  link?: string;
  callToAction?: string;
}

const ProjectDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project as Project;

  if (!project) {
    return (
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Typography variant="h4">Project not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 0 200px 0',
      boxSizing: 'border-box',
    }}>
      <Box sx={{ 
        maxWidth: '900px',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        margin: '0 auto',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, mb: 2 }} onClick={() => navigate(-1)}>
          <IconButton 
            
            size="small"
            sx={{ 
              color: 'text.primary',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <Typography variant="h6" sx={{ color: 'text.primary', fontSize: '1rem' }}>
            Back
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'left', maxWidth: '400px', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '1.75rem' }}>
            {project.title}
          </Typography>
        </Box>

        <Box sx={{ 
          width: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}>
          <img 
            src={project.imageUrl} 
            alt={project.title}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Box>

        <Box sx={{ textAlign: 'left', }}>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            {project.fullDescription}
          </Typography>
        </Box>

        {project.link && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Box 
              component="a" 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: '#E57373',
                textDecoration: 'none',
                fontSize: '1.2rem',
                '&:hover': { 
                  textDecoration: 'underline',
                  color: '#3C2A21'
                }
              }}
            >
              {project.callToAction || 'View Project'}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectDetails; 