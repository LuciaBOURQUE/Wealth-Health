import { useEffect, useState } from "react"
import { states } from "../../datas/states"
import { departments } from "../../datas/departements"
import { Dropdown } from "react-dropdown-ww"
//import ModalValidation from "./ModalValidationForm"
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import { localStorageEmployee } from "./LocalStorage.jsx"
import "../../sass/index.scss"

export default function FormEmployee() {
  //Data of states and departments
  const dataStates = states
  let optionsStates = dataStates.map((state) => state.name)
  const dataDepartments = departments
  let optionsDepartments = dataDepartments.map((department) => department.name)

  // State of modal validation
  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  const [employeesTable, setEmployeesTable] = useState(localStorageEmployee())
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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let employeeObject = employee
    setEmployeesTable([...employeesTable, employeeObject])
    setEmployee(employee)
    onOpenModal()
  }

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employeesTable))
  }, [employeesTable])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="container-inputs">
        {" "}
        <div className="input-fields">
          {" "}
          <label htmlFor="first_name">First Name</label>
          <input
            placeholder="Enter your name"
            type="text"
            id="first_name"
            name="first_name"
            required
            value={employee.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="input-fields">
          {" "}
          <label htmlFor="last_name">Last Name</label>
          <input
            placeholder="Enter your last name"
            type="text"
            id="last_name"
            name="last_name"
            required
            value={employee.last_name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="container-inputs">
        {" "}
        <div className="input-fields">
          {" "}
          <label htmlFor="date_birthday">Date of Birthday</label>
          <input
            type="date"
            id="date_birthday"
            name="date_birthday"
            required
            value={employee.date_birthday}
            onChange={handleChange}
          />
        </div>{" "}
        <div className="input-fields">
          {" "}
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            required
            value={employee.start_date}
            onChange={handleChange}
          />
        </div>
      </div>

      <fieldset className="flex flex-col rounded-lg">
        <legend>ADDRESS</legend>

        <label htmlFor="street" className="m-0">
          Street
        </label>
        <input
          placeholder="Enter your street"
          type="text"
          id="street"
          name="street"
          required
          value={employee.street}
          onChange={handleChange}
        />

        <label htmlFor="city">City</label>
        <input
          placeholder="Where are you?"
          type="text"
          id="city"
          name="city"
          required
          value={employee.city}
          onChange={handleChange}
        />

        <Dropdown
          type={"text"}
          className="flex flex-col"
          label="State"
          title="Select your State"
          name="state"
          isRequired={true}
          state={employee.state}
          options={optionsStates}
          handleChange={handleChange}
        />

        <label htmlFor="zip_code">Zip Code</label>
        <input
          placeholder="Ex: 35140"
          type="text"
          id="zip_code"
          name="zip_code"
          required
          value={employee.zip_code}
          onChange={handleChange}
        />
      </fieldset>

      <Dropdown
        type={"text"}
        label="Department"
        title="Select your Department"
        name="department"
        isRequired={true}
        state={employee.department}
        options={optionsDepartments}
        handleChange={handleChange}
      />

      <button type="submit" className="bg-[#6F8610]">
        {" "}
        Submit{" "}
      </button>

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <p>Employee Created !</p>
      </Modal>
    </form>
  )
}
