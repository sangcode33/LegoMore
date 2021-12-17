import "./App.css";
import styled from "styled-components";
import logo from "../src/images/logo.png";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Nav from "./components/Nav";
import HeaderImage from "./pages/Main";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import MyPage from "./pages/Mypage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Signup from "./pages/Signup";

//import imgA from './images/testA.png';

const Logo = styled.img`
  height: 90px;
  display: block;
  margin: 0 auto;
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);
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
                  <Logo src={logo} alt="logo" />
                  <Nav />
                  <HeaderImage />
                </>
              ) : (
                <>
                  <Header1 />
                  <Logo src={logo} alt="logo" />
                  <Nav />
                  <HeaderImage />
                </>
              )
            }
          ></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
