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
    title: "USA Ice Climbing",
    shortDescription: "I was the first member of the USA youth ice climbing team, 3x national champion, and placed 4th at worlds.",
    fullDescription: "Detailed description of the marathon experience, including training process, race day experience, and personal achievements. This can include specific times, challenges overcome, and lessons learned.",
    imageUrl: "/ice.PNG",
    categories: ["Running", "Endurance", "Marathon"],
    links: [
      { url: "https://www.outsideonline.com/culture/books-media/why-you-should-know-women-mixed-climbing/", text: "Read about me in Outside Magazine" },
      { url: "https://www.youtube.com/watch?v=UrBuKALQtxI&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fsca_esv%3Dd20ad1224ee610a9%26rlz%3D1C5CHFA_enUS1145US1145%26sxsrf%3DAHTn8zrVq6GOvHl_1zUBBewpFlez1CAawg%3A17460&source_ve_path=MjM4NTE", text: "Watch my Adventure Pro special" }
    ]
  },
  {
    id: 2,
    title: "Backcountry Skiing",
    shortDescription: "I'm an avid backcountry skier, and have skied all over the world, from Argentina, to Canada, to Europe. I'm also avalanche certified and have my NREMT",
    fullDescription: "Detailed description of the swimming competition, including preparation, competition details, and results. This can include specific events, times, and personal achievements.",
    imageUrl: "/ski_1.jpg",
    categories: ["Swimming", "Competition", "Championship"],
    links: [
      { url: "https://coloradosun.com/2025/02/02/wolf-creek-ski-area-davey-pitcher/", text: "Read About my Family history in Skiing" },
    ]
  },
  {
    id: 3,
    title: "Enduro Racing",
    shortDescription: "My new hobby is enduro racing. I've done 3 24 hour races in the past 2 years and am not stopping anytime soon.",
    fullDescription: "Detailed description of the team sports experience, including leadership role, team achievements, and personal growth. This can include specific games, statistics, and team dynamics.",
    imageUrl: "/end_1.jpg",
    categories: ["Team Sports", "Leadership", "Basketball"],
    links: [
      { url: "https://24hoursoflemons.com/", text: "Read about 24 Hours of Lemons" }
    ]
  }
];

const Grid = MuiGrid as any; // Temporary fix for TypeScript errors

const Athletic: React.FC = () => {
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
        maxWidth: '1400px',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        margin: '0 auto',
      }}>
        <Box sx={{ textAlign: 'left', maxWidth: '1400px', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '1.75rem' }}>
            Athletic Journey
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            I've been an athlete my whole life. My dad was a national champion swimmer, he was a national champion. 
            My mom came from a family of professional skiers, raising me at the base of our family run{' '}
            <Box
              component="a"
              href="https://www.sugarbush.com/"
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
              ski area
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

export default Athletic; 