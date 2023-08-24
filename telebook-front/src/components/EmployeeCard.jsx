import React from 'react';
import {Card, Col, ListGroup} from 'react-bootstrap'
import { getNames, getSurname } from '../utils/nameTrimer';
import { observer, inject } from 'mobx-react-lite';


function EmployeeCard({employee}) {
    return (
        <Col className='mt-3 mb-3'>
            <Card>
            <Card.Body className=''>
                <Card.Title>
                    <h3>{getSurname(employee.name)}</h3>
                    {getNames(employee.name)}
                </Card.Title>
                <Card.Text className='text-muted'>{employee.position.name}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Внутренний: {employee.internal_phone}</ListGroup.Item>
                {
                employee.work_phone
                ? <ListGroup.Item>Рабочий: {employee.work_phone}</ListGroup.Item>
                : null
                }
                <ListGroup.Item>{employee.email}</ListGroup.Item>
            </ListGroup>
            </Card>
        </Col>
    )
}

export default EmployeeCard