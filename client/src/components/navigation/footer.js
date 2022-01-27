import React from "react";
// import ContactsIcon from "@material-ui/icons/Contacts";
// import TimelapseIcon from "@material-ui/icons/Timelapse";
// import PhoneIcon from "@material-ui/icons/Phone";
// import EmailIcon from "@material-ui/icons/Email";

import ContactsIcon from "@mui/icons-material/ContactMail";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

// import { useSelector } from "react-redux";
const Footer = () => {
  return (
    <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">WAVES</div>
        <div className="wrapper">
          <div className="left">
            <h2>Contact information</h2>
            <div className="business_nfo">
              <div className="tag">
                <ContactsIcon />
                <div className="nfo">
                  <div>Address</div>
                  <div>Street Address</div>
                </div>
              </div>
              <div className="tag">
                <TimelapseIcon />
                <div className="nfo">
                  <div>Phone</div>
                  <div>2323232</div>
                </div>
              </div>
              <div className="tag">
                <PhoneIcon />
                <div className="nfo">
                  <div>Working Hours</div>
                  <div>9am - 5pm</div>
                </div>
              </div>
              <div className="tag">
                <EmailIcon />
                <div className="nfo">
                  <div>Email</div>
                  <div>wilfred05777@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>Be the first to know</h2>
            <div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
