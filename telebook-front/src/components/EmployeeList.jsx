import React, { useContext, useEffect, useState } from 'react';
import {Row} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { TelebookContext } from '../index' ;
import EmployeeCard from './EmployeeCard';
import { fetchEmployeesForUnit } from '../http/employeeAPI';


function EmployeeList({employees}) {
    if (!employees) return "Сотрудники не найдены"

    return (
        <Row className='justify-content-center' md={3}>
            {employees.map(employee => 
                <EmployeeCard key={employee.id} employee={employee}/>
            )}
        </Row>
        )
}

export default EmployeeList