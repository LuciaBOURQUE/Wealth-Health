import { states } from "../../datas/states"
import { departments } from "../../datas/departements"
import { useEffect, useState } from "react"
import Dropdown from "./Dropdown"
import ModalValidation from "./ModalValidationForm"
import "../../sass/index.scss"

export default function FormEmployee() {
  const dataStates = states
  const dataDepartments = departments

  const [employeesTable, setEmployeesTable] = useState([])
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    date_birthday: "",
    start_date: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    department: "",
  })

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let employeeObject = employee
    setEmployeesTable([...employeesTable, employeeObject])
    setEmployee(employee)
  }

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employeesTable))
  }, [employeesTable])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        required
        value={employee.first_name}
        onChange={handleChange}
      />

      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        required
        value={employee.last_name}
        onChange={handleChange}
      />

      <label htmlFor="date_birthday">Date of Birthday</label>
      <input
        type="date"
        id="date_birthday"
        name="date_birthday"
        required
        value={employee.date_birthday}
        onChange={handleChange}
      />

      <label htmlFor="start_date">Start Date</label>
      <input
        type="date"
        id="start_date"
        name="start_date"
        required
        value={employee.start_date}
        onChange={handleChange}
      />

      <fieldset className="flex flex-col bg-zinc-200 px-4 py-5 rounded-lg my-4">
        <legend className="text-2xl">Address</legend>

        <label htmlFor="street" className="m-0">
          Street
        </label>
        <input
          type="text"
          id="street"
          name="street"
          required
          value={employee.street}
          onChange={handleChange}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          required
          value={employee.city}
          onChange={handleChange}
        />

        <Dropdown
          type={"state"}
          valueLabel={"State"}
          data={dataStates}
          state={employee}
          name="state"
          handleChange={handleChange}
        />

        <label htmlFor="zip_code">Zip Code</label>
        <input
          type="text"
          id="zip_code"
          name="zip_code"
          required
          value={employee.zip_code}
          onChange={handleChange}
        />
      </fieldset>

      <Dropdown
        type={"department"}
        valueLabel={"Department"}
        data={dataDepartments}
        state={employee}
        name="department"
        handleChange={handleChange}
      />

      <button
        type="submit"
        className="bg-slate-300 py-2 px-5 rounded-full mt-4"
      >
        {" "}
        Submit{" "}
      </button>

      <ModalValidation />
    </form>
  )
}
