import React from "react";
import AddCompany from "../../components/Company/AddCompany";
import EditCompany from "../../components/Company/EditCompany";

import { useParams, useLocation } from "react-router-dom";
import OrganisationalData from "./OrganisationalData";

const CompanyAddEdit = () => {
  let params = useParams();
  let location = useLocation();
  // console.log("company data ", location.state.company);

  const { opration } = params;
  return <>{
    opration === "add" ? <AddCompany /> : <OrganisationalData />}</>;
};

export default CompanyAddEdit;
