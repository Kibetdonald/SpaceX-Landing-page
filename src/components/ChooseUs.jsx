import React from "react";
import "../assets/styles/ChooseUs.scss";
import choose from "../assets/images/choose.png";
import choose1 from "../assets/images/photo.jpg";
import { BiChevronRight } from "react-icons/bi";

export default function ChooseUs() {
  return (
    <div className="ChooseUs">
      <h2>Why Choose Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={choose} alt="choose" className="ChooseImage"/>
        </div>
        <div className="col-md-6">
          <h3 className="MoreInfoTitle">State of the art photos</h3>
         <p className="MoreInfo"> <BiChevronRight className="RightIcon"/>
            It’s useful to understand the different types of photography and
            genres practiced today.{" "}
          </p>
         <p className="MoreInfo"> <BiChevronRight className="RightIcon"/>
            On one hand, it’s good to know that you aren’t missing out on good
            pictures from photographers who capture different subjects than you
            do.
          </p>
        <p className="MoreInfo">  <BiChevronRight className="RightIcon"/>
            But more importantly, when you see a wide range of photographic
            types and styles, you might be inspired to try out another genre of
            photography for yourself.
          </p>

        <p className="MoreInfo"> <BiChevronRight className="RightIcon"/> 
            Although this list doesn’t cover every genre, it outlines many of
            the most important.
          </p>
        </div>
      </div>
      {/* Second row */}
      <div className="row">
      <div className="col-md-6">
          <h3 className="MoreInfoTitle">State of the art photos</h3>
         <p className="MoreInfo"> <BiChevronRight className="RightIcon"/>
            It’s useful to understand the different types of photography and
            genres practiced today.{" "}
          </p>
         <p className="MoreInfo"> <BiChevronRight className="RightIcon"/>
            On one hand, it’s good to know that you aren’t missing out on good
            pictures from photographers who capture different subjects than you
            do.
          </p>
        <p className="MoreInfo">  <BiChevronRight className="RightIcon"/>
            But more importantly, when you see a wide range of photographic
            types and styles, you might be inspired to try out another genre of
            photography for yourself.
          </p>

        <p className="MoreInfo"> <BiChevronRight className="RightIcon"/> 
            Although this list doesn’t cover every genre, it outlines many of
            the most important.
          </p>
        </div>
        <div className="col-md-6">
          <img src={choose1} alt="choose" className="ChooseImage"/>
        </div>

      </div>
    </div>
  );
}
