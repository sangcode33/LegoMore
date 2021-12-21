import Header1 from "../components/Header1";
import React, { useState } from "react";
import LogoImage from "../components/Logo";
import axios from "axios";
import "./Login.css";
import { KAKAO_AUTH_URL } from "../components/OAuth";

const Login = ({ handleResponseSuccess }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

  const emailCheck = (email) => {
    let regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email === "") {
      setErrorEmailMessage();
      return false;
    }
    if (!regExp.test(email)) {
      setErrorEmailMessage();
      return false;
    }
    setErrorEmailMessage();
    return true;
  };

  const passwordCheck = (password) => {
    let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password === "") {
      setErrorPasswordMessage();
      return false;
    }
    if (!regExp.test(password)) {
      setErrorPasswordMessage();
      return false;
    }
    setErrorPasswordMessage();
    return true;
  };

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleSignin = () => {
    if (!loginInfo.email) {
      setErrorEmailMessage("가입한 이메일을 입력하세요");
      return;
    } else if (!emailCheck(loginInfo.email)) {
      setErrorEmailMessage("이메일 형식으로 작성해주세요");
      return;
    } else if (!loginInfo.password) {
      setErrorPasswordMessage("비밀번호를 입력하세요");
      return;
    } else if (!passwordCheck(loginInfo.password)) {
      setErrorPasswordMessage("비밀번호는 숫자 포함 8글자 이상입니다");
      return;
    }
    axios
      .post("http://localhost:4000/users/signin", loginInfo, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
        // console.log("Login 69 : ", res.data.data.accessToken);
        handleResponseSuccess(res.data.data.accessToken);
        // alert("로그인에 성공하셨습니다");
      });
  };

  return (
    <div>
      <Header1 />
      <LogoImage />
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
          <div className="alert-box">{errorEmailMessage}</div>

          <div className="login-password">
            <input
              type="password"
              placeholder="password"
              onChange={handleInputValue("password")}
            ></input>
          </div>
          <div className="alert-box">{errorPasswordMessage}</div>

          <div className="btn">
            <button type="submit" onClick={handleSignin}>
              로그인
            </button>
          </div>
        </form>
        <hr />
        <div className="sns-title">SNS 간편로그인</div>
        <div className="btn-kakao">
          <button>
            <a href={KAKAO_AUTH_URL}> 카카오 로그인 → </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
