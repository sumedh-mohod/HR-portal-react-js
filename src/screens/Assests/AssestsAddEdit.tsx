import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AddAssets from "components/Assests/AddAssets";

const AssestsAddEdit = () => {
  let params = useParams();
  let location = useLocation();

  const { opration } = params;
  return <>{opration === "add" ? <AddAssets /> : "assests edit"}</>;
};

export default AssestsAddEdit;
