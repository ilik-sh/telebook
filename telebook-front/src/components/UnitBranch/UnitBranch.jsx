import React from 'react';
import styles from './UnitBranch.module.css'
import { UNIT_ROUTE } from '../../utils/consts';

function UnitBranch({unit}) {  
    return (
        <li key={unit.id}>
            {unit.subunits.length > 0
            ? <input className={styles.treeToggle} type='checkbox' id={unit.id}></input>
            : null
            }
            {unit.subunits.length > 0
            ? <label  href={UNIT_ROUTE + '/' + unit.id} className={styles.treeToggleLabel} htmlFor={unit.id}><a href={UNIT_ROUTE + '/' + unit.id}>{unit.name}</a></label>
            : <a href={UNIT_ROUTE + '/' + unit.id}>{unit.name}</a>
            }
            <ul className = {styles.subtree}>
            {unit.subunits.length > 0
            ? unit.subunits.map((child) => (
                <UnitBranch unit={child}></UnitBranch>
            ))
            : null}
            </ul>
        </li>
    );
}

export default UnitBranch;