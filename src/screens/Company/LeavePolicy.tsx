import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { globalStyles } from '../../styles/global';
import { styles } from "../../styles/screens/LeavePolicy";
import Grid from '@mui/material/Grid/Grid'
import Card from '@mui/material/Card/Card'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button'
import AddIcon from "@mui/icons-material/Add";
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import UploadLeavePolicy from '../../components/Company/LeavePolicy/UploadLeavePolicy';

const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "Sr",
        minWidth: 50,
        width: 100,
        hide: false,
    },
    {
        field: "leave_type",
        headerName: "Leave Type",
        width: 300,
        minWidth: 200,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "description",
        headerName: "Description",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "days",
        headerName: "Days",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
];

const rows = [
    { id: 1, leave_type: 'Paid Leave', description: "Only 1 in a month", days: 1 },
    { id: 2, leave_type: 'Unpaid Leave', description: "Only 4 in a month", days: 4 },
    { id: 3, leave_type: 'Casual Leave', description: "Only 4 in a month", days: 4 },
    { id: 4, leave_type: 'Planned Leave', description: "Only 4 in a month", days: 4 },
    { id: 5, leave_type: 'Unplaned Leave', description: "Only 4 in a month", days: 4 },
];

const LeavePolicy = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box>
            <Box {...styles.parentBox}>
                <Typography {...globalStyles.moduleTitle} variant="h5">
                    Leave Policy
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <Card variant="outlined"
                        onClick={handleOpen}
                        {...styles.leavePolicyCard}
                    >
                        <Grid item lg={12}
                            container
                            direction="row"
                            alignItems="center"
                            justifyContent="flex-end"
                        >
                            <Box
                                {...styles.deleteIconBox}
                            >
                                <DeleteOutlineIcon
                                    fontSize='large'
                                    sx={{ color: "white" }}
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={12}
                            container
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <PictureAsPdfIcon
                                sx={{ color: "#F24A4A", fontSize: '45px', mt: 3 }}
                            />
                        </Grid>
                        <Grid item lg={12}

                        >
                            <Box
                                sx={{
                                    borderTop: "1px solid #C5C7CD",
                                    mt: 5,
                                    pt: 2,
                                    display: "flex"
                                }}
                            >
                                <PictureAsPdfIcon
                                    fontSize='small'
                                    sx={{ color: "#F24A4A", }}
                                />
                                <Typography variant="h6"
                                    sx={{ fontSize: "14px", ml: 1 }}
                                >
                                    Leave Policy.PDF
                                </Typography>
                            </Box>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            <Box {...styles.parentBox}>
                <Typography {...globalStyles.moduleTitle} variant="h5">
                    Leave Category
                </Typography>
            </Box>
            <Card sx={{ p: 3 }}>
                <Grid container spacing={2}>
                    <Grid item lg={11}>
                        <DataGrid
                            sx={{
                                width: "100%",
                                borderRadius: "0",

                                ".MuiDataGrid-columnSeparator": {
                                    display: "none",
                                },
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: " #F4F5F6",
                                },
                                ".MuiDataGrid-row": {
                                    borderBottom: "none"
                                }
                            }}
                            getRowId={(row) => row.id}
                            autoHeight={true}
                            rows={rows}
                            columns={columns}
                            hideFooterPagination={true}
                            hideFooter={true}
                        />
                    </Grid>
                    <Grid item lg={1}>
                        <Button
                            variant="contained"
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
                    </Grid>
                </Grid>

            </Card>
            <UploadLeavePolicy handleOpen={handleOpen} handleClose={handleClose} open={open} />
        </Box>
    )
}

export default LeavePolicy