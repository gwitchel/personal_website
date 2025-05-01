import React from 'react';
import { 
  Box, 
  Typography, 
  Grid as MuiGrid, 
  Card, 
  CardContent, 
  CardMedia
} from '@mui/material';
import ProjectDialog from './ProjectDialog';
import { Project } from './ProjectDetails';

const Grid = MuiGrid as any; // Temporary fix for TypeScript errors

interface ProjectGridProps {
  title: string;
  description: string;
  items: Project[];
  linkText?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  title, 
  description, 
  items,
  linkText = "View Project"
}) => {
  const [selectedItem, setSelectedItem] = React.useState<Project | null>(null);

  const handleOpenDialog = (item: Project) => {
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  return (
    <Box sx={{ 
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 0 200px 0',
      boxSizing: 'border-box',
    }}>
      <Box sx={{ 
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        margin: '0 auto',
        px: 3,
      }}>
        <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            {description}
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {items.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  }
                }}
                onClick={() => handleOpenDialog(item)}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={item.imageUrl}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {item.shortDescription}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <ProjectDialog
          open={!!selectedItem}
          onClose={handleCloseDialog}
          title={selectedItem?.title || ''}
          imageUrl={selectedItem?.imageUrl || ''}
          description={selectedItem?.fullDescription || ''}
          tags={selectedItem?.categories || []}
          link={selectedItem?.link}
          linkText={linkText}
        />
      </Box>
    </Box>
  );
};

export default ProjectGrid; 