import React from 'react';
import {Spinner} from 'react-bootstrap'
import UnitList from '../components/UnitList';
import Wrapper from '../components/Wrapper/Wrapper';
import Title from '../components/Title/Title';
import { useGetDeaneriesQuery } from '../api/unit.api';

const Deaneries = () => {

    const unitsRes = useGetDeaneriesQuery()

    if (unitsRes.isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
      <div className='main'>
        <Title title="Деканаты"></Title>
        <Wrapper>
          {
            unitsRes.data.length > 0
            ? <UnitList units={unitsRes.data}></UnitList>
            : null
          }
        </Wrapper>
      </div>
    )
}

export default Deaneries