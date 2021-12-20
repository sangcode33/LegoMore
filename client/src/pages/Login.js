import Header1 from "../components/Header1";
import React, { useState } from "react";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";
import axios from "axios";
import "./Login.css";

const Login = ({ handleResponseSuccess }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleSignin = () => {
    if (loginInfo.email === "" || loginInfo.password === "") {
      setErrorMessage("아이디와 이메일을 입력해주세요.");
    } else {
      axios
        .post("http://localhost:4000/users/signin", loginInfo, {
          withCredentials: true,
        })
        .then((res) => {
          handleResponseSuccess();
        });
    }
  };

  return (
    <div>
      <Header1 />
      <LogoImage />
      {/* <Nav /> */}
      <hr />
      <div className="login-main">
        <h1 className="login-title">로그인</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="login-email">
            <input
              type="email"
              placeholder="email"
              onChange={handleInputValue("email")}
            ></input>
          </div>

          <div className="login-password">
            <input
              type="password"
              placeholder="password"
              onChange={handleInputValue("password")}
            ></input>
          </div>

          <div className="btn">
            <button type="submit" onClick={handleSignin}>
              로그인
            </button>
            <div className="alert-box">{errorMessage}</div>
          </div>
        </form>
        <hr />
        <div className="sns-title">SNS 간편로그인</div>
        <div className="btn-kakao">
          <button> 카카오 로그인 →</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
