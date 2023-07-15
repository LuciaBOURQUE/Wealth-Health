import { useState } from "react"
import "../../sass/index.scss"

export default function Dropwdown({ type, valueLabel, data }) {
  const [inputValue, setInputValue] = useState("")
  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="flex flex-col">
      <label htmlFor={type}>{valueLabel}</label>
      <select
        type="text"
        value={inputValue}
        id={type}
        name={type}
        onChange={handleChange}
      >
        {data.map((type, index) => (
          <option key={`${type}-${index}`} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  )
}
