import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AddAssets from "components/Assests/AddAssets";
import AssetsDetails from "components/Assests/AssetsDetails";
import AssetsMaster from "components/Assests/AssetsMaster";
import AssetsEdit from "components/Assests/AssetsEdit";

const AssestsAddEdit = () => {
  let params = useParams();
  let location = useLocation();

  const { opration } = params;
  // return <>{opration === "add" ? <AddAssets /> : <AssetsDetails />}</>;
  switch (opration) {
    case "add":
      return <AddAssets />;
    case "edit":
      return <AssetsEdit />;
    case "details":
      return <AssetsDetails />;
    case "assetsmaster":
      return <AssetsMaster />;
    default:
      return null;
  }
};

export default AssestsAddEdit;
