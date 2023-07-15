import "../../sass/index.scss"
import TablleEmployee from "../components/TableEmployee"

export default function EmployeeList() {
  return (
    <div className="title">
      <h1 className="text-3xl font-bold">Current Employees</h1>
      <TablleEmployee />
    </div>
  )
}
