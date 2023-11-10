import React from 'react';
import { Spinner } from 'react-bootstrap';
import EmployeeList from '../components/EmployeeList/EmployeeList';
import Wrapper from '../components/Wrapper/Wrapper';
import Title from '../components/Title/Title';
import { useGetEmployeesForUnitQuery } from '../api/employee.api';


const Rectorate = () => {
    const employeesRes = useGetEmployeesForUnitQuery(1)
    
    if (employeesRes.isLoading) {
      return (
          <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>
      )
  }

    return (
      <div className='main'>
        <Title title="Ректорат"></Title>
        <Wrapper>
          {
            employeesRes.data.length > 0
            ? <EmployeeList employees={employeesRes.data}></EmployeeList>
            : null
          }
        </Wrapper>
      </div>
    )
}

export default Rectorate