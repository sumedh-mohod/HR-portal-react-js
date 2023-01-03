import React from 'react'
import { Grid, Typography, Paper, Box } from "@mui/material";
import OrangeBitsIcon from "../components/Icons/OrangeBitsIcon";
import { styles } from "../styles/screens/ProjectList";

const ProjectListCard = ({ project, index, handleProjectEditClick }: { project: any, index: any, handleProjectEditClick: any }) => {

    return (
        <Grid item xs={12} md={3} lg={3}>
            <Paper
                elevation={3}
                onClick={() => handleProjectEditClick(project)}
                {...styles.projectCard}
                key={index}
            >
                <OrangeBitsIcon width={40} />
                <Typography variant="h5" gutterBottom {...styles.projectName}>
                    {project.name}
                </Typography>
                <Box {...styles.projectDescriptionBox}>
                    <Typography {...styles.projectDescription}>
                        Start Date: {project.Start_date}
                    </Typography>
                    <Typography {...styles.projectDescription}>
                        End Date: {project.End_date}
                    </Typography>
                    <Typography {...styles.projectDescription}>
                        Team Size: {project.Team_size}
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    )
}

export default ProjectListCard