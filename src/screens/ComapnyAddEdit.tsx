import React from "react";
import AddCompany from "../components/AddCompany";
import EditCompany from "../components/EditCompany";

import { useParams } from "react-router-dom";

const CompanyAddEdit = () => {
  let params = useParams();
  const { opration } = params;
  return <>{opration === "add" ? <AddCompany /> : <EditCompany />}</>;
};

export default CompanyAddEdit;
