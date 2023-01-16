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
  // return <>{opration === "add" ? <LeavePolicy /> : <EditCompany />}</>;
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
          return null
        case "holiday":
          return null
        case "master":
          return null
        default:
      }
    })()}
  </>

};

export default CompanyAddEdit;
