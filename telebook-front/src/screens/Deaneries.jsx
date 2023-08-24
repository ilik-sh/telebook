import React from 'react';
import {Container} from 'react-bootstrap'
import EmployeeList from '../components/EmployeeList';
import UnitList from '../components/UnitList';

const Deaneries = ({employee}) => {
    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <UnitList/>
      </Container>
    )
}

export default Deaneries