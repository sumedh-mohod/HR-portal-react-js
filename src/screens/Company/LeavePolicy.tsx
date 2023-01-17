import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { globalStyles } from "../../styles/global";
import { styles } from "../../styles/screens/LeavePolicy";
import { GridColDef } from '@mui/x-data-grid'
import UploadLeavePolicy from '../../components/Company/LeavePolicy/UploadLeavePolicy';
import LeaveCategoryTable from '../../components/Company/LeavePolicy/LeaveCategoryTable';
import LeavePolicyCard from '../../components/Company/LeavePolicy/LeavePolicyCard';
import LeavePolicyModel from "../../components/Company/LeavePolicy/LeavePolicyModel";

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
  {
    id: 1,
    leave_type: "Paid Leave",
    description: "Only 1 in a month",
    days: 1,
  },
  {
    id: 2,
    leave_type: "Unpaid Leave",
    description: "Only 4 in a month",
    days: 4,
  },
  {
    id: 3,
    leave_type: "Casual Leave",
    description: "Only 4 in a month",
    days: 4,
  },
  {
    id: 4,
    leave_type: "Planned Leave",
    description: "Only 4 in a month",
    days: 4,
  },
  {
    id: 5,
    leave_type: "Unplaned Leave",
    description: "Only 4 in a month",
    days: 4,
  },
];

const LeavePolicy = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [viewOpen, setViewOpen] = React.useState(false);
  const handleViewOpen = () => setViewOpen(true);
  const handleViewClose = () => setViewOpen(false);

  return (
    <Box>
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Leave Policy
        </Typography>
      </Box>
      <LeavePolicyCard handleViewOpen={handleViewOpen} />
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Leave Category
        </Typography>
      </Box>
      <LeaveCategoryTable rows={rows} columns={columns} handleOpen={handleOpen} open={open} />
      <UploadLeavePolicy handleOpen={handleOpen} handleClose={handleClose} open={open} />
      <LeavePolicyModel handleOpen={handleViewOpen} handleClose={handleViewClose} open={viewOpen} />
    </Box>
  )
}

export default LeavePolicy;
