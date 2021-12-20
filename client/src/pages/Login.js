import Header1 from "../components/Header1";
import React, { useState } from "react";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleSign = () => {
    if (loginInfo.email === "" || loginInfo.password === "") {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
    } else {
      axios.post("http://localhost:4000/users/signin", loginInfo);
      //.then(() => handleResponseSuccess());
      // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
      // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
    }
  };

  return (
    <div>
      <Header1 />
      <LogoImage />
      <Nav />
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
            <button type="submit" onClick={handleSign}>
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
