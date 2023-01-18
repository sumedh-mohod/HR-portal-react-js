import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AddCompany from "../../components/Company/AddCompany";
import EditCompany from "../../components/Company/EditCompany";
import LeavePolicy from "./LeavePolicy";
import OrganizationlData from "./OrganisationalData";
import Hollidays from "./Hollidays";

const Operations = () => {
  let params = useParams();

  const { opration } = params;

  switch (opration) {
    case "add":
      return <AddCompany />;
    case "edit":
      return <EditCompany />;
    case "leavepolicy":
      return <LeavePolicy />;
    case "organisationaldata":
      return <OrganizationlData />;
    case "holiday":
      return <Hollidays />;
    case "master":
      return null;
    default:
      return null;
  }
};

export default Operations;
