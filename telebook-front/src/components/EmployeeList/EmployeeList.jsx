import React, { useContext, useEffect, useState } from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import { fetchEmployeesForUnit } from '../../http/employeeAPI';
import {observer} from 'mobx-react-lite'
import { Spinner } from 'react-bootstrap';
import styles from './EmployeeList.module.css'


const EmployeeList = observer(({employees}) => {
    if (!employees) return (
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
        </Spinner>
    )

    return (
            <Row>
                {employees.map((employee, index) =>
                    <Col key={employee.id} md={6}>
                        <EmployeeCard employee={employee} />
                        {(index + 2 < employees.length)
                            ? <hr className={styles.rule}></hr>
                            : null}

                    </Col>
                )}
            </Row>
        )
})

export default EmployeeList