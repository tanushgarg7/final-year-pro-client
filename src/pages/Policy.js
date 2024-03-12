import React from "react";
import Layout from "../component/Layout/Layout";


const Policy =() =>{
      return(
        <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Privacy.jpg"
            alt="PrivacyPolicy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
            <h4>Information we automatically collect about you.</h4>
             <h5> We will use this information:</h5>
          
        </div>
      </div>
    </Layout>
      );
};

export default Policy;