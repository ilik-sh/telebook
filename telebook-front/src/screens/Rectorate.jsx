import React from 'react';
import {Container} from 'react-bootstrap'
import { RECTORATE_ID } from '../utils/consts';
import { useEffect, useState } from 'react';
import { fetchEmployeesForUnit } from '../http/employeeAPI';
import EmployeeList from '../components/EmployeeList/EmployeeList';

const Rectorate = () => {
    const [employees, setEmployees] = useState(null)

    useEffect( () => {
      fetchEmployeesForUnit(RECTORATE_ID).then(employees => setEmployees(employees))
  }, [])

    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <EmployeeList employees={employees}/>
      </Container>
    )
}

export default Rectorate