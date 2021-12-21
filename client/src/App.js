import "./App.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Nav from "./components/Nav";
import LogoImage from "./components/Logo";
import HeaderImage from "./pages/Main";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import MyPage from "./pages/Mypage.js";
import Detail from "./pages/Detail.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Signup from "./pages/Signup";
import List from "./pages/List";
import axios from "axios";

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
    // console.log("App.js 37번줄 : ", data);
    setAccessToken(data);
    isAuthenticated();
  };

  const goLoginPage = () => {
    navigate("/users/login");
  };

  const handleLogout = () => {
    axios.get("http://localhost:4000/users/signout").then((res) => {
      setUserInfo(null);
      setIsLogin(false);
      navigate("/");
    });
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
                {/* <Nav /> */}
                <HeaderImage />
              </>
            ) : (
              <>
                <Header1 />
                <LogoImage />
                {/* <Nav /> */}
                <HeaderImage />
              </>
            )
          }
        ></Route>

        <Route
          path="/users/mypage"
          element={<MyPage userInfo={userInfo} accessToekn={accessToekn} />}
        ></Route>

        <Route path="/goods/detail" element={<Detail />}></Route>

        <Route
          path="/users/login"
          element={<Login handleResponseSuccess={handleResponseSuccess} />}
        ></Route>
        <Route
          path="/users/signup"
          element={<Signup goLoginPage={goLoginPage} />}
        ></Route>
<<<<<<< HEAD
=======
        {/* <Route path="/oauth/callback/kakao" element={<Kakao />}></Route> */}
>>>>>>> 16c32d2ade0fca60b51a26ff4cd61d25d7ac6c55
        <Route path="/goods/goods" element={<List />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
