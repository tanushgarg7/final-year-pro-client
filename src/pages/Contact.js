import React from "react";
import Layout from "../component/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact =() =>{
      return(
        <Layout title={"Contact us"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/contact.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <h1 className="bg-dark  text-white text-center">CONTACT US</h1>
            <p className="text-justify mt-2">
            If you have questions or need assistance regarding gemstone, please get in touch with us:
            </p>
            <p className="mt-3">
              <BiMailSend /> : www.help@gstone.com
            </p>
            <p className="mt-3">
              <BiPhoneCall /> : 091-3456789
            </p>
            <p className="mt-3">
              <BiSupport /> : 1800-1200-0202 (Toll free)
            </p>
          </div>
        </div>
      </Layout>
      );
};

export default Contact;