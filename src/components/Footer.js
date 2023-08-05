import React from "react";
import "./Footer.css";
import footer_logo from "./footer_logo.png";
import pinterest from "./pinterest.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-address">
          <img src={footer_logo} alt="" />
        </div>
        <div className="footer-contactus">
          <p>
            <b>Company Information</b>
          </p>
          <a href="About Us">
            <p id="con1">About Us</p>
          </a>
          <a href="Careers">
            <p id="con2">Careers</p>
          </a>
          <a href="Td">
            <p id="con3">Terms & Conditions</p>
          </a>
          <a href="PP">
            <p id="con4">Privacy Policy</p>
          </a>
          <a href="Dp">
            <p id="con5">Discount Policy</p>
          </a>
        </div>
        <div className="footer-socialmedia">
          <div>
            <p id="soc">
              <b>Social</b>
            </p>
          </div>
          <div className="social-icons">
            <a
              href="https://in.pinterest.com/mohnishkalaimani/"
              
            >
              <img id="pinterest" src={pinterest} alt="pinterest" width="50" />
            </a>
            <a
              href="https://www.instagram.com/mohnish_kalaimani/"
              
            >
              <img id="instagram" src={instagram} alt="Instagram" width="50" />
            </a>
            <a href="https://twitter.com/MohnishKalaima1" >
              <img id="twitter" src={twitter} alt="twitter" width="50" />
            </a>
            <a
              href="https://www.facebook.com/mohnish.kalaimani.3"
              
            >
              <img id="facebook" src={facebook} alt="facebook" width="50" />
            </a>
          </div>
        </div>
      </div>

      {/* <!-- copyright section --> */}
      {/* <div className="sc-gKPRtg hNjWRC">
    <p>Copyright © 2022-23 LEO CLUB OF SIES. All rights reserved.</p>
  </div> */}
      {/* <div className="footerbox">
        <div className="footerlogobox">
          <img src={logo} alt="logo" id="logo"/>
        </div>
        <div className="company">Company Information</div>
        <div className="companyinfo">
          <p> About Us </p>
          <br />
          <p>Careers </p>
          <br />
          <p>Terms & Condition </p>
          <br />
          <p>Private Policy </p>
          <br />
          <p>Discount Policy </p>
          <br />
        </div>
      <div className="follow">Follow us</div>
      <div className="followinfo">
        <p> Join us on Facebook </p>
        <br />
        <p>Follow us on Twitter </p>
        <br />
        <p>Follow us on Threads </p>
        <br />
        <p>See us on Instagram</p>
        <br />
        <p>Pin us on Pinterest </p>
        <br />
      </div>
      </div> */}
    </>
  );
}
