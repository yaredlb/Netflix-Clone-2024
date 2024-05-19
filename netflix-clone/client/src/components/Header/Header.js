import React, { useEffect, useState } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/netflix_logo.png";
import NetflixAvatar from "../../assets/images/Netflix-avatar.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
        <div className="nav_header">
          <NavBar />
        </div>
        <div className="header_left">
          <ul>
            <li>
              <Link to="https://signup.netflix.com" target="_blank">
                <img src={NetflixLogo} alt="Netflix logo" width="100" />
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tv">TV Shows</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/popular">New & Popular</Link>
            </li>
            <li>
              <Link to="/list">My List</Link>
            </li>
            <li>
              <Link to="/browse">Browse by Languages</Link>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <div className="search_box">
            <input type="text" placeholder="search ..." />
            <SearchIcon className="search_outline" />
          </div>
          <ul>
            <li>
              <Link to="/kids">Kids</Link>
            </li>
            <li>
              <Link to="#">
                <NotificationsNoneIcon />
              </Link>
            </li>
            <li className="avatar">
              <Link to="#">
                <img src={NetflixAvatar} alt="Netflix Avatar" width="25" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <ArrowDropDownIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
