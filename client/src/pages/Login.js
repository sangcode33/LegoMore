import Header1 from "../components/Header1";
import React, { useState } from "react";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";
import axios from "axios";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    if (loginInfo.email === "" || loginInfo.password === "") {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
    } else {
      axios.post("https://localhost:4000/signin", loginInfo);
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
      <div className="login-main">
        <h1>로그인</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="email"
            type="email"
            onChange={handleInputValue("email")}
          ></input>
          <input
            placeholder="password"
            type="password"
            onChange={handleInputValue("password")}
          ></input>
          <button type="submit" onClick={handleLogin}>
            로그인
          </button>
          <div className="alert-box">{errorMessage}</div>
        </form>
      </div>
      <button>Kakao</button>
    </div>
  );
};

export default Login;
