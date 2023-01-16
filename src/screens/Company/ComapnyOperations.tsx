import React from "react";
import AddCompany from "../../components/Company/AddCompany";
import EditCompany from "../../components/Company/EditCompany";

import { useParams, useLocation } from "react-router-dom";
import LeavePolicy from "./LeavePolicy";

const ComapnyOperations = () => {
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
      return null;
    case "holiday":
      return null;
    case "master":
      return null;
    default:
      return null;
  }
};

export default ComapnyOperations;
