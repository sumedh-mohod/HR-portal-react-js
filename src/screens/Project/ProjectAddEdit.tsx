import React from "react";
import AddProject from "../../components/project/AddProject";

import { useParams, useLocation } from "react-router-dom";

const ProjectAddEdit = () => {
  let params = useParams();
  let location = useLocation();

  const { opration } = params;
  return <>{opration === "add" ? <AddProject /> : ""}</>;
};

export default ProjectAddEdit;
