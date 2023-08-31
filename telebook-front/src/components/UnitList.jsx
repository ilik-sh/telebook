import React, { useEffect, useState } from 'react';
import {Row} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { TelebookContext } from '../index' ;
import { fetchDeaneries, fetchSubunitsForUnit } from '../http/unitAPI';
import { UNIT_ROUTE } from '../utils/consts';

const UnitList = observer( ({units}) => {

    if (!units) return null 

    return (
    <ul>
        {units.map(unit =>
            <li key={unit.id}><a href={UNIT_ROUTE+`/${unit.id}`}>{unit.name}</a></li>
        )}
    </ul>
    )
})

export default UnitList