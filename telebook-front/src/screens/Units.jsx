import React from 'react';
import { Spinner } from 'react-bootstrap';
import UnitBranch from '../components/UnitBranch/UnitBranch';
import Wrapper from '../components/Wrapper/Wrapper';
import Loading from '../components/Loading/Loading';
import Title from '../components/Title/Title';
import { useGetUnitTreeQuery } from '../api/unit.api';

const Units = () => {

    const unitsRes = useGetUnitTreeQuery()

    if (unitsRes.isLoading) {
        return (
            <Loading/>
        )
    }

    return (
        <div className='main'>
            <Title title="Подразделения"></Title>
            <Wrapper>
                <ul>{
                    unitsRes.data.map((unit) => {
                        return <UnitBranch unit={unit} key={unit.id}></UnitBranch>
                    })
                }
                </ul>
            </Wrapper>
        </div>
        
    )
}

export default Units;