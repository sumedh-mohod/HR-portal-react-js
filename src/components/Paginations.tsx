import React from 'react'
import { Grid, Typography, Paper, Box, Card } from "@mui/material";
import Pagination from "@mui/material/Pagination";
const Paginations = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"flex-end",margin:"15px",marginTop:"50px"}}>
        <Pagination
          count={2}
          showFirstButton
          showLastButton
          variant="outlined"
          shape="rounded"
          sx={
            { 
            //   "& .MuiPaginationItem": {
            //     color: "#1C1B1F",
            // background: "#D9D9D9",
            //   },
              "& .Mui-selected": {
                background: "#F58634",
                color: "#FFFFFF",
              },
              
            }
          }
        />
      </Box>
  )
}

export default Paginations
