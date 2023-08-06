import React from "react";
import "./sidebar.css";
import image from "./download.jpeg";
import { Link } from "react-router-dom";

const Sidebar = ({ hamburger }) => {
  const sidebarMenu = [
    {
      value: "Home",
      icon: "fa-solid fa-house",
      path: "/",
    },

    {
      value: "About",
      icon: "fa-solid fa-user",
      path: "/about",
    },

    {
      value: "Services",
      icon: "fa-solid fa-server",
      path: "/",
    },

    {
      value: "Portfolio",
      icon: "fa-solid fa-camera",
      path: "/",
    },

    {
      value: `Contact`,
      icon: "fa-solid fa-envelope",
      path: "/",
    },
  ];

  const sideMenuListItems = sidebarMenu.map((item) => {
    return (
      <li>
        <Link to={item.path}>
          <i className={item.icon}></i>
          {item.value}
        </Link>
      </li>
    );
  });

  return (
    <>
      <header className={hamburger ? "header header-toggle" : "header"}>
        <div className="profile">
          <img src={image} alt="profile-img" />
          <h1>Shadow</h1>

          <div className="social-icons">
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

          <div className="nav-menu">
            <ul>{sideMenuListItems}</ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
  