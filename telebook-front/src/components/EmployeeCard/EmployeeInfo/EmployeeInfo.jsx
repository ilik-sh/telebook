import React from 'react';
import styles from './EmployeeInfo.module.css'

function EmployeeInfo({employee}) {
    return (
        <div className={styles.info}>
            <p>{employee.name}</p>
            <div className={styles.additional}>
                <span className={styles.position}>{employee.position.name}</span>
                <span className={styles.unit}>{employee.email}</span>
                {
                    employee.work_phone
                    ? <span className={styles.unit}>{employee.work_phone}</span>
                    : null
                }
                {
                    employee.internal_phone
                    ? <span className={styles.unit}>{employee.internal_phone}</span>
                    : null
                }
            </div>
        </div>
    );
}

export default EmployeeInfo;