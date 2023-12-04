import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './Loading.module.css'

function Loading(props) {  
    setTimeout(() => {
        return (
            <div className={styles.loading}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }, 50)
}

export default Loading