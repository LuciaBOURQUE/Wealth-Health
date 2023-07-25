import { states } from "../../datas/states"
import { departments } from "../../datas/departements"
import { useState } from "react"
import Dropdown from "./Dropdown"
import ModalValidation from "./ModalValidationForm"
import "../../sass/index.scss"

export default function FormEmployee() {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    dateBirthday: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  })

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const dataStates = states
  const dataDepartments = departments

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={credentials.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={credentials.lastName}
        onChange={handleChange}
      />

      <label htmlFor="dateBirthday">Date of Birthday</label>
      <input
        type="date"
        id="dateBirthday"
        name="dateBirthday"
        value={credentials.dateBirthday}
        onChange={handleChange}
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={credentials.startDate}
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
          value={credentials.street}
          onChange={handleChange}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={credentials.city}
          onChange={handleChange}
        />

        <Dropdown type={"state"} valueLabel={"State"} data={dataStates} />

        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={credentials.zipCode}
          onChange={handleChange}
        />
      </fieldset>

      <Dropdown
        type={"department"}
        valueLabel={"Department"}
        data={dataDepartments}
      />

      <ModalValidation />
    </form>
  )
}

/*
<button type="submit">Save</button>

    const state = {
    firstName: null,
    lastName: null,
    dateBirthday: null,
    startDate: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
    department: null,
  }

  const handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
    console.log(e.target.value)
  }
*/
