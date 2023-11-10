import React from 'react';
import styles from './Title.module.css'


function Title({title}) {
    return (
        <div className={styles.title}>
            <h1>{title.toUpperCase()}</h1>
        </div>
    );
}

export default Title;