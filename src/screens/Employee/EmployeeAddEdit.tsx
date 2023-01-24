import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import AddEmployee from '../../components/Employee/AddEmployee';
import EditEmployee from './EditEmployee';

const EmployeeAddEdit = () => {
    let params = useParams();
    let location = useLocation();

    const { opration } = params;
    return <>{opration === "add" ? <AddEmployee /> : <EditEmployee/>}</>;
}

export default EmployeeAddEdit