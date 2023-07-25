import "../../sass/index.scss"
import TableEmployee from "../components/TableEmployee"

export default function EmployeeList() {
  return (
    <div className="title">
      <h1 className="text-3xl font-bold">Current Employees</h1>
      <TableEmployee />
    </div>
  )
}
