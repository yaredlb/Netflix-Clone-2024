import React from "react";
import "./footer2.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer2 = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <a href="https://www.facebook.com/netflix/" target="_blank">
          <FacebookOutlinedIcon />
        </a>
        <a href="https://www.instagram.com/netflix/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.twitter.com/netflix/" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.youtube.com/@Netflix" target="_blank">
          <YouTubeIcon />
        </a>
      </div>
      <ul>
        <li>
          <a
            href="https://www.netflix.com/browse/audio-description
"
            target="_blank"
          >
            Audio Description
          </a>
        </li>
        <li>
          <a
            href="https://ir.netflix.net/ir-overview/profile/default.aspx
"
            target="_blank"
          >
            Investor Relations
          </a>
        </li>
        <li>
          <a
            href="https://help.netflix.com/legal/privacy
"
            target="_blank"
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            href="https://help.netflix.com/en/contactus
"
            target="_blank"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="https://help.netflix.com/en/
"
            target="_blank"
          >
            Help Center
          </a>
        </li>
        <li>
          <a
            href="https://jobs.netflix.com/
"
            target="_blank"
          >
            Jobs
          </a>
        </li>
        <li>
          <a href="https://help.netflix.com/legal/notices" target="_blank">
            Legal Notices
          </a>
        </li>
        <li>
          <a
            href="https://help.netflix.com/legal/dnsspi
"
            target="_blank"
          >
            Do Not Sell or Share My Personal Information
          </a>
        </li>
        <li>
          <a
            href="https://www.netflix.com/redeem
"
            target="_blank"
          >
            Gift Cards
          </a>
        </li>
        <li>
          <a
            href="https://www.netflix.shop/
"
            target="_blank"
          >
            Netflix Shop
          </a>
        </li>
        <li>
          <a
            href="https://help.netflix.com/legal/privacy#cookies
"
            target="_blank"
          >
            Cookie Preferences
          </a>
        </li>
        <li>
          <a
            href="https://help.netflix.com/legal/dnsspi#DAA
"
            target="_blank"
          >
            Ad Choices
          </a>
        </li>
        <li>
          <a
            href="https://media.netflix.com/en/
"
            target="_blank"
          >
            Media Center
          </a>
        </li>
        <li>
          <a
            href="https://help.netflix.com/legal/termsofuse
"
            target="_blank"
          >
            Terms of Use
          </a>
        </li>
        <li>
          <a href="https://help.netflix.com/en/node/134094" target="_blank">
            Corporate Information
          </a>
        </li>
      </ul>
      <div className="service_code">
        <p>
        <a href="#">Service Code</a>
        </p>
      </div>
      <div className="copyright_text">
        <p >
        <a href="#">&copy; 1997-2024 Netlfix, Inc.</a>
      </p>
      <h3>
        Built By: <a href="https://yaredlbekele.com/">Yared LB</a>
      </h3>
      </div>
      
    </div>
  );
};

export default Footer2;
