import React from "react";
import "./footer2.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <Link to="https://www.facebook.com/netflix/" target="_blank">
          <FacebookOutlinedIcon />
        </Link>
        <Link to="https://www.instagram.com/netflix/" target="_blank">
          <InstagramIcon />
        </Link>
        <Link to="https://www.twitter.com/netflix/" target="_blank">
          <TwitterIcon />
        </Link>
        <Link to="https://www.youtube.com/@Netflix" target="_blank">
          <YouTubeIcon />
        </Link>
      </div>
      <ul>
        <li>
          <Link
            to="https://www.netflix.com/browse/audio-description"
            target="_blank"
          >
            Audio Description
          </Link>
        </li>
        <li>
          <Link
            to="https://ir.netflix.net/ir-overview/profile/default.aspx"
            target="_blank"
          >
            Investor Relations
          </Link>
        </li>
        <li>
          <Link to="https://help.netflix.com/legal/privacy" target="_blank">
            Privacy
          </Link>
        </li>
        <li>
          <Link to="https://help.netflix.com/en/contactus" target="_blank">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="https://help.netflix.com/en/" target="_blank">
            Help Center
          </Link>
        </li>
        <li>
          <Link to="https://jobs.netflix.com/" target="_blank">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="https://help.netflix.com/legal/notices" target="_blank">
            Legal Notices
          </Link>
        </li>
        <li>
          <Link to="https://help.netflix.com/legal/dnsspi" target="_blank">
            Do Not Sell or Share My Personal Information
          </Link>
        </li>
        <li>
          <Link to="https://www.netflix.com/redeem" target="_blank">
            Gift Cards
          </Link>
        </li>
        <li>
          <Link to="https://www.netflix.shop/" target="_blank">
            Netflix Shop
          </Link>
        </li>
        <li>
          <Link
            to="https://help.netflix.com/legal/privacy#cookies"
            target="_blank"
          >
            Cookie Preferences
          </Link>
        </li>
        <li>
          <Link to="https://help.netflix.com/legal/dnsspi#DAA" target="_blank">
            Ad Choices
          </Link>
        </li>
        <li>
          <Link to="https://media.netflix.com/en/" target="_blank">
            Media Center
          </Link>
        </li>
        <li>
          <Link to="https://help.netflix.com/legal/termsofuse" target="_blank">
            Terms of Use
          </Link>
        </li>
        <li>
          <Link to="https://help.netflix.com/en/node/134094" target="_blank">
            Corporate Information
          </Link>
        </li>
      </ul>
      <div className="service_code">
        <p>
          <Link to="#">Service Code</Link>
        </p>
      </div>
      <div className="copyright_text">
        <p>
          <Link to="#">&copy; 1997-2024 Netlfix, Inc.</Link>
        </p>
        <h3>
          Built By: <Link to="https://yaredlbekele.com/">Yared LB</Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer2;
