import { NavLink } from "react-router-dom"
import FormEmployee from "../components/FormEmployee"
import "../../sass/index.scss"

export default function CreateEmployee() {
  return (
    <div className="test">
      <h1 className="text-6xl text-center font-bold">HRNet</h1>
      <div className="flex flex-col">
        {" "}
        <NavLink to="/employee-list" className="text-1xl text-center underline">
          View Current Employees
        </NavLink>
        <h2 className="text-3xl text-center font-medium">Create Employee</h2>
      </div>
      <FormEmployee></FormEmployee>
    </div>
  )
}
