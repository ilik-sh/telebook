import React from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap'
import EmployeeList from '../components/EmployeeList';

const Rectorate = ({employee}) => {
    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <EmployeeList />
      </Container>
    )
}

export default Rectorate