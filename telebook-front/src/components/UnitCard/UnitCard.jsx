import React from 'react';
import styles from './UnitCard.module.css'
import { UNIT_ROUTE } from '../../utils/consts';

function UnitCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.details}>
                <p className={styles.unit}>{props.unit.name}</p>
                {props.unit.description
                    ? <p className={styles.description}> {props.unit.description}</p>
                    : <p className={styles.description}>Unit description</p>}
            </div>

            <a href={UNIT_ROUTE + `/${props.unit.id}`} className={styles.link}>
                <p>Узнать больше</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right" /></svg>
            </a>
        </div>
    );
}

export default UnitCard;