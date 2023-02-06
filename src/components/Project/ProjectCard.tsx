import React from "react";
import { Grid, Typography, Paper, Box, Card } from "@mui/material";
import OrangeBitsIcon from "components/Icons/OrangeBitsIcon";
import { styles } from "styles/screens/ProjectList";

const ProjectCard = ({
  project,
  handleProjectEditClick,
  handleProjectAddClick,
}: {
  project: any;
  handleProjectEditClick: any;
  handleProjectAddClick: any;
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {project?.map((project: any, index: number) => (
        <Grid item xs={12} md={3} lg={3}>
          <Card
            elevation={3}
            onClick={() => handleProjectEditClick(project)}
            {...styles.projectCard}
            key={index}
          >
            <OrangeBitsIcon width={40} />
            <Typography variant="h5" gutterBottom {...styles.projectName}>
              {project.project_name}
            </Typography>
            <Box {...styles.projectDescriptionBox}>
              <Box {...styles.projectDescriptionTitleBox}>
                <Typography {...styles.projectDescriptionTitle}>Start Date: </Typography>
                <Typography {...styles.projectDescription}> {project.Start_date}</Typography>
              </Box>
              <Box {...styles.projectDescriptionTitleBox}>
                <Typography {...styles.projectDescriptionTitle}>End Date: </Typography>
                <Typography {...styles.projectDescription}> {project.End_date}</Typography>
              </Box>
              <Box {...styles.projectDescriptionTitleBox}>
                <Typography {...styles.projectDescriptionTitle}>Team Size: </Typography>
                <Typography {...styles.projectDescription}> {project.Team_size}</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectCard;
