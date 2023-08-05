const GlobalFilterInput = ({ filter, setFilter }) => {
  return (
    <span>
      <label htmlFor="search">Search {""} </label>
      <input
        placeholder="Enter your search"
        type="text"
        id="first_name"
        name="first_name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  )
}

export default GlobalFilterInput
