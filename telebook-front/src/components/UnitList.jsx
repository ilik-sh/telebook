import React, { useEffect, useState } from 'react';
import {Row} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { TelebookContext } from '../index' ;
import EmployeeCard from './EmployeeCard';
import { fetchDeaneries } from '../http/unitAPI';

const UnitList = observer( () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchDeaneries().then(response => {setData(response)})
    }, [])

    if (!data) return null 

    return (
    <Row className='d-flex justify-content-center align-items-center' md={3}>
        {data.map(unit => 
            <div key='id'>{unit.name}</div>
        )}
    </Row>
    )
})

export default UnitList