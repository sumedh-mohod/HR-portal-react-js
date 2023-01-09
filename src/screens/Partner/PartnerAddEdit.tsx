import React from "react";
import AddPartner from "../../components/partner/AddPartner";

import { useParams, useLocation } from "react-router-dom";

const PartnerAddEdit = () => {
  let params = useParams();
  let location = useLocation();

  const { opration } = params;
  return <>{opration === "add" ? <AddPartner /> : ""}</>;
};

export default PartnerAddEdit;
