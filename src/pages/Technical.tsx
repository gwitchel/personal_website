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
    title: "Ouiza AI",
    shortDescription: "I started a company. We're building developer tools that utilize virtual environments to create synthetic data, enabling the training and validation of medical robots 32 times faster than traditional machine learning methods.",
    fullDescription: "At Ouiza, we provide developer tools that utilize virtual environments to create synthetic data, enabling the training and validation of medical robots 32 times faster than traditional machine learning methods. Developers simply upload their robotic file to get started. Our platform then uses synthetic data from virtual environments to: (1) enable unit testing of robotic systems, (2) generate machine learning protocols for robotic tasks, and (3) verify anatomical interactions. We achieve this by utilizing anatomically accurate virtual environments and leveraging a given robot's capabilities to simulate medical tasks, such as blood draws or cyst drainage, in virtual environments. Our platform allows medical robotics developers to reduce data spend by 95%. Currently, dataset creation is the biggest bottleneck in the progress of medical robotics. Real-world clinical data is scarce, sensitive, and often inaccessible, especially for edge cases. In some domains, such as X-ray-guided surgery, the datasets simply do not exist. Robotics companies have described the challenge that surgical tasks can't be unit tested repeatedly on real patients, the way autonomous vehicles can be tested on roads. The synthetic data market is well-positioned to grow — companies like OpenAI and Applied Intuition are relying increasingly on synthetic data to train their models. The global synthetic data market is projected to grow at a 45.7% CAGR, driven by the need for scalable, cost-effective alternatives to manual data labeling. Healthcare remains one of the most critical yet overlooked sectors for synthetic data, given the scarcity, sensitivity, and inaccessibility of real clinical data. A Johns Hopkins study showed that AI models trained on synthetic data can outperform those trained on real clinical data, validating this approach. We are first movers applying simulation-based training to soft-body medical robots.",
    imageUrl: "/ouiza_1.png",
    categories: ["React", "Node.js", "MongoDB"],
    links: [
      { url: "https://www.ouiza.ai/", text: "Explore Ouiza AI" },
      { url: "https://youtu.be/e5BiH2BIFbw", text: "Watch Demo" },
    ]
  },
  {
    id: 2,
    title: "Cliinica",
    shortDescription: "I developed and released a HIPPA Compliant patient intake and tracking software that currently used by the harborview medical center to track over 300 patients",
    fullDescription: "Cliinica is a comprehensive software solution designed to optimize time management and improve healthcare for vulnerable patients by automating the patient intake process and real-time scheduling review. It improves efficiency, reduces referral loss, and uses AI technology to enable innovative patient follow-up by streamlining key patient journey processes. The software also operates between gaps in existing systems, allowing doctors to provide care pre-operation, during operation, and post-operation, leading to higher post-operative success rates and better documentation of cases. Cliinica's approach enhances workflow efficiency, broadens access to medical services, and ultimately improves patient outcomes.",
    imageUrl: "/cliinica_2.png",
    categories: ["Python", "TensorFlow", "Data Science"],
    links: [
      { url: "https://bioe.uw.edu/bioengineering-teams-shine-at-the-2025-science-technology-showcase/", text: "We were featured in SEBA" },
      { url: "https://www.cliinica.com/", text: "Download Cliinica" },
    ]
  },
  {
    id: 3,
    title: "Py-Bond Library",
    shortDescription: "I wrote a python library that analyzes the presentation of pi-bonds in proteins and allows for the analysis of swapping aromatic rings in proteins. I used it to analyze the effects of tryptophan on the stability of CFTR, published a paper, and will be releasing the library soon.",
    fullDescription: "Designed and implemented a scalable cloud infrastructure using AWS services. Set up CI/CD pipelines, containerized applications with Docker, and implemented infrastructure as code using Terraform. The project demonstrates cloud architecture expertise and DevOps practices.",
    imageUrl: "/pi-bond.png",
    categories: ["AWS", "Docker", "Terraform"],
    links: [
      { url: "https://www.researchgate.net/publication/391217525_Introducing_Tryptophan_to_variants_of_CFTR_to_increase_stability#fullTextFileContent", text: "Read the paper" },
    ]
  }
];

const Grid = MuiGrid as any; // Temporary fix for TypeScript errors

const Technical: React.FC = () => {
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
        <Box sx={{ textAlign: 'left', maxWidth: '1200px', mb: 4, px: { xs: 2, md: 0 } }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '1.75rem' }}>
            Technical Innovation
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            With an undergrad in Computer Science and a Masters in Bioengineering,
            I've dedicated my life to building software that helps people get access to high quality healthcare.
            I'm incredibly grateful to wake up every day and absolutely love what I do.
          </Typography>
        </Box>

        <Grid container spacing={6} sx={{ width: '100%', margin: 0 }}>
          {projects.map((project) => (
            <Grid component="div" item xs={12} md={4} key={project.id} sx={{ 
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

export default Technical; 