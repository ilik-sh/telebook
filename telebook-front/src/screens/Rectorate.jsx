import React from 'react';
import {Container} from 'react-bootstrap'
import EmployeeList from '../components/EmployeeList';

const Rectorate = ({employee}) => {
    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <EmployeeList />
      </Container>
    )
}

export default Rectorate