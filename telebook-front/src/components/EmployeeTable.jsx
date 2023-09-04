import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

function EmployeeTable({employees}) {
    useEffect(() => {
        console.log("Table rerender")
    })
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Должность</th>
                        <th>Подразделение</th>
                        <th>Рабочий</th>
                        <th>Внутренний</th>
                        <th>Мобильный</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.position.name}</td>
                            <td>{employee.unit.name}</td>
                            <td>{employee.work_phone}</td>
                            <td>{employee.internal_phone}</td>
                            <td>{employee.mobile_phone}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default EmployeeTable;