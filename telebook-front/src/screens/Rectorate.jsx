import React from 'react';
import { Spinner } from 'react-bootstrap';
import EmployeeList from '../components/EmployeeList/EmployeeList';
import Loading from '../components/Loading/Loading';
import Wrapper from '../components/Wrapper/Wrapper';
import Title from '../components/Title/Title';
import { useGetEmployeesForUnitQuery } from '../api/employee.api';


const Rectorate = () => {
    const employeesRes = useGetEmployeesForUnitQuery(1)
    
    if (employeesRes.isLoading) {
      return (
          <Loading/>
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