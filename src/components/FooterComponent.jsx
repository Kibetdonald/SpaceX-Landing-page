import React from "react";
import "../assets/styles/FooterComponent.scss";
import ScrollToTop from "react-scroll-to-top";
import { SocialIcon } from "react-social-icons";
import { FaArrowUp } from "react-icons/fa";

export default function FooterComponent() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="FooterSection">
      <footer className="footer">
        <ScrollToTop
          component={<FaArrowUp />}
          style={{
            color: "#f54f0d",
            fontSize: "30px",
            boxShadow: "none",
            width: "0px",
            height: "0px",
            paddingBottom: "1em",
            paddingRight: "0.6em",
            backgroundColor: "transparent",
          }}
          smooth
        />
        <div className="container">
          <div className="footer-section">
            <div className="footer-col">
              <h4>Important Link</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Showcase</a>
                </li>
                <li>
                  <a href="#">Hire Photographers</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Learn new skills</h4>
              <ul>
                <li>
                  <a href="#">Photography</a>
                </li>
                <li>
                  <a href="#">Editing</a>
                </li>
                <li>
                  <a href="#">Shades</a>
                </li>
                <li>
                  <a href="#">Types of photographs</a>
                </li>
             
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Help & Support</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy and Cookies</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Reach out to us</h4>
              <div className="social-links">
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  <SocialIcon
                    network="whatsapp"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  <SocialIcon
                    network="twitter"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  <SocialIcon
                    network="tiktok"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  <SocialIcon
                    network="instagram"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="SubLandingPageFooter">
            <hr />
            <p className="textOne">| THE | ULTIMATE | PHOTO | GALLERY |</p>
            <p className="textTwo">
              © 2022 Copyright SpaceX. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
