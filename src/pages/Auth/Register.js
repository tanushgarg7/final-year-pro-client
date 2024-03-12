import React, { useState } from "react";
import Layout from "./../../component/Layout/Layout";
import { useNavigate } from "react-router-dom";
import "./Authstyle/authstyle.css";

 const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
 const navigate = useNavigate();
  return (
   < Layout title={"Register EcommerceApp"}>
        <div className="form-container">
        
        <form >
          <h4 className="title">REGISTER FORM</h4>
              <div className="mb-3">
                    <input 
                    type="text" 
                    value ={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    placeholder="Enter your Name"
                    required
                    /> 
              </div>

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
                      <input 
                      type="text" 
                      value ={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                      className="form-control" 
                      id="exampleInputEmail1" 
                      placeholder="Enter your Phone"
                      required
                      /> 
                </div>

              <div className="mb-3">
                      <input 
                      type="text"
                      value ={address}
                      onChange={(e)=>setAddress(e.target.value)} 
                      className="form-control" 
                      id="exampleInputEmail1" 
                      placeholder="Enter your Address"
                      required
                      /> 
              </div>

              <div className="mb-3">
                      <input 
                      type="text"
                      value ={answer}
                      onChange={(e)=>setAnswer(e.target.value)} 
                      className="form-control" 
                      id="exampleInputEmail1" 
                      placeholder=" what is your Favorite Game"
                      required
                      /> 
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
    </Layout>
  );
};

export default Register;