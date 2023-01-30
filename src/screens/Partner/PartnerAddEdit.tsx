import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AddPartner from "components/Partner/AddPartner";

const PartnerAddEdit = () => {
  let params = useParams();
  let location = useLocation();

  const { opration } = params;
  return <>{opration === "add" ? <AddPartner /> : ""}</>;
};

export default PartnerAddEdit;
