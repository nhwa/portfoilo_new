import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,hoverlogotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { Icon } from '@iconify/react';

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const [isHovering, setIsHovering] = useState(0);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex justify-content-between">
          <Link className="d-flex align-items-center navbar-brand nav_ac" to="/">
            <div onMouseEnter={() => setIsHovering(1)} onMouseLeave={() => setIsHovering(0)}>
              {
              isHovering
              ? <div> {hoverlogotext}<img src={process.env.PUBLIC_URL + '/imgs/layout/flower.png' } alt="logo_icon" /></div>
              : logotext
              }
            </div>
          </Link>
          <div className="d-flex navbar-right">
            <div className=" d-flex nav_ac align-items-center navbar-right"><Themetoggle /></div>
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <Icon icon="system-uicons:menu-hamburger" />}
            </button>
          </div>
        </div>

        {/* 햄버거 메뉴 */}
        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link onClick={handleToggle} to="/" className="my-3" >Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About Me</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.youtube}>Youtube</a>
            <a href={socialprofils.notion}>Notion</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
