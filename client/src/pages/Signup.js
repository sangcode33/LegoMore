import Header1 from "../components/Header1";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";
import "./Signup.css";
import axios from "axios";
import { useState } from "react";

const Signup = ({ goLoginPage }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [errorNicknameMessage, setErrorNicknameMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

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

  const handleSignup = () => {
    if (!userInfo.email) {
      setErrorEmailMessage("이메일을 입력하세요");
      return;
    } else if (!emailCheck(userInfo.email)) {
      setErrorEmailMessage("이메일 형식으로 작성해주세요");
      return;
    } else if (!userInfo.password) {
      setErrorPasswordMessage("비밀번호를 입력하세요");
      return;
    } else if (!passwordCheck(userInfo.password)) {
      setErrorPasswordMessage(
        "8글자 이상 숫자를 포함하는 비밀번호를 작성해주세요"
      );
      return;
    } else if (!userInfo.nickname) {
      setErrorNicknameMessage("닉네임을 입력하세요");
      return;
    }
    axios
      .post("http://localhost:4000/users/signup", userInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Signup : ", res);
        goLoginPage();
        alert("회원가입에 성공하셨습니다 바로 로그인 해주세요");
      });
  };

  return (
    <div>
      <Header1 />
      <LogoImage />
      <Nav />
      <hr />
      <div className="signup-main">
        <h1>회원가입</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="signup-email">
            <input
              type="email"
              placeholder="email"
              onChange={handleInputValue("email")}
            ></input>
          </div>
          <div className="error-message">{errorEmailMessage}</div>
          <div className="signup-password">
            <input
              type="password"
              placeholder="password"
              onChange={handleInputValue("password")}
            ></input>
          </div>
          <div className="error-message">{errorPasswordMessage}</div>
          <div className="signup-nickname">
            <input
              type="text"
              placeholder="Nickname"
              onChange={handleInputValue("nickname")}
            ></input>
          </div>
          <div className="error-message">{errorNicknameMessage}</div>
          <div className="btn">
            <button onClick={handleSignup}>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
