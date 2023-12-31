import TableEmployee from "../components/table employee/TableEmployee"
import logo from "../../assets/logo.png"
import "../../sass/index.scss"

/**
 * Component that displays the page of the table of the list of employees
 * @returns the employee list's page
 */
export default function EmployeeList() {
  return (
    <div className="container-table">
      <header className="flex justify-center items-center">
        <img className="table_logo" src={logo} alt="Wealth Health's logo" />
        <div>
          <h1>Wealth Heath</h1>
          <h2>List of all your current Employees</h2>
        </div>
      </header>
      <TableEmployee />
    </div>
  )
}
