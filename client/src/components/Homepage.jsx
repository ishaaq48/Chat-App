import { Link } from "react-router-dom"

export default function Homepage() {
    
  return (
    <div className="container d-flex justify-content-evenly">
      <h1>Home Page</h1>
      <div className="">
        <Link to="/signup" className="btn btn-outline-danger m-2">Signup</Link>
        <Link to="/login" className="btn btn-outline-danger m-2">Login</Link>
      </div>
      
    </div>
  )
}
