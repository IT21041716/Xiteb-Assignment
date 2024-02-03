import React from "react";
import footer1 from "../assets/images/footeimg.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="pre-image">
          <img src={footer1} />
        </div>
        <div className="top-image"></div>
        <div className="footer-nav-container">
          <div className="nav-main">
            <div className="sub-div">
              <div className="componant1">
                <h2>Corporate information</h2>
                <h6>Royal Palmbay Hotels & Resorts</h6>
                <h6>Royal Palmbay Group</h6>
              </div>
              <div className="componant1">
                <h2>News and Awards</h2>
                <h6>News</h6>
                <h6>Awards</h6>
              </div>
              <div className="componant1" id="comp3">
                <h2>Data Privacy & Security Policy</h2>
                <h6>Terms & Conditions</h6>
                <h6>Privacy Statement</h6>
              </div>
            </div>
            <div className="sub-div">
              <div className="componant1">
                <h2>Blogs</h2>
                <h6>Cinnamon blog</h6>
              </div>
              <div className="componant1">
                <h2>Corporate Governance</h2>
                <h6>CSR</h6>
              </div>
              <div className="componant1" id="comp3">
                <h2>Get In Touch</h2>
                <h6>info@royalpalmbaynhotels.com</h6>
                <h6>Hotel Contact Information</h6>
              </div>
            </div>
            <div className="sub-div">
              <div className="componant1">
                <h2>Careers</h2>
                <h6>Careers</h6>
              </div>
              <div className="componant1"></div>
              <div className="componant1" id="comp3">
                <h2>Follow Us</h2>
                <div className="social-media">
                  <FacebookIcon className="icons" />
                  <TwitterIcon className="icons" />
                  <LinkedIn className="icons" />
                  <Instagram className="icons" />
                  <YouTube className="icons" />
                </div>
              </div>
            </div>
            <div className="sub-div">
              <div className="componant1" id="mailbox">
                <h2>Get Cinnamon in your inbox</h2>
                <div className="input-group">
                  <input type="email" placeholder="Email Address" />
                  <div className="btn-div">
                    <ChevronRightOutlinedIcon />
                  </div>
                </div>
                <div className="content-div">
                  <div className="chkbox-div">
                    <input type="checkbox" />
                  </div>
                  <div className="condition">
                    <h6>
                      By Checking this box, I consent to the processing of my
                      Personal Data by Cinnamon for the purpose and within the
                      Conditions set out in this form and the
                      <a className="ancor"> Royal Palmbay Data Protection Policy*</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="booknow">
          Book Now
        </div>
        <div className="footer-bottom-container"></div>
      </div>
    </div>
  );
};

export default Footer;
