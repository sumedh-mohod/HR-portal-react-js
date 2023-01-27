import React from "react";
import { Box } from "@mui/material";
import EmergencyInformationCard from "components/Employee/Tabs/EmergencyInformationCard";
const EmergencyInformation = () => {
  return (
    <Box>
      <EmergencyInformationCard title={1} />
      <EmergencyInformationCard title={2} />
    </Box>
  );
};

export default EmergencyInformation;
