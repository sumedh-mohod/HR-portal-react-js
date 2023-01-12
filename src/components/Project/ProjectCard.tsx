import React from 'react'
import { Grid, Typography, Paper, Box } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/screens/ProjectList";

const ProjectCard = ({ project, handleProjectEditClick,handleProjectAddClick }: { project: any, handleProjectEditClick: any,handleProjectAddClick:any }) => {

    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            {project?.map((project: any, index: number) => (
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
            ))}
        </Grid>
    )
}

export default ProjectCard