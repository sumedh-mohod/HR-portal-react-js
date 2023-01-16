import React, { useEffect, useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ListItem, List } from "@mui/material";
import { stylesss } from "../../../styles/components/organizationList";
const OrganizationList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event: any, index: any) => {
    setSelectedIndex(index);
  };
  return (
    <List {...stylesss.List}>
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
        {...stylesss.ListItem}
      >
        Certificates
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
        {...stylesss.ListItem}
      >
        Information Security
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
        {...stylesss.ListItem}
      >
        Security Policies
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
        {...stylesss.ListItem}
      >
        Processes
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 4}
        onClick={(event) => handleListItemClick(event, 4)}
        {...stylesss.ListItem}
      >
        Do’s & Don’t
      </ListItem>
    </List>
  );
};

export default OrganizationList;
