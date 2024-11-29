
import { Link } from "react-router-dom"

export default function Signup( {formInputs, setFormInputs}){
   
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
        setFormInputs({}); // Clear form inputs after success
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  }
    return (
        <div className="container d-flex" style={{height: "100vh"}}>
            <div className="container bg-success d-flex flex-column justify-content-center align-items-center w-50 h-50">
                <h1>Welcome Back</h1>
                <Link to="/login" className="btn btn-outline-warning m-2">Login</Link>

            </div>
            <form 
                className="container bg-warning p-3 rounded d-flex flex-column justify-content-center w-75 h-50"
                onSubmit={handleSubmit}
                >
                <div className="mb-3">
                    <label htmlFor="" className="h5">Username</label>
                    <input 
                        type="text"    
                        className="form-control" 
                        name="username"
                        onChange={handleInput}
                        value={formInputs.username}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="h5">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        onChange={handleInput}
                        value={formInputs.email}
                        />
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="h5">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        onChange={handleInput}
                        value={formInputs.password}
                        />
                </div>
               <button 
                    type="submit" 
                    className="btn btn-outline-success"
                    >Signup</button>
            </form>
        
        </div>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                