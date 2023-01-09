import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Typography, Link } from "@mui/material";

function toTitleCase(str: any) {
  return str.replace(/\b\w+/g, function (s: any) {
    return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
  });
}

const Breadcrumb = () => {
  let location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="Breadcrumb" separator="›">
      {/* <Link color="inherit" component={RouterLink} to="/">
        Home
      </Link> */}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join(">")}`;

        return last ? (
          <Typography color="textPrimary" key={to}>
            {toTitleCase(value)}
          </Typography>
        ) : (
          <Link color="inherit" component={RouterLink} to={to} key={to}>
            {toTitleCase(value)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
