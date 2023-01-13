import React from "react";
import AddCompany from "../../components/Company/AddCompany";
import EditCompany from "../../components/Company/EditCompany";

import { useParams, useLocation } from "react-router-dom";
import LeavePolicy from "./LeavePolicy";

const CompanyAddEdit = () => {
  let params = useParams();
  let location = useLocation();
  // console.log("company data ", location.state.company);

  const { opration } = params;
  return <>{opration === "add" ? <LeavePolicy /> : <EditCompany />}</>;
};

export default CompanyAddEdit;
