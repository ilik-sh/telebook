import React from 'react';
import {Card, ListGroup, Col} from 'react-bootstrap'
import { getNames, getSurname } from '../../utils/nameTrimer';
import EmployeeInfo from './EmployeeInfo/EmployeeInfo';
import styles from './EmployeeCard.module.css' 

function EmployeeCard({employee}) {
    return (
        <a className={styles.card}>
            <img src="https://www.helpfilladream.com/wp-content/uploads/2017/04/placeholder-staff-photo.jpg"></img>
            <EmployeeInfo employee={employee}></EmployeeInfo>
        </a>
    )
}

export default EmployeeCard