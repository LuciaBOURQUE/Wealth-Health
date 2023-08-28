/**
 * Search fields in the global table
 * @param {string|number} param0
 * @returns the user value
 */
const GlobalFilterInput = ({ filter, setFilter }) => {
  return (
    <span>
      <label htmlFor="search">Search {""} </label>
      <input
        placeholder="Enter your search"
        type="text"
        id="search"
        name="search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  )
}

export default GlobalFilterInput
