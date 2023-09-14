import React, { useEffect } from 'react';
import EmployeeTable from '../components/EmployeeTable';
import { observer } from 'mobx-react-lite';
import EmployeeTableStore from '../store/EmployeeTableStore';
import { Button, Form, Pagination } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import Title from '../components/Title/Title';
import Wrapper from '../components/Wrapper/Wrapper';

const employeeTableStore = new EmployeeTableStore

const EmployeeDatabase = observer(() => {
    useEffect(() => {
        employeeTableStore.fetchAllEmployeesAction()
    }, [])

    if (!employeeTableStore.employees) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <div className='main'>
            <Title title="Сотрудники университета"></Title>
            <Wrapper>
                <Pagination>{employeeTableStore.pages}</Pagination>
                <EmployeeTable employees={employeeTableStore.employees}></EmployeeTable>
                <Pagination>{employeeTableStore.pages}</Pagination>
            </Wrapper>

        </div>
    );
})

export default EmployeeDatabase;