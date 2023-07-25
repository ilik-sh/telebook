import { makeAutoObservable } from "mobx"

export default class EmployeeStore {
    constructor() {
        this._units = [
            {id: 1, name: "Ректорат"},
            {id: 2, name: "Офтальмология"}
        ]

        this._positions = [
            {id: 1, name: "Ректор", weight: 10},
            {id: 2, name: "Декан", weight: 9},
            {id: 3, name: "Профессор", weight: 8}
        ]

        this._employees = [
            {id: 1, name: "Соколов Петр Прокофьевич", phone: "+375447737319", email: "sokolov@gmail.com", positionId: 1, unitId: 1},
            {id: 2, name: "Никифоров Болеслав Семенович", phone: "+375446549432", email: "nikiforov@gmail.com", positionId: 2, unitId: 2},
            {id: 3, name: "Савичева Александра Николаевна", phone: "+375446545463", email: "savicheva@gmail.com", positionId: 3, unitId: 2},
            {id: 4, name: "Ружевский Антон Васильевич", phone: "+375446764363", email: "rushj@gmail.com", positionId: 3, unitId: 2},
            {id: 5, name: "Соколов Петр Прокофьевич", phone: "+375447737319", email: "sokolov@gmail.com", positionId: 1, unitId: 1},
            {id: 6, name: "Никифоров Болеслав Семенович", phone: "+375446549432", email: "nikiforov@gmail.com", positionId: 2, unitId: 2},
            {id: 7, name: "Савичева Александра Николаевна", phone: "+375446545463", email: "savicheva@gmail.com", positionId: 3, unitId: 2},

        ]
        makeAutoObservable(this)
    }

    setUnits(units) {
        this._units = units
    }

    setPositions(positions) {
        this._positions = positions
    }

    setEmployees(employees) {
        this._employees = employees
    }

    get units() {
        return this._units
    }

     get positions() {
        return this._positions
    }

    get employees() {
        return this._employees
    }
}