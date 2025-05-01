import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ProjectDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  imageUrl: string;
  description: string;
  tags: string[];
  link?: string;
  linkText?: string;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  open,
  onClose,
  title,
  imageUrl,
  description,
  tags,
  link,
  linkText = "View Details"
}) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          background: '#fafafa',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          borderRadius: '16px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        }
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(2px)',
        }
      }}
    >
      <DialogTitle>
        <Typography variant="h3" sx={{ color: 'text.primary' }}>
          {title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'text.primary',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 3 }}>
          <img 
            src={imageUrl} 
            alt={title}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>
        <Typography variant="h6" paragraph sx={{ color: 'text.primary' }}>
          {description}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: 'text.primary' }}>
          {tags.length > 0 ? 'Categories:' : 'Technologies Used:'}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {tags.map((tag) => (
            <Typography 
              key={tag}
              variant="h6"
              sx={{
                background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                boxShadow: '0 2px 8px rgba(33, 150, 243, 0.3)',
              }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        {link && (
          <Button 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976D2, #1E88E5)',
              },
            }}
          >
            {linkText}
          </Button>
        )}
        <Button 
          onClick={onClose} 
          size="large"
          sx={{
            color: 'text.primary',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDialog; 