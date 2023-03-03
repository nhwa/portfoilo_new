import React, { useEffect, useState } from "react";
// import { WiMoonAltWaningCrescent3 } from "react-icons/wi";
import { ImSwitch } from "react-icons/im";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div onClick={themetoggle}>
      <ImSwitch />
    </div>
  );
};

export default Themetoggle;
