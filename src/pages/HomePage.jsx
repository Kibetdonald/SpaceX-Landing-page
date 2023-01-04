import React from "react";
import ChooseUs from "../components/ChooseUs";
import FirstSection from "../components/FirstSection";
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/NavBar";
import SkillsComponents from "../components/SkillsComponents";

export default function () {
  return (
    <div>
      <Navbar />
      <FirstSection/>
      <SkillsComponents/>
      <ChooseUs/>
      <FooterComponent/>
    </div>
  );
}
