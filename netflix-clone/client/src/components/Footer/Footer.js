import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
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
        <div className="footer_data">
          <div className="footer_col">
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
            </ul>
          </div>
          <div className="footer_col">
            <ul>
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
                <a
                  href="https://help.netflix.com/legal/notices"
                  target="_blank"
                >
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
            </ul>
          </div>
          <div className="footer_col">
            <ul>
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
            </ul>
          </div>
          <div className="footer_col">
            <ul>
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
                <a
                  href="https://help.netflix.com/en/node/134094"
                  target="_blank"
                >
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
        </div>{""}
        <br /> <br />
        <div className="service_code">
          <p>
            <a href="#">Service Code</a>
          </p>
        </div>
        <div className="copy_right">
          <p>
            <a href="#">&copy; 1997-2024 Netlfix, Inc.</a>
          </p>
          <h3>
            Built By: <a href="https://yaredlbekele.com/">Yared LB</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
