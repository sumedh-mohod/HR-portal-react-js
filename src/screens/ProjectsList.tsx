import React, { useEffect } from "react";
import { Grid, Typography, Paper, Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/ProjectList";
import ProjectListCard from "../components/ProjectListCard";

const ProjectList = () => {

    const projects = [
        {
            name: "Project Name 1",
            Start_date: "Octomber 2, 2023",
            End_date: "Octomber 20, 2023",
            Team_size: 25
        },
        {
            name: "Project Name 2",
            Start_date: "Octomber 2, 2023",
            End_date: "Octomber 20, 2023",
            Team_size: 25
        },
        {
            name: "Project Name 3",
            Start_date: "Octomber 2, 2023",
            End_date: "Octomber 20, 2023",
            Team_size: 25
        },
    ]
    const navigate = useNavigate();

    const handleProjectClick = () => {
        navigate("/projects/add");
    };

    const handleProjectEditClick = (projects: any) => {
        navigate("/projects/edit", {
            state: { projects },
        });
    };

    return (
        <Container>
            {/* box for search bar and project */}
            <Box {...styles.projectTitleBox}>
                <Typography variant="h5">Projects</Typography>
                <Box>
                    <TextField
                        sx={{ ml: 2 }}
                        size="small"
                        id="standard-bare"
                        variant="outlined"
                        placeholder="Search..."
                        InputProps={{
                            startAdornment: <SearchIcon />,
                        }}
                    />
                </Box>
            </Box>
            <Grid container spacing={2} sx={{ mt: 1, display: "flex" }}>
                {projects?.map((project: any, index: any) => (
                    <ProjectListCard project={project} index={index} handleProjectEditClick={handleProjectEditClick} />
                ))}
                <Grid item xs={12} md={3} lg={3}>
                    {/* Card for add project */}
                    <Paper
                        elevation={3}
                        onClick={handleProjectClick}
                        {...styles.addProjectCard}
                    >
                        <AddIcon fontSize="large" sx={{ pr: 2 }} />
                        <Typography {...styles.addProjectIcon}>Add Projects</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProjectList;
