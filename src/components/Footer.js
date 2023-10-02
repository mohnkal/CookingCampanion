import React from "react";
import "./Footer.css";
import footer_logo from "./footer_logo.png";
import pinterest from "./pinterest.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "./contentwrapper/Contentwrapper";

export default function Footer() {
  const navigate = useNavigate();
  const onAboutUsClicked = () => {
    navigate('/About_Us');
  }
  return (
    <>
    {/* <ContentWrapper> */}
      <div className="footer-container">
        <div className="footer-address">
          <img src={footer_logo} alt="" />
        </div>
        <div className="footer-contactus">
          <p>
            <b>Company Information</b>
          </p>
          <a href="About_Us" onClick={onAboutUsClicked}>
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
    </>
  );
}
