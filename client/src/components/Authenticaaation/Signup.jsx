
import { useContext } from "react"
import { Link } from "react-router-dom"
import { FormContext } from "../context/FormContext"

export default function Signup( ){
  
    const {formInputs, setFormInputs} = useContext(FormContext) 

    function handleInput(event){
        const { name, value } = event.target
        let obj = {[name]:value}
        setFormInputs((prev) => ({...prev, ...obj})) 

    }
    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInputs),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! Please login.");
        setFormInputs({
          username: "",
          email: "",
          password: ""
        }); 
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  }
    return (
        <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }} // Light background
    >
      <div
        className="container d-flex bg-light rounded shadow"
        style={{ maxWidth: "800px", overflow: "hidden" }}
      >
        {/* Left Panel */}
        <div className="d-flex flex-column justify-content-center align-items-center bg-primary-subtle w-50 p-4">
          <h1 className="text-center">Welcome Back</h1>
          <Link to="/login" className="btn btn-dark mt-4">
            Login
          </Link>
        </div>

        {/* Signup Form */}
        <form
          className="d-flex flex-column justify-content-center bg-dark-subtle w-50 p-4"
          onSubmit={handleSubmit}
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
              onChange={handleInput}
              value={formInputs.username || ""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label h5">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              onChange={handleInput}
              value={formInputs.email || ""}
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
              onChange={handleInput}
              value={formInputs.password || ""}
            />
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Signup
          </button>
        </form>
      </div>
    </div>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                