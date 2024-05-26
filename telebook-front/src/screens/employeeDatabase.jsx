import React  from 'react';
import { Spinner } from 'react-bootstrap';

import Title from '../components/Title/Title';

import { useGetEmployeesQuery } from '../api/employee.api';

import EmployeeSearchTab from '../components/EmployeeSearchTab';

const EmployeeDatabase = () => {
    
    const employeeRes = useGetEmployeesQuery()
     
    if (employeeRes.isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <div className='main'>
            <Title title="Сотрудники университета"></Title>
           <EmployeeSearchTab employees={employeeRes.data}/>
        </div>
    );
}

export default EmployeeDatabase;