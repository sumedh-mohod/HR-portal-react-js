import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AddAssets from "components/Assests/AddAssets";
import AssetsDetails from "components/Assests/AssetsDetails";

const AssestsAddEdit = () => {
  let params = useParams();
  let location = useLocation();

  const { opration } = params;
  return <>{opration === "add" ? <AddAssets /> : <AssetsDetails />}</>;
};

export default AssestsAddEdit;
