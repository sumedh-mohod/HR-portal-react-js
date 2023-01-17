import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box,Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import ProjectCard from "../../components/Project/ProjectCard";
import ProjectList from "../../components/Project/ProjectList";
import CustomizationButtons from "../../components/HigherOrder/CustomizationButtons";
import Loader from "../../components/HigherOrder/Loader";
import Search from "../../components/HigherOrder/Search";
import Paginations from "../../components/HigherOrder/Paginations";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProjects } from "../../store/reducers/projects/projects";
import { globalStyles } from "../../styles/global";
import { styles } from "../../styles/screens/ProjectList";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Sr",
    minWidth: 50,
    width: 100,
    hide: false,
  },
  {
    field: "project_name",
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [designView, setDesignView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showColumns, setShowColumns] = useState(columns);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [currentData, setCurrentData] = useState<any>([]);
  const openDropDown = Boolean(anchorEl);

  const projectsStore = useAppSelector((state) => state.projects);
  const { isLoadingRequest, projects } = projectsStore;

  useEffect(() => {
    dispatch(getProjects())
      .unwrap()
      .then((response: any) => {})
      .catch((error) => {});
  }, [dispatch]);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const DataSliced = projects?.slice(firstPageIndex, lastPageIndex);
    setCurrentData(DataSliced);
  }, [currentPage, isLoadingRequest]);

  const handleProjectAddClick = () => {
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
  // search
  const handleSearchChange = (event: any) => {
    const SearchText = event.target.value;
    setSearchText(SearchText);

    if (SearchText.length > 0) {
      const newFilter = projects.filter((value: any) =>
        value.project_name.toLowerCase().includes(SearchText.toLowerCase())
      );
      setCurrentData(newFilter);
    } else {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;

      const DataSliced = projects?.slice(firstPageIndex, lastPageIndex);
      setCurrentData(DataSliced);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Loader isLoading={isLoadingRequest} />
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
            onClick={handleProjectAddClick}
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

          <Search
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            placeholder={"Projects..."}
          />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {designView === "list" ? (
          <ProjectList
            // handleProjectAddClick={handleProjectAddClick}
            showColumns={showColumns?.length >= 0 ? showColumns : []}
            rows={
              currentData !== undefined && currentData?.length >= 0
                ? currentData
                : []
            }
          />
        ) : (
          <ProjectCard
            project={currentData}
            handleProjectEditClick={handleProjectEditClick}
            handleProjectAddClick={handleProjectAddClick}
          />
        )}
      </Box>
      <Paginations handlePageChange={handlePageChange} />
    </Box>
  );
};

export default Projects;
