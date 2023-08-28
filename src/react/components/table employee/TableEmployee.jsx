import { NavLink } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table"
import { COLUMNS } from "./columns.js"
import GlobalFilterInput from "./GlobalFilterInput.jsx"

//import { MOCK_EMPLOYEES } from "../../datas/mock_employees.js"
import { localStorageEmployee } from "../LocalStorage.jsx"
import "../../../sass/index.scss"

/**
 * Component that displays a table of the list of employees
 * @returns the employee's table
 */
export default function TableEmployee() {
  const [employees, setEmployees] = useState(localStorageEmployee())

  useEffect(() => {
    setEmployees(localStorageEmployee())
  }, [])

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => employees, [employees])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    prepareRow,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  const { globleFilter, pageSize, pageIndex } = state

  return (
    <>
      <section className="flex justify-between items-center mb-4 mt-5">
        <div className="">
          <label htmlFor="numberList">Show {""} </label>
          <select
            type="number"
            className="numberList"
            id="numberList"
            name="numberList"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>{""} entries</span>
        </div>
        <GlobalFilterInput filter={globleFilter} setFilter={setGlobalFilter} />
      </section>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((header) => (
            <tr {...header.getHeaderGroupProps()}>
              {header.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔼" : "🔽") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <section className="flex justify-between items-center mt-4">
        <NavLink to="/" className="main-button">
          Return home
        </NavLink>
        <div>
          <span>
            Showing {""}
            <strong>
              {pageIndex + 1} to {pageOptions.length} of {page.length}
            </strong>
            {""} entries
          </span>
        </div>
        <div className="flex items-center">
          <button className="second-button" onClick={() => previousPage()}>
            Previous
          </button>
          <button className="second-button" onClick={() => nextPage()}>
            Next
          </button>
        </div>
      </section>
    </>
  )
}
