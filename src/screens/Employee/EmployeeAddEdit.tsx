import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import AddEmployee from '../../components/Employee/AddEmployee';

const EmployeeAddEdit = () => {
    let params = useParams();
    let location = useLocation();

    const { opration } = params;
    return <>{opration === "add" ? <AddEmployee /> : ""}</>;
}

export default EmployeeAddEdit