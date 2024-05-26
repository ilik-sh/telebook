import React, {useState, useMemo} from 'react'
import Wrapper from '../components/Wrapper/Wrapper';
import SearchBar from '../components/SearchBar/SearchBar';
import { useGetEmployeesQuery } from '../api/employee.api';
import useDebounce from '../hooks/use-debounce';
import EmployeeTable from '../components/EmployeeTable';

export default function EmployeeSearchTab({employees}) {
    const [search, setSearch] = useState('')

    const searchDebounce = useDebounce(search, 500)

    const visibleEmployees = useMemo(() => { return employees.filter((item) => (
        searchDebounce.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(searchDebounce.toLowerCase()) 
    ))}, [searchDebounce, employees])
    console.log(searchDebounce)
    console.log(visibleEmployees)
  return (
    <>
    <SearchBar onChange={(e) => setSearch(e)}/>
    <Wrapper>
        <EmployeeTable employees={
            visibleEmployees
        }></EmployeeTable>
    </Wrapper>
    </>
  )
}
