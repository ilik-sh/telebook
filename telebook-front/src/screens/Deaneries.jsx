import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap'
import EmployeeList from '../components/EmployeeList/EmployeeList';
import UnitList from '../components/UnitList';
import UnitStore from '../store/UnitStore';
import {observer} from 'mobx-react-lite'

const unitStore = new UnitStore

const Deaneries = observer(() => {
    useEffect( () => {
      unitStore.fetchDeaneriesAction()
  }, [])

    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <UnitList units={unitStore.units}></UnitList>
      </Container>
    )
})

export default Deaneries