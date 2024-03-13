import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./SwitchLang.css";

export default function SwitchLang() {
  const { toggleLanguage } = useLanguage();
  const handleChange = () => {
    toggleLanguage();
  };
  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        onClick={handleChange}
      ></input>
      <label htmlFor="language-toggle"></label>
      <span className="on">🇺🇸</span>
      <span className="off">🇸🇦</span>
    </div>
  );
}
