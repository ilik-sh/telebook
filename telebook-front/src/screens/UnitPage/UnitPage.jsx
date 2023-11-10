import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import UnitList from '../../components/UnitList';
import Wrapper from '../../components/Wrapper/Wrapper';
import Title from '../../components/Title/Title';
import { useGetSubunitsQuery, useGetUnitByIdQuery } from '../../api/unit.api';
import { useGetEmployeesForUnitQuery } from '../../api/employee.api';
import Loading from '../../components/Loading/Loading';

const UnitPage = () => {
    const {unitId} = useParams()

    const subunitsRes = useGetSubunitsQuery(unitId)
    const employeesRes = useGetEmployeesForUnitQuery(unitId)
    const unitRes = useGetUnitByIdQuery(unitId)

    if (unitRes.isLoading || subunitsRes.isLoading || employeesRes.isLoading) {
        return (
            <Loading/>
        )
    }

    return (
        <div className='main'>
            <Wrapper>
                <Title title={unitRes.data.name}></Title>
                    {
                        employeesRes.data.length > 0
                        ? <EmployeeList employees={employeesRes.data}></EmployeeList>
                        : null
                    }
                    {
                        subunitsRes.data.length > 0
                        ? <UnitList units={subunitsRes.data}></UnitList>
                        : null
                    }
            </Wrapper>
        </div>
    );
}

export default UnitPage;