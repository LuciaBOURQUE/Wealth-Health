import { NavLink } from "react-router-dom"
import FormEmployee from "../components/FormEmployee"
import logo from "../../assets/logo.png"
import image from "../../assets/image.png"
import "../../sass/index.scss"

export default function CreateEmployee() {
  return (
    <div className="container-form">
      <section className="container-form__section">
        <img className="banner" src={image} alt="arrière-plan form" />
        <div className="form-info">
          <div className="form-info_logo">
            <img className="form-logo" src={logo} alt="Wealth Health's logo" />
            <h3>
              <strong>Wealth Health</strong> <br /> HRnet Application
            </h3>
          </div>
          <div className="form-info_text">
            <h1>Create Employee</h1>
            <h2>Let’s get started with your employees !</h2>
            <NavLink to="/employee-list" className="main-button">
              View Current Employees
            </NavLink>
          </div>
        </div>
      </section>
      <FormEmployee></FormEmployee>
    </div>
  )
}
