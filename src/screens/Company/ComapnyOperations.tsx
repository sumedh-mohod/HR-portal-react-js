import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AddCompany from "../../components/Company/AddCompany";
import EditCompany from "../../components/Company/EditCompany";
import LeavePolicy from "./LeavePolicy";
import OrganizationlData from "./OrganisationalData";

const ComapnyOperations = () => {
  let params = useParams();

  const { opration } = params;
  return <>

    {(() => {
      switch (opration) {
        case "add":
          return (<AddCompany />)
        case "edit":
          return (<EditCompany />)
        case "leavepolicy":
          return (<LeavePolicy />)
        case "organisationaldata":
          return (<OrganizationlData />)
        case "holiday":
          return null
        case "master":
          return null
        default:
      }
    })()}
  </>
};

export default ComapnyOperations;
