import React from "react";
import { Grid, Typography, Paper, Box, Card } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/screens/Employee";
import { globalStyles } from "../../styles/global";
import AddIcon from "@mui/icons-material/Add";
const EmployeeCard = ({
  employee,
  index,
  handleEmployeeEditClick,
  handleEmployeeAddClick,
}: {
  employee: any;
  index: any;
  handleEmployeeEditClick: any;
  handleEmployeeAddClick: any;
}) => {
  return (
    <Box
      sx={{
        minWidth: "90vw",
        maxWidth: "90vw",
        margin: 0,
      }}
    >
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {employee?.map((employee: any, index: number) => (
          <Grid item xs={12} md={3} lg={3}>
            <Card
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
                  {employee.EmployeeId}
                </Typography>
                <Typography {...styles.employeeDescription}>
                  {employee.Designation}
                </Typography>
                <Typography {...styles.employeeDescription}>
                  {employee.Technology}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} md={3} lg={3}>
          <Paper
            elevation={3}
            onClick={handleEmployeeAddClick}
            {...styles.addEmployeeCard}
          >
            <AddIcon fontSize="large" sx={{ pr: 2 }} />
            <Typography
              {...globalStyles.moduleTitle}
              {...styles.addEmployeeIcon}
            >
              Add Employee
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeCard;
