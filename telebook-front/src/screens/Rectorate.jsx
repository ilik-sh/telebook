import React from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite'

import EmployeeList from '../components/EmployeeList/EmployeeList';
import Section from '../components/Section/Section';
import EmployeeStore from '../store/EmployeeStore';
import Wrapper from '../components/Wrapper/Wrapper';
import Title from '../components/Title/Title';


const employeeStore = new EmployeeStore

const Rectorate = observer(() => {
    useEffect (() => {
        employeeStore.fetchEmployeesAction(2)
    }, [])

    return (
      <div className='main'>
        <Title title="Ректорат"></Title>
        <Wrapper>
          <Section title="Сотрудники">
            <EmployeeList employees={employeeStore.employees}></EmployeeList>
          </Section>
        </Wrapper>
      </div>
    )
})

export default Rectorate