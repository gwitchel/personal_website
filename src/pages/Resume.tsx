import React from 'react';
import { Box, Typography, Paper, Divider, List, ListItem, ListItemText, Chip, Stack } from '@mui/material';
import { resumeData } from '../data/resume';

const Resume: React.FC = () => {
  return (
    <Box sx={{ 
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 0 200px 0',
      boxSizing: 'border-box',
    }}>
      <Box sx={{ 
        maxWidth: '1000px',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        margin: '0 auto',
      }}>
        {/* Education Section */}
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#E57373' }}>
            Education
          </Typography>
          <List>
            {resumeData.education.map((edu, index) => (
              <ListItem 
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2
                }}
              >
                <ListItemText
                  primary={edu.degree}
                  secondary={
                    <>
                      <Typography component="span" variant="body1" color="text.primary">
                        {edu.school}
                      </Typography>
                      {edu.areaOfStudy && (
                        <>
                          <br />
                          <Typography component="span" variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                            {edu.areaOfStudy}
                          </Typography>
                        </>
                      )}
                    </>
                  }
                />
                <Box sx={{ 
                  textAlign: { xs: 'left', sm: 'right' },
                  minWidth: { sm: '200px' }
                }}>
                  <Typography variant="body2" color="text.secondary">
                    {edu.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.years}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Work Experience Section */}
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#E57373' }}>
            Work Experience
          </Typography>
          <List>
            {resumeData.experience.map((exp, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={exp.title}
                    secondary={
                      <>
                        <Typography component="span" variant="body1" color="text.primary">
                          {exp.company}
                        </Typography>
                      </>
                    }
                  />
                  <Box sx={{ 
                    textAlign: { xs: 'left', sm: 'right' },
                    minWidth: { sm: '200px' }
                  }}>
                    <Typography variant="body2" color="text.secondary">
                      {exp.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.years}
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <ListItemText
                    secondary={
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {exp.responsibilities.map((resp, i) => (
                          <React.Fragment key={i}>
                            • {resp}
                            <br />
                          </React.Fragment>
                        ))}
                      </Typography>
                    }
                  />
                </ListItem>
                {index < resumeData.experience.length - 1 && (
                  <Divider component="li" sx={{ my: 2 }} />
                )}
              </React.Fragment>
            ))}
          </List>
        </Paper>

        {/* Skills and Certifications Section */}
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#E57373' }}>
            Skills and Certifications
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Certifications
            </Typography>
            <List>
              {resumeData.skills.certifications.map((cert, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={cert.name}
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="text.secondary">
                          {cert.issuer} - {cert.year}
                        </Typography>
                        {cert.description && (
                          <>
                            <br />
                            <Typography component="span" variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                              {cert.description}
                            </Typography>
                          </>
                        )}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Technical Skills
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {resumeData.skills.technical.map((skill, index) => (
                <Chip key={index} label={skill} sx={{ m: 0.5 }} />
              ))}
            </Stack>
          </Box>
        </Paper>

        {/* Awards and Leadership Section */}
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#E57373' }}>
            Awards and Leadership
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Leadership & Community Involvement
            </Typography>
            <List>
              {resumeData.skills.leadership.map((role, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${role.role} - ${role.organization}`}
                    secondary={
                      role.description && (
                        <Typography component="span" variant="body2" color="text.secondary">
                          {role.description}
                        </Typography>
                      )
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Awards & Achievements
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {resumeData.skills.awards.map((award, index) => (
                <Chip
                  key={index}
                  label={
                    <Box>
                      <Typography variant="body2" component="span" sx={{ fontWeight: 'bold' }}>
                        {award.name}
                      </Typography>
                      {award.description && (
                        <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
                          {award.description}
                        </Typography>
                      )}
                    </Box>
                  }
                  sx={{ 
                    m: 0.5,
                    height: 'auto',
                    '& .MuiChip-label': {
                      whiteSpace: 'normal',
                      padding: '8px 12px'
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Resume; 