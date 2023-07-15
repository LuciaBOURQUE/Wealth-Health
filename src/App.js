import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateEmployee from "./react/pages/CreateEmployee"
import EmployeeList from "./react/pages/EmployeeList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
