import React from "react";
import "./Footer.css";
import facebook from "../images/face.svg";
import twitter from "../images/tw.svg";
import instar from "../images/insta.svg";
import naver from "../images/naver.svg";
import git from "../images/pngegg.png";

const Footer = function () {
  return (
    <div className="main-footer">
      <span className="social">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instar} alt="" />
        <img src={naver} alt="" />
      </span>

      <div className="container-footer">
        <div>About Service</div>
        <a href="https://github.com/codestates/LegoMore">LegoMore</a>
        <div className="git">
          <div className="name">About Us</div>
          <a href="#">
            권상현 <img src={git} alt="" />
          </a>

          <a href="#">
            김경훈 <img src={git} alt="" />
          </a>
          <br />
          <a href="#">
            김장겸 <img src={git} alt="" />
          </a>
          <a href="#">
            오예림 <img src={git} alt="" />
          </a>
        </div>
      </div>

      <div className="copyright">
        © Copyright 2021 Team MeltingBrain. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
