import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import { globalStyles } from "../../../styles/global";
import { styles } from "../../../styles/components/addCompany";
import Grid from "@mui/material/Grid/Grid";
import Card from "@mui/material/Card/Card";
import DeleteIcon from "../../Icons/DeleteIcon";
import {
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrganizationalCard = ({
  organasationlData,
  handleViewOpen,
  handleCardData
}: {
  organasationlData: any;
  handleViewOpen: any;
  handleCardData:any;
}) => {
 const handleDelet =()=>{
  console.log("delet click")
 }

  return (
    <Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {organasationlData?.map((info: any, index: number) => (
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card
            key={index}
              variant="outlined"
              sx={{
                height: "auto",
                background: "#FFFFFF",
                border: "1px solid #DFDFDF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "5px",
                p: 2,
                mt: 2,
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="center" sx={{pt:3}}>
                {info?.mainIcon}
              </Box>

              <Box
                sx={{
                  borderTop: "1px solid #C5C7CD",
                  mt: 5,
                  pt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  {info?.subIcon}
                  <Typography variant="h6" sx={{ fontSize: "14px", ml: 1,  cursor:"pointer" }}  onClick={()=>{handleViewOpen();handleCardData(info.id)}}>
                    {info?.File_name}
                  </Typography>
                </Box>
                <Box sx={{cursor:"pointer"} }>
                  <DeleteIcon fill={"#D82A2A"}/>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OrganizationalCard;
