import React, { useEffect, useState } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/netflix_logo.png";
import NetflixAvatar from "../../assets/images/Netflix-avatar.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavBar from "./NavBar";

const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  //   document.getElementById("search-icon").addEventListener("click", function() {
  //     document.getElementById("search-bar").style.display = "block";
  //   });
  return (
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
        <div className="nav_header">
          <NavBar />
        </div>
        <div className="header_left">
          <ul>
            <li>
              <a href="https://signup.netflix.com" target="_blank">
                <img src={NetflixLogo} alt="Netflix logo" width="100" />
              </a>
            </li>
            <li>
              <a
                href="https://www.netflix.com/browse
"
                target="_blank"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://www.netflix.com/browse/genre/83
"
                target="_blank"
              >
                TV Shows
              </a>
            </li>
            <li>
              <a
                href="https://www.netflix.com/latest
"
                target="_blank"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="https://www.netflix.com/latest
"
                target="_blank"
              >
                New & Popular
              </a>
            </li>
            <li>
              <a
                href="https://www.netflix.com/browse/my-list
"
                target="_blank"
              >
                My List
              </a>
            </li>
            <li>
              <a
                href="https://www.netflix.com/browse/original-audio "
                target="_blank"
              >
                Browse by Languages
              </a>
            </li>
          </ul>
        </div>
        {/* <div>
        <select className="dropdown_menu" name="" id="">
              <option value="home">Browse</option>
              <option value="home">Home</option>
              <option value="tv shows">TV Shows</option>
              <option value="movies">Movies</option>
              <option value="new&popular">New & Popular</option>
              <option value="my list">My List</option>
              <option value="browse by languages">Browse by Languages</option>
            </select>
        </div> */}
        <div className="header_right">
          <ul>
            <li>
              {/* <input type="search" id="search-bar" /> */}
              {/* <button type="submit">Search</button> */}
              {/* <a onClick={"search-icon"} id="search-icon" href="#"> */}
              <a href="#">
                <SearchIcon />
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com/Kids" target="_blank">
                Kids
              </a>
            </li>
            <li>
              <a href="#">
                <NotificationsNoneIcon />
              </a>
            </li>
            <li className="avatar">
              <a href="#" target="_blank">
                <img src={NetflixAvatar} alt="Netflix Avatar" width="25" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <ArrowDropDownIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
