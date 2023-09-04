import React, { useState } from 'react';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import UnitList from '../../components/UnitList';
import UnitStore from '../../store/UnitStore';
import EmployeeStore from '../../store/EmployeeStore';
import {observer} from 'mobx-react-lite'

const employeeStore = new EmployeeStore
const unitStore = new UnitStore

const UnitPage = observer(() => {
    const {unitId} = useParams()

    useEffect( () => {
        employeeStore.fetchEmployeesAction(unitId)
        unitStore.fetchSubunitsAction(unitId)
    }, [])

    return (
        <div>
            <h2>Сотрудники</h2>
            <EmployeeList employees={employeeStore.employees}></EmployeeList>
            <h2>Подразделения</h2>
            <UnitList units={unitStore.units}></UnitList>
        </div>
    );
})

export default UnitPage;