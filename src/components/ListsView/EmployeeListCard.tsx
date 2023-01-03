import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/screens/EmployeeList";

const EmployeeListCard = ({
  employee,
  index,
  handleEmployeeEditClick,
}: {
  employee: any;
  index: any;
  handleEmployeeEditClick: any;
}) => {
  return (
    <Grid item xs={12} md={3} lg={3}>
      <Paper
        elevation={3}
        onClick={() => handleEmployeeEditClick(employee)}
        {...styles.employeeCard}
        key={index}
      >
        <OrangeBitsIcon width={40} />
        <Typography variant="h5" gutterBottom {...styles.employeeName}>
          {employee.name}
        </Typography>
        <Box {...styles.employeeDescriptionBox}>
          <Typography {...styles.employeeDescription}>
            Employee id: {employee.EmployeeId}
          </Typography>
          <Typography {...styles.employeeDescription}>
            Designation: {employee.Designation}
          </Typography>
          <Typography {...styles.employeeDescription}>
            Technology: {employee.Technology}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default EmployeeListCard;
