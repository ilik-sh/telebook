import React from 'react';
import styles from './UnitBranch.module.css'
import { UNIT_ROUTE } from '../../utils/consts';

function UnitBranch(props) {  
    return (
        <li key={props.unit.id}>
            {props.unit.subunits.length > 0
            ? <input className={styles.treeToggle} type='checkbox' id={props.unit.id}></input>
            : null
            }
            {props.unit.subunits.length > 0
            ? <label  href={UNIT_ROUTE + '/' + props.unit.id} className={styles.treeToggleLabel} htmlFor={props.unit.id}><a href={UNIT_ROUTE + '/' + props.unit.id}>{props.unit.name}</a></label>
            : <a href={UNIT_ROUTE + '/' + props.unit.id}>{props.unit.name}</a>
            }
            <ul className = {styles.subtree}>
            {props.unit.subunits.length > 0
            ? props.unit.subunits.map((child) => (
                <UnitBranch unit={child}></UnitBranch>
            ))
            : null}
            </ul>
        </li>
    );
}

export default UnitBranch;