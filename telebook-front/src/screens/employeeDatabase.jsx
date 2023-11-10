import React, { useState} from 'react';
import { Spinner } from 'react-bootstrap';
import EmployeeTable from '../components/EmployeeTable';
import Title from '../components/Title/Title';
import Wrapper from '../components/Wrapper/Wrapper';
import SearchBar from '../components/SearchBar/SearchBar';
import { useGetEmployeesQuery } from '../api/employee.api';

const EmployeeDatabase = () => {
    
    const employeeRes = useGetEmployeesQuery()
    const [search, setSearch] = useState('')

    if (employeeRes.isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <div className='main'>
            <Title title="Сотрудники университета"></Title>
            <SearchBar onChange={(e) => setSearch(e)}/>
            <Wrapper>
            <EmployeeTable employees={
                employeeRes.data.filter((item) => {
                    return search.toLowerCase() === ''
                    ? item 
                    : item.name.toLowerCase().includes(search.toLowerCase()) 
                })
            }></EmployeeTable>
            </Wrapper>

        </div>
    );
}

export default EmployeeDatabase;