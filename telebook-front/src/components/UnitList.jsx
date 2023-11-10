import React from 'react';
import {Row, Col} from 'react-bootstrap'
import { Spinner } from 'react-bootstrap';
import UnitCard from './UnitCard/UnitCard';
import Section from './Section/Section';


const UnitList = ({units}) => {

    if (!units) return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )

    return (
        <Section title="Подразделения">
            <Row className='gy-2'>
                {units.map(unit =>
                <Col md={4} key={unit.id}>
                    <UnitCard unit={unit} key={unit.id}></UnitCard>
                </Col>
                )}
            </Row>
        </Section>
    
    )
}

export default UnitList