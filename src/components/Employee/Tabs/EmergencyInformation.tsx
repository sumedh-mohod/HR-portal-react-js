import React from "react";
import { Box, Typography, Card, Grid, Divider } from "@mui/material";
import EmergencyInformationCard from "./EmergencyInformationCard";
const EmergencyInformation = () => {
  return (
    <Box>
      <EmergencyInformationCard title={1} />
      <EmergencyInformationCard title={2}/>
    </Box>
  );
};

export default EmergencyInformation;
