import React, { useContext, useEffect, useState } from 'react';
import {Row} from 'react-bootstrap'
import EmployeeCard from '../EmployeeCard';
import { fetchEmployeesForUnit } from '../../http/employeeAPI';
import {observer} from 'mobx-react-lite'


const EmployeeList = observer(({employees}) => {
    if (!employees) return "Сотрудники не найдены"

    return (
        <Row className='justify-content-center' md={3}>
            {employees.map(employee => 
                <EmployeeCard key={employee.id} employee={employee}/>
            )}
        </Row>
        )
})

export default EmployeeList