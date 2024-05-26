import React from 'react'
import Wrapper from '../../components/Wrapper/Wrapper'
import Title from '../../components/Title/Title'

export default function EmployeePage({employee}) {
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
  )
}
