import React, { useState } from "react";
import Layout from "./../../component/Layout/Layout";
import { useNavigate } from "react-router-dom";
import "./Authstyle/authstyle.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div className="form-container ">      
          <h4 className="title">RESET PASSWORD</h4>
          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        
      </div>
    </Layout>
  );
};

export default ForgotPassword;
