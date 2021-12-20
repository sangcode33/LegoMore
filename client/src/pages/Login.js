import Header1 from "../components/Header1";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";
import "./Login.css";
import axios from "axios";
import { useState } from "react";

const Login = ({ handleResponseSuccess }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleSignin = () => {
    if (loginInfo.email === "" || loginInfo.password === "") {
      alert("아이디와 비밀번호를 입력해 주세요");
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
      <Nav />
      <hr />
      <div className="login-main">
        <div className="login-title">로그인</div>

        <div className="login-email">
          <input
            type="text"
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
          <button onClick={handleSignin}>로그인</button>
        </div>
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
