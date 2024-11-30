import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { FormContext } from "../context/FormContext"
export default function Login(){

    const {formInputs, setFormInputs} = useContext(FormContext)

    const navigate = useNavigate()
    function handleInput(event){
        const { name, value } = event.target
        let obj = {[name]:value}
        setFormInputs((prev) => ({...prev, ...obj})) 
    }

    async function handleSubmit(event){
        event.preventDefault()

        try{
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formInputs)
            })
            setFormInputs({
                    username: "",
                    password: ""
                })
            if(!response.ok){
                throw new Error("Invalid credentials")
                
            }
            
            const data = await response.json()

            localStorage.setItem("token", data.token)

            navigate("/protected")
        }catch(err){
            console.log(err)
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
          <h1 className="text-center">New here?</h1>
          <Link to="/signup" className="btn btn-dark mt-4">
            Signup
          </Link>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center bg-dark-subtle w-50 p-4"
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
              onChange={handleInput}
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
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Login
          </button>
        </form>
      </div>
    </div>
    )
}