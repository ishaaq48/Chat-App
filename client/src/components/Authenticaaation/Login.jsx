
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { handleInput, handleSubmit } from "../services/LoginHandle"; 
import 'animate.css'
export default function Login() {
  const { formInputs, setFormInputs } = useContext(FormContext);
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="container d-flex bg-light rounded shadow"
        style={{ maxWidth: "800px", overflow: "hidden" }}
      >
        
        <div className="d-flex flex-column justify-content-center align-items-center bg-primary-subtle w-50 p-4 animate__animated animate__backInLeft animate__slow">
          <h1 className="text-center">New here?</h1>
          <Link to="/signup" className="btn btn-dark mt-4">
            Signup
          </Link>
        </div>

        
        <form
          onSubmit={(event) => handleSubmit(event, formInputs, setFormInputs, navigate)} 
          className="d-flex flex-column justify-content-center bg-dark-subtle w-50 p-4 animate__animated animate__backInRight animate__slow"
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label h5">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              name="username"
              value={formInputs.username || ""}
              onChange={(event) => handleInput(event, setFormInputs)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label h5">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={formInputs.password || ""}
              onChange={(event) => handleInput(event, setFormInputs)} 
            />
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
