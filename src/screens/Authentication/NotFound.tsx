import { Box, Container, Typography } from "@mui/material";
import React from "react";

function NotFound() {
  return (
    <Container fixed>
      <Box
        sx={{
          width: "100%",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" gutterBottom component="div">
          404.
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          That's an error. The requested URL was not found on this server.
        </Typography>
      </Box>
    </Container>
  );
}

export default NotFound;
