import Header1 from "../components/Header1";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";
import "./Signup.css";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  const handleSignup = () => {
    if (
      userInfo.email === "" ||
      userInfo.password === "" ||
      userInfo.nickname === ""
    ) {
      alert("모든 항목을 입력해 주세요");
    } else {
      axios
        .post("http://localhost:4000/users/signup", userInfo, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("Signup : ", res);
        });
    }
  };

  return (
    <div>
      <Header1 />
      <LogoImage />
      {/* <Nav /> */}
      <hr />
      <div className="signup-main">
        <h1>회원가입</h1>
        <div className="signup-email">
          <input
            type="email"
            placeholder="email"
            onChange={handleInputValue("email")}
          ></input>
        </div>
        <div className="signup-password">
          <input
            type="password"
            placeholder="password"
            onChange={handleInputValue("password")}
          ></input>
        </div>
        <div className="signup-nickname">
          <input
            type="text"
            placeholder="Nickname"
            onChange={handleInputValue("nickname")}
          ></input>
        </div>
        <div className="btn">
          <button onClick={handleSignup}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
