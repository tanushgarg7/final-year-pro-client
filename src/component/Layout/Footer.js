

import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" style={{

    paddingBottom: "1px",
    
    }}>
      <h1 className="text-center" style={{
        fontSize: "1.5rem"
      }}>All Right Reserved &copy; 2023</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|
        <Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};



export default Footer;
