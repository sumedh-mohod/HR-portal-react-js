import React, { useEffect, useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ListItem, List } from "@mui/material";

const OrganizationList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event: any, index: any) => {
    setSelectedIndex(index);
  };
  return (
    <List >
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
 
      >
        Certificates
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}

      >
        Information Security
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
   
      >
        Security Policies
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
      
      >
        Processes
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 4}
        onClick={(event) => handleListItemClick(event, 4)}
       
      >
        Do’s & Don’t
      </ListItem>
    </List>
  );
};

export default OrganizationList;
