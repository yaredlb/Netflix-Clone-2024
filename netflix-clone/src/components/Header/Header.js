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
		// return () => {
		// 	window.removeEventListener("scroll");
		// };
	}, []);
  return (
    <div className={`header_outer_container ${show && 'nav_black'}`}>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li><img src={NetflixLogo} alt="Netflix logo" width="100"/></li>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><SearchIcon /></li>
                    <li>Kids</li>
                    <li><NotificationsNoneIcon /></li>
                    <li><img src={NetflixAvatar} alt="Netflix Avatar" width="25"/></li>
                    {/* <li><AccountBoxIcon /></li> */}
                    <li><ArrowDropDownIcon /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;
