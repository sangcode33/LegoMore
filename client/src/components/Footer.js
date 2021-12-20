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
        <a target="_blank" href={"https://www.facebook.com/"}>
          <img src={facebook} alt="" />
        </a>
        <a target="_blank" href={"https://twitter.com/"}>
          <img src={twitter} alt="" />
        </a>
        <a target="_blank" href={"https://www.instagram.com/"}>
          <img src={instar} alt="" />
        </a>
        <a target="_blank" href={"https://www.naver.com/"}>
          <img src={naver} alt="" />
        </a>
      </span>

      <div className="container-footer">
        <div>About Service</div>
        <a target="_blank" href={"https://github.com/codestates/LegoMore"}>
          LegoMore
        </a>

        {/* // <a target='_blank' href={'Your_url'})}>Your Text</a> */}
        <div className="git">
          <div className="name">About Us</div>
          <a target="_blank" href={"https://github.com/sangcode33"}>
            권상현 <img src={git} alt="" />
          </a>
          <span>|</span>

          <a target="_blank" href={"https://github.com/gusdnvkfks/"}>
            김경훈 <img src={git} alt="" />
          </a>
          <br />
          <a target="_blank" href={"https://github.com/codedot21/"}>
            김장겸 <img src={git} alt="" />
          </a>
          <span>|</span>
          <a target="_blank" href={"https://github.com/riaoh/"}>
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
