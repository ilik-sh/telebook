import React from 'react';
import {Col, Row, Spinner} from 'react-bootstrap'
import EmployeeCard from '../EmployeeCard/EmployeeCard';    
import Section from '../Section/Section';
import styles from './EmployeeList.module.css'


const EmployeeList = ({employees}) => {
    if (!employees) return (
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
        </Spinner>
    )

    return (
        <Section title="Сотрудники">
            <Row className='gy-2'>
                {employees.map((employee, index) =>
                    <Col key={employee.id} md={6}>
                        <EmployeeCard employee={employee} />
                        {(index + 2 < employees.length)
                            ? <hr className={styles.rule}></hr>
                            : null}

                    </Col>
                )}
            </Row>
        </Section>
        )
}

export default EmployeeList