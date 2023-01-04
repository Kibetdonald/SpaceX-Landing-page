import React from "react";
import PropTypes from "prop-types";

const SkillsMenu = ({ menuItem }) => {
  SkillsMenu.propTypes = {
    menuItem: PropTypes.number.isRequired,
  };
  return (
    <div className="item">
      {menuItem.map((item) => (
        <div className="item-con" key={item.id}>
          <div className="item-container">
            <img src={item.image} alt="" />
            <h2 className="PhotoTitle">{item.title}</h2>
            <p className="author">{item.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsMenu;
