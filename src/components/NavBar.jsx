import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "../assets/styles/Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import banner from "../assets/images/image5.jpg";
import logo from "../assets/images/camera.png";
// import { RiCameraLensFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <img src={banner} alt="ImageBackground" className="bannerImage" />
      <div className="Navbar">
        <a href="/" className="nav-logo">
          {/* <RiCameraLensFill />  */}
          <img src={logo} alt="logo" style={{height: "45px", height: "45px"}}/>
          Spacex
        </a>
        <div className={`nav-items ${isOpen && "open"}`}>
          <NavHashLink to="/#home">Home </NavHashLink>
          <NavHashLink to="/#about">Showcase</NavHashLink>
          <NavHashLink to="/#features"> Hire Photographers </NavHashLink>
          <NavHashLink to="/#contact">Contact </NavHashLink>
        </div>
        <div className="nav-items">
          <NavHashLink to="/#search">
            <CiSearch style={{ fontSize: "20px" }} />{" "}
          </NavHashLink>
          <NavHashLink to="/#cart">
            <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
          </NavHashLink>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
   
    </>
  );
};

export default Navbar;
