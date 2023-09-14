import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap'
import UnitList from '../components/UnitList';
import UnitStore from '../store/UnitStore';
import {observer} from 'mobx-react-lite'
import Wrapper from '../components/Wrapper/Wrapper';
import Title from '../components/Title/Title';

const unitStore = new UnitStore

const Chairs = observer(() => {
    useEffect( () => {
      unitStore.fetchChairsAction()
  }, [])

    return (
        <div className='main'>
            
            <Title title="Кафедры"></Title>
            <Wrapper>
            
            <UnitList units={unitStore.units}></UnitList>
            </Wrapper>
        </div>
        
    )
})
export default Chairs;