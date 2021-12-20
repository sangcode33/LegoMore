import "./App.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Nav from "./components/Nav";
import LogoImage from "./components/Logo";
import HeaderImage from "./pages/Main";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import MyPage from "./pages/Mypage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import List from "./pages/List";
import axios from "axios";

//import imgA from './images/testA.png';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = () => {
    // console.log("App.js 페이지에 isAuthenticated 함수실행확인");
    axios
      .get("http://localhost:4000/users/auth", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("res : ", res);
        setUserInfo(res.data.data.userInfo);
        setIsLogin(true);
        console.log(isLogin);
        // 메이페이지로 넘겨주기
        navigate("/");
      });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLogin ? (
                <>
                  <Header2 />
                  <LogoImage />
                  <Nav />
                  <HeaderImage />
                </>
              ) : (
                <>
                  <Header1 />
                  <LogoImage />
                  <Nav />
                  <HeaderImage />
                </>
              )
            }
          ></Route>

          <Route
            path="/mypage"
            element={<MyPage userInfo={userInfo} />}
          ></Route>
          <Route
            path="/login"
            element={<Login handleResponseSuccess={handleResponseSuccess} />}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/goods/upload" element={<Upload />}></Route>
          <Route path="/goods/goods" element={<List />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
