import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AddAssets from "components/Assets/AddAssets";
import AssetsDetails from "components/Assets/AssetsDetails";
import AssetsEdit from "components/Assets/AssetsEdit";
import AssetsMastersList from "./AssetsMasters";
import AssetsMaster from "components/Assets/AssetsMaster";

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
      return <AssetsMastersList />;
    case "assetsmasteradd":
      return <AssetsMaster />;
    default:
      return null;
  }
};

export default AssestsAddEdit;
