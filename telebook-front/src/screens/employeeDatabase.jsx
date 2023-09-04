import React, { useEffect } from 'react';
import EmployeeTable from '../components/EmployeeTable';
import { observer } from 'mobx-react-lite';
import EmployeeTableStore from '../store/EmployeeTableStore';
import { Button, Form, Pagination } from 'react-bootstrap';

const employeeTableStore = new EmployeeTableStore

const EmployeeDatabase = observer(() => {
    useEffect( () => {
        employeeTableStore.fetchAllEmployeesAction()
        console.log('Rerender')
    }, [])

    if (!employeeTableStore.employees) { return "Loading..."}

    return (
        <div>
            <Pagination>{employeeTableStore.pages}</Pagination>
            <EmployeeTable employees={employeeTableStore.employees}></EmployeeTable>
            <Pagination>{employeeTableStore.pages}</Pagination>
        </div>
    );
})

export default EmployeeDatabase;