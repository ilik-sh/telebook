import React, { useContext, useEffect, useState } from 'react';
import {Row} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { TelebookContext } from '../index' ;
import EmployeeCard from './EmployeeCard';
import { fetchEmployeesForUnit, fetchRectorateEmployees } from '../http/employeeAPI';


function EmployeeList({unitId}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchRectorateEmployees().then(response => {setData(response)})
    }, [])

    if (!data) return "Сотрудники не найдены"

    return (
        <Row className='justify-content-center' md={3}>
            {data.map(employee => 
                <EmployeeCard key={employee.id} employee={employee}/>
            )}
        </Row>
        )
}

export default EmployeeList