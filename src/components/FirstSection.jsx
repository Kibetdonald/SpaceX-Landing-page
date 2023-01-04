import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/FirstSection.scss";
import { BsPlayCircle } from "react-icons/bs";

export default function FirstSection() {
  return (
    <div className="FirstSection">
      <BsPlayCircle className="PlayCircle" />
      <br />
      <h4 className="headerText">The Ultimate Photo Gallery Website</h4>
      <div className="statistics">
        <div>
          <h5>1658</h5>
          <p>Photos</p>
        </div>
        <div className="statistics1">
          <h5>Expert</h5>
          <p>Level</p>
        </div>
        <div className="statistics1">
          <h5>High-Quality</h5>
          <p>Image Quality</p>
        </div>
      </div>
      {/* Make it count */}
      <div className="makeitcount">
        {/* One */}
        <div className="makeitcount1">
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke="green"
              stroke-width="1"
              fill="white"
            />
            SVG.
            <text
              fill="#000000"
              font-size="12"
              font-family="Verdana"
              x="40"
              y="55"
            >
              01
            </text>
          </svg>
          <p>Be a professional landscape photographer</p>
        </div>
        {/* Two */}
        {/* One */}
        <div className="makeitcount1">
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke="green"
              stroke-width="1"
              fill="white"
            />
            SVG.
            <text
              fill="#000000"
              font-size="12"
              font-family="Verdana"
              x="40"
              y="55"
            >
              02
            </text>
          </svg>
          <p>Learn top secrets of photography</p>
        </div>
        {/* Three */}
        {/* One */}
        <div className="makeitcount1">
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke="green"
              stroke-width="1"
              fill="white"
            />
            SVG.
            <text
              fill="#000000"
              font-size="12"
              font-family="Verdana"
              x="40"
              y="55"
            >
              03
            </text>
          </svg>
          <p>Hire experts photographers in any location at your convinience</p>
        </div>
        {/* Four */}
        <div className="makeitcount1">
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke="green"
              stroke-width="1"
              fill="white"
            />
            SVG.
            <text
              fill="#000000"
              font-size="12"
              font-family="Verdana"
              x="40"
              y="55"
            >
              04
            </text>
          </svg>
          <p>Purchase the best photos of any category from landscape, to wildlife.</p>
        </div>
      </div>
    </div>
  );
}
