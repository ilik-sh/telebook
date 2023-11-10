import React from 'react';
import EmployeeInfo from './EmployeeInfo/EmployeeInfo';
import styles from './EmployeeCard.module.css' 

function EmployeeCard({employee}) {
    return (
        <div className={styles.card}>
            <img src="https://www.helpfilladream.com/wp-content/uploads/2017/04/placeholder-staff-photo.jpg" alt={employee.name}></img>
            <EmployeeInfo employee={employee}></EmployeeInfo>
        </div>
    )
}

export default EmployeeCard