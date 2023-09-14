import React from 'react';
import styles from './EmployeeInfo.module.css'

function EmployeeInfo(props) {
    return (
        <div className={styles.info}>
            <p>{props.employee.name}</p>
            <div className={styles.additional}>
                <span className={styles.position}>{props.employee.position.name}</span>
                <span className={styles.unit}>{props.employee.unit.name}</span>
            </div>
        </div>
    );
}

export default EmployeeInfo;