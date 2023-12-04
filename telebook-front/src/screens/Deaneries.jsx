import React from 'react';
import {Spinner} from 'react-bootstrap'
import UnitList from '../components/UnitList';
import Loading from '../components/Loading/Loading';
import Wrapper from '../components/Wrapper/Wrapper';
import Title from '../components/Title/Title';
import { useGetDeaneriesQuery } from '../api/unit.api';

const Deaneries = () => {

    const unitsRes = useGetDeaneriesQuery()

    if (unitsRes.isLoading) {
        return (
            <Loading/>
        )
    }

    return (
      <div>
        <Title title="Деканаты"></Title>
          {
            unitsRes.data.length > 0
            ? <UnitList units={unitsRes.data}></UnitList>
            : null
          }
      </div>
    )
}

export default Deaneries