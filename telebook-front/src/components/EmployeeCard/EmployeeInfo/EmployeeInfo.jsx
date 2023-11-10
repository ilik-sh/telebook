import React from 'react';
import styles from './EmployeeInfo.module.css'

function EmployeeInfo(props) {
    return (
        <div className={styles.info}>
            <p>{props.employee.name}</p>
            <div className={styles.additional}>
                <span className={styles.position}>{props.employee.position.name}</span>
                <span className={styles.unit}>{props.employee.email}</span>
                {
                    props.employee.work_phone
                    ? <span className={styles.unit}>{props.employee.work_phone}</span>
                    : null
                }
                {
                    props.employee.internal_phone
                    ? <span className={styles.unit}>{props.employee.internal_phone}</span>
                    : null
                }
            </div>
        </div>
    );
}

export default EmployeeInfo;