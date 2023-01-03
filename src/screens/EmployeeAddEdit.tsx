import React from 'react'
import AddEmployee from '../components/AddEmployee';
import { useParams, useLocation } from "react-router-dom";

const EmployeeAddEdit = () => {
    let params = useParams();
    let location = useLocation();

    const { opration } = params;
    return <>{opration === "add" ? <AddEmployee /> : ""}</>;
}

export default EmployeeAddEdit