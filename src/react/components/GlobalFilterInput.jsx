//import "../../sass/index.scss"

const GlobalFilterInput = ({ filter, setFilter }) => {
  return (
    <span>
      Search:{" "}
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
    </span>
  )
}

export default GlobalFilterInput
