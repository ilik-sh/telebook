import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap'
import UnitList from '../components/UnitList';
import UnitStore from '../store/UnitStore';
import {observer} from 'mobx-react-lite'

const unitStore = new UnitStore

const Chairs = observer(() => {
    useEffect( () => {
      unitStore.fetchChairsAction()
  }, [])

    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <UnitList units={unitStore.units}></UnitList>
      </Container>
    )
})
export default Chairs;