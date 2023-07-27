import React from 'react';
import {Card, Col, ListGroup} from 'react-bootstrap'


const EmployeeCard = ({employee}) => {
    return (
        <Col className='mt-5 justify-content-center align-items-center'>
            <Card>
            <Card.Body className='mt-2'>
                <Card.Title>{employee.name}</Card.Title>
                <Card.Subtitle>Декан</Card.Subtitle>
                <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Телефон: {employee.phone}</ListGroup.Item>
                <ListGroup.Item>{employee.phone}</ListGroup.Item>
                <ListGroup.Item>{employee.email}</ListGroup.Item>
            </ListGroup>
            </Card>
        </Col>
    )
}

export default EmployeeCard