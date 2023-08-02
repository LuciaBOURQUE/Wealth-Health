import { NavLink } from "react-router-dom"
import TableEmployee from "../components/TableEmployee"
import "../../sass/index.scss"

export default function EmployeeList() {
  return (
    <div className="title">
      <h1 className="text-3xl font-bold">Current Employees</h1>
      <TableEmployee />
      <NavLink
        to="/"
        className="flex justify-center text-1xl text-center underline"
      >
        Home
      </NavLink>
    </div>
  )
}
