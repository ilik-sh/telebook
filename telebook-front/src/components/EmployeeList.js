import React, { useContext } from 'react';
import {Card, Row, Col} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { TelebookContext } from '../index' ;
import EmployeeCard from './EmployeeCard';

const EmployeeList = observer( () => {
    const {employee} = useContext(TelebookContext) 
    return (
    <Row className='d-flex justify-content-center align-items-center' md={3}>
        {employee.employees.map(employee => 
            <EmployeeCard key={employee.id} employee={employee}/>
        )}
    </Row>
    )
})

export default EmployeeList