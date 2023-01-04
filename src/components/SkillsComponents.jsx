import React, {useState} from "react";
import "../assets/styles/SkillsComponents.scss";
import items from '../assets/data/allData'
import SkillsMenu from "./SkillsMenu";

export default function SkillsComponents() {
    const [menuItem, setMenuItem] = useState(items);
  return (
    <div className="SkillsComponents">
      <h5>Top Photography Classes</h5>
      <h3>Gain The Next Generation Skills</h3>
      <SkillsMenu menuItem={menuItem} />
    </div>
  );
}
