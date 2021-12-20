import Header1 from "../components/Header1";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";
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
      <Nav />
      <div className="signup-main">
        <div>회원가입</div>
        <input placeholder="email" onChange={handleInputValue("email")}></input>
        <input
          placeholder="password"
          onChange={handleInputValue("password")}
        ></input>
        <input
          placeholder="Nickname"
          onChange={handleInputValue("nickname")}
        ></input>
        <button onClick={handleSignup}>회원가입</button>
      </div>
    </div>
  );
};

export default Signup;
