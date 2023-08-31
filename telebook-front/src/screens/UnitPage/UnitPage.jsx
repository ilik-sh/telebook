import React from 'react';
import EmployeeList from '../../components/EmployeeList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSubunitsForUnit } from '../../http/unitAPI';
import { fetchEmployeesForUnit } from '../../http/employeeAPI';
import UnitList from '../../components/UnitList';

function UnitPage(props) {
    const [subunits, setSubunits] = useState(null)
    const [employees, setEmployees] = useState(null)
    const {unitId} = useParams()
    console.log(unitId)

    useEffect( () => {
        fetchSubunitsForUnit(unitId).then(subunits => setSubunits(subunits))
        fetchEmployeesForUnit(unitId).then(employees => setEmployees(employees))
    }, [unitId])
    return (
        <div>
            <h1>Сотрудники</h1>
            <EmployeeList employees={employees}></EmployeeList>
            <h2>Подразделения</h2>
            <UnitList units={subunits}></UnitList>
        </div>
    );
}

export default UnitPage;