import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap'
import EmployeeList from '../components/EmployeeList/EmployeeList';
import UnitList from '../components/UnitList';
import UnitStore from '../store/UnitStore';
import {observer} from 'mobx-react-lite'
import Wrapper from '../components/Wrapper/Wrapper';
import Title from '../components/Title/Title';

const unitStore = new UnitStore

const Deaneries = observer(() => {
    useEffect( () => {
      unitStore.fetchDeaneriesAction()
  }, [])

    return (
      <div className='main'>
        <Title title="Деканаты"></Title>
        <Wrapper>
          <UnitList units={unitStore.units}></UnitList>
        </Wrapper>
      </div>
    )
})

export default Deaneries