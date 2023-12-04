import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import UnitList from '../components/UnitList';
import Wrapper from '../components/Wrapper/Wrapper';
import Title from '../components/Title/Title';
import Loading from '../components/Loading/Loading';
import { useGetChairsQuery } from '../api/unit.api';

const Chairs = () => {
    const unitsRes = useGetChairsQuery()

    if (unitsRes.isLoading) {
        return (
            <Loading/>
        )
    }

    return (
        <div className='main'>
            <Title title="Кафедры"></Title>
            {
                unitsRes.data.length > 0
                ? <UnitList units={unitsRes.data}></UnitList>
                : null
            }
        </div>
        
    )
}

export default Chairs;