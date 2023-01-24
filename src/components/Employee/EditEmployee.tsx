import React, { useRef } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Card,
  Tab, Tabs
} from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { addEmployee } from "../../store/reducers/employee/employees";
import { globalStyles } from "../../styles/global";
import { styles } from "../../styles/components/editEmployee";
import BasicDetails from "./Tabs Pages/BasicDetails";
import EmploymentHistory from "./Tabs Pages/EmploymentHistory";
import DocumentsPersonal from "./Tabs Pages/DocumentsPersonal";
import DocumentsCompany from "./Tabs Pages/DocumentsCompany";
import ContactInformation from "./Tabs Pages/ContactInformation";
import EmergencyInformation from "./Tabs Pages/EmergencyInformation";


const EditEmployee = () => {
  const [value, setValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

  return (
    <Box>
        {/* header Box */}
        <Box {...styles.parentBox}>
          <Typography variant="h5" {...globalStyles.moduleTitle}>Edit Employee</Typography>
        </Box>
        {/* tabs started */}
        <Box >
        <Box>
          <Tabs
            {...styles.Tabs}
            value={value}
            onChange={handleTabChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { background: "#F58634" } }}
          >
            <Tab {...styles.Tab} label="Basic Details" {...a11yProps(0)} />
            <Tab {...styles.Tab} label="Employment History"{...a11yProps(1)}/>
            <Tab {...styles.Tab} label="Documents(Personal)" {...a11yProps(2)} />
            <Tab {...styles.Tab} label="Documents(Company)" {...a11yProps(3)} />
            <Tab {...styles.Tab} label="Contact Informations" {...a11yProps(4)} />
            <Tab {...styles.Tab} label="Emergency Informations" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}> 
        <BasicDetails/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmploymentHistory/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DocumentsPersonal/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <DocumentsCompany/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ContactInformation/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <EmergencyInformation />
        </TabPanel>
      </Box>
       
    </Box>
  );
};

export default EditEmployee;
