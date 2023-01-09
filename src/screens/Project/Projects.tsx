import React, { useEffect, useState, useMemo } from "react";
import { Grid, Typography, Paper, Box, TextField } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { styles } from "../../styles/screens/ProjectList";
import ProjectCard from "../../components/project/ProjectCard";
import Button from "@mui/material/Button";
import { globalStyles } from "../../styles/global";
import CustomizationButtons from "../../components/higherorder/CustomizationButtons";
import Paginations from "../../components/higherorder/Paginations";
import ProjectList from "../../components/project/ProjectList";

const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "Sr",
        minWidth: 50,
        width: 100,
        hide: false,
    },
    {
        field: "name",
        headerName: "Project Name",
        width: 300,
        minWidth: 200,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "Start_date",
        headerName: "Start Date",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "End_date",
        headerName: "End Date",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "Team_size",
        headerName: "Team Size",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
];

let PageSize = 5;

const Projects = () => {

    const projects = [
        {
            id: 1,
            name: "Project Name 1",
            Start_date: "Octomber 2, 2023",
            End_date: "Octomber 20, 2023",
            Team_size: 25
        },
        {
            id: 2,
            name: "Project Name 2",
            Start_date: "Octomber 2, 2023",
            End_date: "Octomber 20, 2023",
            Team_size: 25
        },
        {
            id: 3,
            name: "Project Name 3",
            Start_date: "Octomber 2, 2023",
            End_date: "Octomber 20, 2023",
            Team_size: 25
        },
        {
            id: 4,
            name: "Project Name 4",
            Start_date: "Octomber 2, 2023",
            End_date: "Octomber 20, 2023",
            Team_size: 25
        },
        {
            id: 5,
            name: "Project Name 5",
            Start_date: "Octomber 2, 2023",
            End_date: "Octomber 20, 2023",
            Team_size: 25
        },
    ]
    const navigate = useNavigate();

    const [designView, setDesignView] = useState("grid");
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [showColumns, setShowColumns] = useState(columns);
    const [currentPage, setCurrentPage] = useState(1);

    const openDropDown = Boolean(anchorEl);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return projects?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const handleProjectsAddClick = () => {
        navigate("/projects/add");
    };

    const handleProjectEditClick = (projects: any) => {
        navigate("/projects/edit", {
            state: { projects },
        });
    };

    const handleClickDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseDropDown = () => {
        setAnchorEl(null);
    };

    const handleAddColumn = (item: any) => {
        setShowColumns((prevEl) => {
            let ind = prevEl.findIndex((value) => value.field === item.field);
            showColumns[ind].hide = false;
            return [...prevEl];
        });
    };

    const handleRemoveColumn = (item: any) => {
        setShowColumns((prevEl) => {
            let ind = prevEl.findIndex((value) => value.field === item.field);
            showColumns[ind].hide = true;
            return [...prevEl];
        });
    };

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value);
    };


    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* box for search bar and project */}
            <Box {...styles.projectTitleBox}>
                <Typography variant="h5" {...globalStyles.moduleTitle}>
                    Projects
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={handleProjectsAddClick}
                        startIcon={<AddIcon />}
                        sx={{
                            background: "#F58634",
                            borderRadius: "5px",
                            mr: "10px",
                            cursor: "pointer",
                            fontSize: "14px",
                            textTransform: "inherit",
                        }}
                    >
                        Add
                    </Button>

                    <CustomizationButtons
                        setDesignView={setDesignView}
                        handleClickDropDown={handleClickDropDown}
                        handleCloseDropDown={handleCloseDropDown}
                        handleAddColumn={handleAddColumn}
                        handleRemoveColumn={handleRemoveColumn}
                        designView={designView}
                        openDropDown={openDropDown}
                        anchorEl={anchorEl}
                        showColumns={showColumns}
                    />

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
            {/* <Grid container spacing={2} sx={{ mt: 1, display: "flex" }}>
                {projects?.map((project: any, index: any) => (
                    <ProjectListCard project={project} index={index} handleProjectEditClick={handleProjectEditClick} />
                ))}
            </Grid> */}
            <Box sx={{ flexGrow: 1 }}>
                {designView === "list" ? (
                    <ProjectList showColumns={showColumns} rows={currentTableData} />
                ) : (
                    <ProjectCard
                        project={currentTableData}
                        handleProjectEditClick={handleProjectEditClick}
                    />
                )}
            </Box>
            <Paginations handlePageChange={handlePageChange} />
        </Box>
    );
};

export default Projects;
