import React from "react";
import AddVendor from "../../components/Vendor/AddVendor";
import EditVendor from "../../components/Vendor/EditVendor";

import { useParams, useLocation } from "react-router-dom";

const VendorAddEdit = () => {
    let params = useParams();
    let location = useLocation();

    const { opration } = params;
    return <>{opration === "add" ? <AddVendor /> : <EditVendor />}</>;
};

export default VendorAddEdit;
