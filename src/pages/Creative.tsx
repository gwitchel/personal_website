import React from 'react';
import { 
  Box, 
  Typography, 
  Grid as MuiGrid, 
  Card, 
  CardContent, 
  CardMedia
} from '@mui/material';

interface Link {
  url: string;
  text: string;
}

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  categories: string[];
  links?: Link[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Chaos & Control",
    shortDescription: "I signed a book deal! Chaos & Control is a guide to mastering contemporary watercolor, and will be hitting shelves in Spring 2025.",
    fullDescription: "Detailed description of the first creative project. This can include multiple paragraphs and more information about the project's inspiration, process, and outcomes.",
    imageUrl: "/me.JPG",
    categories: ["Photography", "Digital Art", "Design"],
    links: [
      { url: "https://yourportfolio.com/project1/preview", text: "Read Preview" }
    ]
  },
  {
    id: 2,
    title: "Substack",
    shortDescription: "I do lots of creative things, too many to document on a portfolio. But here's a link to my Substack, where I write about my creative journey and have over 7k subscribers.",
    fullDescription: "Detailed description of the second creative project. This can include multiple paragraphs and more information about the project's inspiration, process, and outcomes.",
    imageUrl: "/art_1.JPG",
    categories: ["Illustration", "Animation", "Storytelling"],
    links: [
      { url: "https://techstacksf.substack.com/", text: "Read Substack" },
    ]
  },
  {
    id: 3,
    title: "Galleries & Museums",
    shortDescription: "Recently, I've been exploring galleries and museums as a way to expand my creative horizons. I did 7 galleries this year alone, and am planning my first solo show in Fall 2025.",
    fullDescription: "Detailed description of the third creative project. This can include multiple paragraphs and more information about the project's inspiration, process, and outcomes.",
    imageUrl: "/art_2.JPG",
    categories: ["UI/UX", "Branding", "Motion Design"],
    links: [
      { url: "https://www.artsy.net/artist/georgia-witchel", text: "Here's my Artsy" },
    ]
  }
];

const Grid = MuiGrid as any; // Temporary fix for TypeScript errors

const Creative: React.FC = () => {
  return (
    <Box sx={{ 
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 0 200px 0',
      boxSizing: 'border-box',
    }}>
      <Box sx={{ 
        maxWidth: '1400px',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        margin: '0 auto',
      }}>
        <Box sx={{ textAlign: 'left', maxWidth: '1400px', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '1.75rem' }}>
            Creative Expression
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            I do everything creative. I sew, I paint, I draw, I take photos, I make art, I make videos, I make websites, I make apps, I write, I sculpt, I thorw cermaics, I knit
            I make board games... etc. If you want to see more, you can check out my Substack or my instgram{' '}
            <Box
              component="a"
              href="https://www.instagram.com/gorgagarad/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#E57373',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                  color: '#3C2A21'
                }
              }}
            >
              @gorgagard
            </Box>.
          </Typography>
        </Box>

        <Grid container spacing={6} sx={{ width: '100%', margin: 0 }}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id} sx={{ 
              width: { xs: '100%', md: 'calc(33.333% - 32px)' },
              flex: { xs: '0 0 100%', md: '0 0 calc(33.333% - 32px)' }
            }}>
              <Card 
                sx={{ 
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '16px',
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={project.imageUrl}
                  alt={project.title}
                  sx={{ borderRadius: '8px' }}
                />
                <CardContent sx={{ 
                  padding: '24px 16px 16px',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Typography variant="h4" component="h2" gutterBottom sx={{
                    fontSize: '1.5rem',
                    lineHeight: 1.2,
                    wordWrap: 'break-word'
                  }}>
                    {project.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{
                    fontSize: '1rem',
                    lineHeight: 1.4,
                    wordWrap: 'break-word',
                    flexGrow: 1
                  }}>
                    {project.shortDescription}
                  </Typography>
                  {project.links && project.links.length > 0 && (
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      mt: 2
                    }}>
                      {project.links.map((link, index) => (
                        <Box 
                          key={index}
                          component="a" 
                          href={link.url}
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
                          {link.text}
                        </Box>
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Creative; 