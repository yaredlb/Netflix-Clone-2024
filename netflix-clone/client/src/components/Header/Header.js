import React, { useEffect, useState } from 'react';
import './Header.css';
import NetflixLogo from '../../assets/images/netflix_logo.png';
import NetflixAvatar from '../../assets/images/Netflix-avatar.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
    <div className={`header_outer_container ${show && 'nav_black'}`}>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li><a href="https://signup.netflix.com"><img src={NetflixLogo} alt="Netflix logo" width="100"/></a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">TV Shows</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">New & Popular</a></li>
                    <li><a href="#">My List</a></li>
                    <li><a href="#">Browse by Languages</a></li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><a href="#"><SearchIcon /></a></li>
                    <li><a href="https://www.netflix.com/Kids">Kids</a></li>
                    <li><a href="#"><NotificationsNoneIcon /></a></li>
                    <li><a href="#"><img src={NetflixAvatar} alt="Netflix Avatar" width="25"/></a></li>
                    {/* <li><AccountBoxIcon /></li> */}
                    <li><a href="#"><ArrowDropDownIcon /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;
