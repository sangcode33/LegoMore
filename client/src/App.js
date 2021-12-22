import "./App.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import LogoImage from "./components/Logo";
import HeaderImage from "./pages/Main";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import MyPage from "./pages/Mypage.js";
import Detail from "./pages/Detail.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Signup from "./pages/Signup";
import axios from "axios";
import Kakao from "./components/Kakao";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [accessToekn, setAccessToken] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = () => {
    axios
      .get("http://localhost:4000/users/auth", {
        withCredentials: true,
      })
      .then((res) => {
        setUserInfo(res.data.data.userInfo);
        setIsLogin(true);
        navigate("/");
      });
  };

  const handleResponseSuccess = (data) => {
    setAccessToken(data);
    isAuthenticated();
  };

  const goLoginPage = () => {
    navigate("/users/login");
  };

  const handleLogout = () => {
    axios.get("http://localhost:4000/users/signout").then((res) => {
      setUserInfo(""); //null로 하니까 Header2 props로 넘긴 userId가 null로된다.
      setIsLogin(false);
      navigate("/");
    });
  };

  const LoginHanlder = (data) => {
    setUserInfo(data);
    console.log(userInfo);
    setIsLogin(true);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            isLogin ? (
              <>
                <Header2 handleLogout={handleLogout} userId={userInfo.id} />
                <LogoImage />
                <HeaderImage />
              </>
            ) : (
              <>
                <Header1 />
                <LogoImage />
                <HeaderImage />
              </>
            )
          }
        ></Route>
        <Route
          path="/users/mypage"
          element={
            <MyPage
              userInfo={userInfo}
              accessToekn={accessToekn}
              handleLogout={handleLogout}
            />
          }
        ></Route>
        <Route path="/goods/detail/:id" element={<Detail />}></Route>
        <Route
          path="/users/login"
          element={<Login handleResponseSuccess={handleResponseSuccess} />}
        ></Route>
        <Route
          path="/users/signup"
          element={<Signup goLoginPage={goLoginPage} />}
        ></Route>
        <Route
          path="/oauth/callback/kakao"
          element={<Kakao LoginHanlder={LoginHanlder} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
