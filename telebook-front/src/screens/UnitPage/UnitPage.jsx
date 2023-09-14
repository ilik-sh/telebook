import EmployeeList from '../../components/EmployeeList/EmployeeList';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import UnitList from '../../components/UnitList';
import UnitStore from '../../store/UnitStore';
import EmployeeStore from '../../store/EmployeeStore';
import {observer} from 'mobx-react-lite'
import Section from '../../components/Section/Section';
import styles from './UnitPage.module.css'
import Wrapper from '../../components/Wrapper/Wrapper';

const employeeStore = new EmployeeStore
const unitStore = new UnitStore


const UnitPage = observer(() => {
    const {unitId} = useParams()

    useEffect( () => {
        employeeStore.fetchEmployeesAction(unitId)
        unitStore.fetchSubunitsAction(unitId)
    }, [])

    return (
        <div className='main'>
            <Wrapper>
                {employeeStore.employees.length != 0
                    ? <Section title="Сотрудники">
                        <EmployeeList employees={employeeStore.employees}></EmployeeList>
                    </Section>
                    : null}
                {unitStore.units.length != 0
                    ? <Section title="Кафедры">
                        <UnitList units={unitStore.units}></UnitList>
                    </Section>
                    : null}
            </Wrapper>
        </div>
    );
})

export default UnitPage;