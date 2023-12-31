import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AddCompany from "components/Company/AddCompany";
import EditCompany from "components/Company/EditCompany";
import LeavePolicy from "screens/Company/LeavePolicy";
import OrganizationlData from "screens/Company/OrganisationalData";
import CompanyMaster from "screens/Company/CompanyMaster";
import Hollidays from "screens/Company/Hollidays";
import CompanyDetailsCard from "components/Company/CompanyDetailsCard";

const Operations = () => {
  let params = useParams();
  let location = useLocation();
  console.log("location in opration", location);
  const { opration } = params;

  switch (opration) {
    case "add":
      return <AddCompany />;
    case "edit":
      return <EditCompany data={location?.state} />;
    case "details":
      return <CompanyDetailsCard data={location?.state?.company} />;
    case "leavepolicy":
      return <LeavePolicy />;
    case "organisationaldata":
      return <OrganizationlData />;
    case "holiday":
      return <Hollidays />;
    case "master":
      return <CompanyMaster />;
    default:
      return null;
  }
};

export default Operations;
