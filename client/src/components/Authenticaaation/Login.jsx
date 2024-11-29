import { Link } from "react-router-dom"
export default function Login(){
    return (
           
        <div className="container d-flex" style={{height: "100vh"}}>
            <div className="container bg-success d-flex flex-column justify-content-center align-items-center w-50 h-50">
                <h1>New here ?</h1>
                <Link to="/signup" className="btn btn-outline-warning m-2">Signup</Link>

            </div>
            <form action="" className="container bg-warning p-3 rounded d-flex flex-column justify-content-center w-75 h-50">
                <div className="mb-3">
                    <label htmlFor="" className="h5">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="h5">Password</label>
                    <input type="password" className="form-control" />
                </div>
               <button type="submit" className="btn btn-outline-success">Login</button>
            </form>
        
        </div>
    )
}