import React from "react";
import { Grid, Typography, Box, Card } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/screens/Employee";

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
    <Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {employee?.map((employee: any, index: number) => (
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Card
              elevation={3}
              onClick={() => handleEmployeeEditClick(employee)}
              {...styles.employeeCard}
              key={index}
            >
              <OrangeBitsIcon width={40} />
              <Typography variant="h5" gutterBottom {...styles.employeeName}>
                {employee.employee_name}
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
      </Grid>
    </Box>
  );
};

export default EmployeeCard;
