import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Section.module.css'

function Section(props) {
    return (
        <div className={styles.section}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
}

export default Section;