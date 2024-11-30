
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../context/FormContext';
import { handleInput, handleSubmit } from '../services/SignupHandle';
import 'animate.css'
export default function Signup() {
  const { formInputs, setFormInputs } = useContext(FormContext);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container d-flex bg-light rounded shadow" style={{ maxWidth: "800px", overflow: "hidden" }}>
        
        <div className="d-flex flex-column justify-content-center align-items-center bg-primary-subtle w-50 p-4 animate__animated animate__backInLeft animate__slow">
          <h1 className="text-center">Welcome Back</h1>
          <Link to="/login" className="btn btn-dark mt-4">Login</Link>
        </div>

        
        <form
          className="d-flex flex-column justify-content-center bg-dark-subtle w-50 p-4 animate__animated animate__backInRight animate__slow"
          onSubmit={(event) => handleSubmit(event, formInputs, setFormInputs)}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label h5">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              name="username"
              onChange={(event) => handleInput(event, setFormInputs)} 
              value={formInputs.username || ""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label h5">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              onChange={(event) => handleInput(event, setFormInputs)} 
              value={formInputs.email || ""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label h5">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              onChange={(event) => handleInput(event, setFormInputs)}
              value={formInputs.password || ""}
            />
          </div>
          <button type="submit" className="btn btn-outline-dark">Signup</button>
        </form>
      </div>
    </div>
  );
}
