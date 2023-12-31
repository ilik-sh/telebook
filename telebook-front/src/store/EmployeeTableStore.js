import { Pagination } from "react-bootstrap"


export default class EmployeeTableStore {

    _employees = []
    _selectedPage = 1

    constructor() {
    }

    fetchAllEmployeesAction = async () => {
        try {
            
        } catch {
            throw new Error("Error fetching employees")
        }
    }

    setSelectedPage = (page) => {
        if (this._selectedPage !== page) {
            this._selectedPage = page
        }
        
    }

    pageEmployees = (employees) => {
        let pagedEmployees = []
        while (employees.length > 0) {
            pagedEmployees.push(employees.splice(0, 10))
        }
        return pagedEmployees
    }

    get employees() {
        return this._employees[this._selectedPage-1]
    }

    get pages() {
        let pages =[]
        this._employees.map((_, index) => {
            pages.push(<Pagination.Item
                onClick={() => this.setSelectedPage(index+1)}
                key={index+1}
                active={index+1 === this._selectedPage}
              >
                {index + 1}
              </Pagination.Item>)
        })
        return pages
    }
    
}