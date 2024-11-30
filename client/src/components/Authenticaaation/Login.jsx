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
           
        <div className="container d-flex" style={{height: "100vh"}}>
            <div className="container bg-success d-flex flex-column justify-content-center align-items-center w-50 h-50">
                <h1>New here ?</h1>
                <Link to="/signup" className="btn btn-outline-warning m-2">Signup</Link>

            </div>
            <form onSubmit={handleSubmit} className="container bg-warning p-3 rounded d-flex flex-column justify-content-center w-75 h-50">
                <div className="mb-3">
                    <label htmlFor="" className="h5">Username</label>
                    <input 
                    type="text" 
                    className="form-control"
                    name = "username"
                    value={formInputs.username}
                    onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="h5">Password</label>
                    <input 
                    type="password" 
                    className="form-control"
                    name = "password"
                    value={formInputs.password} 
                    onChange={handleInput}
                    />
                </div>
               <button type="submit" className="btn btn-outline-success">Login</button>
            </form>
        
        </div>
    )
}