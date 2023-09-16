import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { TelebookContext } from '../index' ;
import { fetchDeaneries, fetchSubunitsForUnit } from '../http/unitAPI';
import { UNIT_ROUTE } from '../utils/consts';
import { Spinner } from 'react-bootstrap';
import UnitCard from './UnitCard/UnitCard';


const UnitList = observer(({units}) => {

    if (!units) return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )

    return (
    <Row className='gy-2'>
            {units.map(unit =>
            <Col md={4} key={unit.id}>
                 <UnitCard unit={unit} key={unit.id}></UnitCard>
            </Col>
            )}
    </Row>
    )
})

export default UnitList