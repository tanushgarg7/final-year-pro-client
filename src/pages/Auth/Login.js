import React, { useState } from "react";
import Layout from "./../../component/Layout/Layout";
import { useNavigate,useLocation } from "react-router-dom";
import "./Authstyle/authstyle.css";
import { useAuth } from "../../context/auth";
export const Login = () => {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth,setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
  return (
    < Layout title={"Register EcommerceApp"}>
        <div className="form-container">
         
        <form >
            <h4 className="title">LOGIN FORM</h4>
              <div className="mb-3">
                    <input 
                      type="email"
                      value ={email} 
                      onChange={(e)=>setEmail(e.target.value)}
                      className="form-control" 
                      id="exampleInputEmail1"
                      placeholder="Enter your Email"
                      required 
                      /> 
              </div>

              <div className="mb-3">
                    <input 
                      type="password" 
                      onChange={(e)=>setPassword(e.target.value)}
                      value ={password}
                      className="form-control" 
                      id="exampleInputPassword1" 
                      placeholder="Enter your Password"
                      required
                      />
              </div>

              <div className="mb-3">
                        <button
                        type="button"
                        className="btn forgot-btn"
                        onClick={() => {
                            navigate("/forgot-password");
                        }}
                        >
                        Forgot Password
                        </button>
               </div>

              <button type="submit" className="btn btn-primary">LOGIN</button>
          </form>

        </div>
    </Layout>
  )
}


export default Login;